import { Combobox as ArkCombobox } from '@ark-ui/react/combobox';
import { Portal } from '@ark-ui/react/portal';
import type { ListCollection } from '@zag-js/collection';

type Props<T> = {
  collection: ListCollection<T>;
};

function Combobox<T>({ collection }: Props<T>) {
  return (
    <ArkCombobox.Root collection={collection}>
      <ArkCombobox.Label>Framework</ArkCombobox.Label>
      <ArkCombobox.Control>
        <ArkCombobox.Input />
        <ArkCombobox.Trigger>Open</ArkCombobox.Trigger>
        <ArkCombobox.ClearTrigger>Clear</ArkCombobox.ClearTrigger>
      </ArkCombobox.Control>
      <Portal>
        <ArkCombobox.Positioner>
          <ArkCombobox.Content>
            <ArkCombobox.ItemGroup>
              <ArkCombobox.ItemGroupLabel>
                Frameworks
              </ArkCombobox.ItemGroupLabel>
              {collection.items.map((item) => (
                <ArkCombobox.Item
                  key={collection.getItemValue(item)}
                  item={item}
                >
                  <ArkCombobox.ItemText>
                    {collection.stringifyItem(item)}
                  </ArkCombobox.ItemText>
                  <ArkCombobox.ItemIndicator>✓</ArkCombobox.ItemIndicator>
                </ArkCombobox.Item>
              ))}
            </ArkCombobox.ItemGroup>
          </ArkCombobox.Content>
        </ArkCombobox.Positioner>
      </Portal>
    </ArkCombobox.Root>
  );
}

export default Combobox;
