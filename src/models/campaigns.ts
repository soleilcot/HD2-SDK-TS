import * as t from 'io-ts';

export const Campaigns = t.type({
    id: t.number,
    planetIndex: t.number,
    type: t.number,
    count: t.number
})

export type Campaigns = t.TypeOf<typeof Campaigns>