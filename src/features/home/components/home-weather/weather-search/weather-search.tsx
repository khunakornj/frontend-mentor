import Button from '@/components/presentation/button/button';
import InputSearch from '@/components/presentation/input-search/input-search';
import { useSearchWeather } from '@/features/home/components/home-weather/weather-search/weather-search.hooks';
import { handleFormSubmit } from '@/shared/libs/form';

import style from './weather-search.module.scss';

function WeatherSearch() {
  const { form, collection, query, setLocation } = useSearchWeather();

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
              const { value, label } = collection.find(v)!;
              setLocation({
                latitude: value.latitude,
                longtitude: value.longtitude,
                country: label,
              });
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
