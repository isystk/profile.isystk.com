import { useEffect, useState, ChangeEvent } from 'react';
import styles from './styles.module.scss';

type Props = {
  identity: string;
  name?: string;
  autoComplete?: string;
  label: string;
  defaultValue?: string;
  action?: (value: string) => void;
  autoFocus?: boolean;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  className?: string;
  error?: string;
  rows?: number;
  cols?: number;
};

type Valid = {
  isInvalid: string;
  error: string;
};

const TextArea = (props: Props) => {
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

  return (
    <div className={props.className}>
      <label className="font-bold" htmlFor={props.identity}>
        {props.label}
        {props.required && <span className="ml-2 text-red-600 text-sm font-normal">必須</span>}
      </label>
      <textarea
        id={props.identity}
        name={props.name || props.identity}
        className={`${styles.formControl} ${valid.isInvalid}`}
        autoComplete={props.autoComplete}
        autoFocus={props.autoFocus}
        required={props.required}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        defaultValue={props.defaultValue}
        readOnly={props.value !== undefined && !props.onChange}
        rows={props.rows || 4}
        cols={props.cols || 50}
      />
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

export default TextArea;
