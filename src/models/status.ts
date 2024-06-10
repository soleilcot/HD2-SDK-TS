import * as t from 'io-ts';
import { Planet } from './planet';
import { Attacks } from './attacks';
import { Campaign } from './campaigns';
import { JointOperation } from './jointOperations';
import { PlanetEvent } from './planetEvents';
import { PlanetActiveEffect } from './planetActiveEffect';
import { GlobalEvent } from './globalEvent';

export const Status = t.type({
    warId: t.number,
    time: t.number,
    impactMultiplier: t.number,
    storyBeatId32: t.number,
    planetStatus: t.array(Planet),
    planetAttacks: t.array(Attacks),
    campaigns: t.array(Campaign),
    communityTargets: t.array(t.any),
    jointOperations: t.array(JointOperation),
    planetEvents: t.array(PlanetEvent),
    planetActiveEffects: t.array(PlanetActiveEffect),
    activeElectionPolicyEffects: t.array(t.any),
    globalEvents: t.array(GlobalEvent),
    superEarthWarResults: t.array(t.any),
    layoutVersion: t.number,

});

export type Status = t.TypeOf<typeof Status>;