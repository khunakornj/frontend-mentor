import { useForm } from '@tanstack/react-form';

export function useSearchWeatherForm() {
  const form = useForm({
    defaultValues: {
      search: '',
    },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  return form;
}
