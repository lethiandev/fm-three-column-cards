import { variant } from '@/utils/variant'

describe('utils/variant.ts', () => {
  it('should return variant name based on input', () => {
    expect(variant('first')).toEqual('variant-first')
    expect(variant('second')).toEqual('variant-second')
    expect(variant('third')).toEqual('variant-third')
  })
})
