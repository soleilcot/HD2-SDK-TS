import * as t from 'io-ts';

export const PlanetEvent = t.type({
    id: t.number,
    planetIndex: t.number,
    eventType: t.number,
    race: t.number,
    health: t.number,
    maxHealth: t.number,
    startTime: t.number,
    expireTime: t.number,
    jointOperationIds: t.array(t.number),
})

export type PlanetEvent = t.TypeOf<typeof PlanetEvent>