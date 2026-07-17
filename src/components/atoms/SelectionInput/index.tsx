import React from 'react';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

type Option = {
  label: string;
  value: string;
};

type Props = {
  identity: string;
  label?: string;
  controlType: 'checkbox' | 'radio';
  options: Option[];
  name?: string;
  checkedValues?: string[]; // For checkboxes
  selectedValue?: string; // For radio
  required?: boolean;
  error?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type Valid = {
  isInvalid: string;
  error: string;
};

const SelectionInput = (props: Props) => {
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
    <fieldset className={props.className || ''}>
      <legend className="font-bold">
        {props.label}
        {props.label && props.required && (
          <span className="ml-2 text-red-600 text-sm font-normal">必須</span>
        )}
      </legend>
      <div className="space-y-2">
        {props.options.map((option, index) => {
          const id = `${props.identity}_${index}`;
          const isChecked =
            props.controlType === 'checkbox'
              ? props.checkedValues?.includes(option.value)
              : props.selectedValue === option.value;
          return (
            <label key={option.value} htmlFor={id} className="flex items-center gap-2">
              <input
                type={props.controlType}
                id={id}
                name={props.name || props.identity}
                value={option.value}
                checked={isChecked}
                onChange={props.onChange}
                readOnly={!props.onChange}
                className={`${styles.formControl} ${valid.isInvalid}`}
                required={props.required && index === 0} // ラジオ or 最初のチェックボックスのみ required
              />
              {option.label}
            </label>
          );
        })}
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
    </fieldset>
  );
};

export default SelectionInput;
