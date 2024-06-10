import * as t from 'io-ts';
import { Planet } from './planet';
import { Attacks } from './attacks';
import { Campaigns } from './campaigns';

export const Status = t.type({
    warId: t.number,
    time: t.number,
    impactMultiplier: t.number,
    storyBeatId32: t.number,
    planetStatus: t.array(Planet),
    planetAttacks: t.array(Attacks),
    campaigns: t.array(Campaigns)
});

export type Status = t.TypeOf<typeof Status>;