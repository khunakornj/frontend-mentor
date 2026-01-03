import type { AnyFormApi } from '@tanstack/react-form';

export function handleFormSubmit(form: AnyFormApi) {
  return (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };
}
