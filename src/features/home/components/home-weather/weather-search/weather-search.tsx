import Button from '@/components/presentation/button/button';
import Input from '@/components/presentation/input/input';
import { useSearchWeatherForm } from '@/features/home/hooks/use-search-weather-form';
import { handleFormSubmit } from '@/shared/libs/form';

import style from './weather-search.module.scss';

function WeatherSearch() {
  const form = useSearchWeatherForm();

  return (
    <form className={style.root} onSubmit={handleFormSubmit(form)}>
      <form.Field
        name="search"
        children={(field) => (
          <Input
            className={style.input}
            onType={(v) => field.handleChange(v)}
          />
        )}
      />

      <form.Subscribe
        selector={(s) => ({
          isDefault: s.isDefaultValue,
          canSubmit: s.canSubmit,
        })}
        children={({ isDefault, canSubmit }) => (
          <Button type="submit" disabled={isDefault || !canSubmit} />
        )}
      />
    </form>
  );
}

export default WeatherSearch;
