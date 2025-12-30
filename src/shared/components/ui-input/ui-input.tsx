import { Field } from '@ark-ui/react';
import errorIcon from '@shared/assets/error-icon.svg';
import ImageWrapper from '@shared/component-utils/image/image';
import clsx from 'clsx';
import { forwardRef } from 'react';

import style from './ui-input.module.css';

type Props = {
  onType?: (text: string) => void;
  label?: string;
  placeholder?: string;
  errorText?: string;
};

export const UiInput = forwardRef(
  (
    { onType, label, placeholder, errorText, ...props }: Props,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Field.Root ref={ref} className={style.root} invalid={!!errorText}>
        {label && <Field.Label className={style.label}>{label}</Field.Label>}
        <Field.Input
          {...props}
          placeholder="e.g., What is the capital of France?"
          className={style.input}
          onChange={(e) => {
            onType?.(e.target.value);
          }}
        />
        {!!errorText && (
          <Field.ErrorText className={style.err}>
            <ImageWrapper
              className={style.img}
              src={errorIcon}
              alt="error-icon"
            />
            <label className={style.errLabel}>{errorText}</label>
          </Field.ErrorText>
        )}
      </Field.Root>
    );
  },
);

export const UiTextArea = forwardRef(
  (
    { onType, label, placeholder, errorText, ...props }: Props,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <Field.Root ref={ref} className={style.root} invalid={!!errorText}>
        {label && <Field.Label className={style.label}>{label}</Field.Label>}
        <Field.Textarea
          {...props}
          placeholder="e.g., What is the capital of France?"
          className={clsx(style.input, style.textArea)}
          onChange={(e) => {
            onType?.(e.target.value);
          }}
        />
        {!!errorText && (
          <Field.ErrorText className={style.err}>
            <ImageWrapper
              className={style.img}
              src={errorIcon}
              alt="error-icon"
            />
            <label className={style.errLabel}>{errorText}</label>
          </Field.ErrorText>
        )}
      </Field.Root>
    );
  },
);
