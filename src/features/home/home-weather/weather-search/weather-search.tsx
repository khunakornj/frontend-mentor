import Button from '@/components/presentation/button/button';
import InputSearch from '@/components/presentation/input-search/input-search';
import { useSearchWeather } from '@/features/home/home-weather/weather-search/weather-search.hooks';
import { handleFormSubmit } from '@/shared/libs/form';

import style from './weather-search.module.scss';

function WeatherSearch() {
  const { form, collection, query } = useSearchWeather();

  return (
    <form className={style.root} onSubmit={handleFormSubmit(form)}>
      <form.Field
        name="search"
        children={(field) => (
          <InputSearch
            collection={collection}
            className={style.input}
            isLoading={query.isLoading}
            onInputChange={(v) => {
              field.handleChange(v);
            }}
            onSelect={(v) => {
              console.log(collection.find(v));
            }}
          />
        )}
      />

      <form.Subscribe
        selector={(s) => ({
          isDefault: s.isDefaultValue,
          canSubmit: s.canSubmit,
        })}
        children={({ isDefault, canSubmit }) => (
          <Button
            type="submit"
            disabled={isDefault || !canSubmit || query.isLoading}
          />
        )}
      />
    </form>
  );
}

export default WeatherSearch;
