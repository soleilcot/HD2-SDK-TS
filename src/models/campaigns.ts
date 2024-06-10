import * as t from 'io-ts';

export const Campaign = t.type({
    id: t.number,
    planetIndex: t.number,
    type: t.number,
    count: t.number
})

export type Campaign = t.TypeOf<typeof Campaign>