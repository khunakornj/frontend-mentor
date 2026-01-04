import { Combobox, type ListCollection } from '@ark-ui/react/combobox';
import { Portal } from '@ark-ui/react/portal';

import Input from '@/components/presentation/input/input';

import style from './input-search.module.scss';

type Props<T> = {
  onInputChange?: (v: string) => void;
  onSelect?: (v: string) => void;
  onOpenChange?: (open: boolean) => void;
  isLoading?: boolean;
  collection: ListCollection<T>;
  className?: string;
  open?: boolean;
};

function InputSearch<T>({
  onInputChange,
  onSelect,
  collection,
  open,
  isLoading,
}: Props<T>) {
  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    if (details.reason === 'input-change') {
      onInputChange?.(details.inputValue);
      return;
    }
  };

  return (
    <Combobox.Root
      collection={collection}
      defaultChecked={false}
      onInputValueChange={handleInputChange}
      open={open}
      onValueChange={(v) => {
        onSelect?.(v.value[0]);
      }}
      allowCustomValue
      selectionBehavior="replace"
      className={style.root}
    >
      <Combobox.Control>
        <Combobox.Input placeholder="Search for a place..." asChild>
          <Input isLoading={isLoading} />
        </Combobox.Input>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          {collection.items.length && (
            <Combobox.Content>
              <Combobox.ItemGroup className={style.itemGroup}>
                {collection.items.map((item) => (
                  <Combobox.Item
                    key={collection.getItemValue(item)}
                    item={item}
                    className={style.itemWrap}
                  >
                    <Combobox.ItemText>
                      {collection.stringifyItem(item)}
                    </Combobox.ItemText>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            </Combobox.Content>
          )}
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}

export default InputSearch;
