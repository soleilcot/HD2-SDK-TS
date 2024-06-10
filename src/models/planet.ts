import * as t from 'io-ts';

export const Planet = t.type({
    index: t.number,
    owner: t.number,
    health: t.number,
    regenPerSecond: t.number,
    players: t.number
})

export type Planet = t.TypeOf<typeof Planet>