import React from 'react';
import { useEffect, useState, ChangeEvent } from 'react';
import styles from './styles.module.scss';
import Image from '@/components/atoms/Image';

type Props = {
  identity: string;
  name?: string;
  label: string;
  value?: string;
  autoFocus?: boolean;
  required?: boolean;
  className?: string;
  error?: string;
  setFieldValue?: (field: string, value: string | File) => void;
  noImage?: string;
};

type Valid = {
  isInvalid: string;
  error: string;
};

const ImageInput = (props: Props) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [, setBase64] = useState<string>('');
  // 初回マウント時のみ Laravel のエラーを取り込む（読み取りは初期化関数で一度だけ行う）
  const [laravelValid] = useState<Valid>(() => {
    if (typeof window !== 'undefined' && window.laravelErrors?.[props.identity]) {
      return { error: window.laravelErrors[props.identity][0], isInvalid: ' is-invalid' };
    }
    return { error: '', isInvalid: '' };
  });

  // グローバル変数の変更は副作用としてエフェクト内で行う
  useEffect(() => {
    if (typeof window !== 'undefined' && window.laravelErrors?.[props.identity]) {
      delete window.laravelErrors[props.identity];
    }
  }, [props.identity]);

  // props.error から直接導出する（state化は不要）
  const valid: Valid = props.error
    ? { error: props.error, isInvalid: ' is-invalid' }
    : { error: '', isInvalid: '' };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  // NoImage画像が指定されている場合は、ドラック&ドロップでも画像を選択できるようにする
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setBase64(result);
      setPreview(result);
      if (props.setFieldValue) {
        props.setFieldValue(props.name || props.identity, result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={props.className}>
      <label className="font-bold" htmlFor={props.identity}>
        {props.label}
        {props.required && <span className="ml-2 text-red-600 text-sm font-normal">必須</span>}
      </label>
      <input
        id={props.identity}
        type="file"
        accept="image/*"
        className={`btn ${styles.formControl} ${valid.isInvalid}`}
        autoFocus={props.autoFocus}
        required={props.required}
        onChange={handleChange}
      />
      <input type="hidden" name={props.name || props.identity} value={props.value} />
      <div
        className={styles.previewContainer}
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
      >
        {preview ? (
          <Image src={preview} alt="プレビュー" className={styles.previewImage} />
        ) : (
          props.noImage && (
            <Image src={props.noImage} alt="no image" className={styles.previewImage} />
          )
        )}
      </div>
      {laravelValid.error && (
        <p className={styles.error}>
          <strong>{laravelValid.error}</strong>
        </p>
      )}
      {valid.error && (
        <p className={styles.error}>
          <strong>{valid.error}</strong>
        </p>
      )}
    </div>
  );
};

export default ImageInput;
