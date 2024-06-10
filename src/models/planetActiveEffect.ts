import * as t from 'io-ts';

export const PlanetActiveEffect = t.type({
    index: t.number,
    galacticEffectId: t.number,
})

export type PlanetActiveEffect = t.TypeOf<typeof PlanetActiveEffect>