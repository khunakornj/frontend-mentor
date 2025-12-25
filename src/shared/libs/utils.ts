import { v4 } from 'uuid';

export function presentIf(val?: boolean) {
  return val ? '' : undefined;
}

export function joinClass(...claz: (string | undefined)[]) {
  return claz.filter((d) => !!d).join(' ');
}

export function uuidV4() {
  return v4();
}
