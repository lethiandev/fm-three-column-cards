export type Variants = 'first' | 'second' | 'third'
export type VariantType<T extends Variants> = `variant-${T}`

export function variant<T extends Variants>(name: T): VariantType<T> {
  return `variant-${name}` as VariantType<T>
}

export function variantClass(
  styles: Record<string, string>,
  name: Variants | undefined | null
): string {
  return (name && styles[variant(name)]) || ''
}
