import * as t from 'io-ts'

export const Attacks = t.type({
    source: t.number,
    target: t.number,
})

export type Attacks = t.TypeOf<typeof Attacks>