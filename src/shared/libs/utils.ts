export function presentIf(val?: boolean) {
  return val ? '' : undefined;
}

export function joinClass(...claz: (string | undefined)[]) {
  return claz.filter((d) => !!d).join(' ');
}
