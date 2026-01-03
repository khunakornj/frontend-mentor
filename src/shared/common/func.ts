import { type CollectionOptions, ListCollection } from '@zag-js/collection';

export function collection<T>(opts: CollectionOptions<T>) {
  return new ListCollection(opts);
}
