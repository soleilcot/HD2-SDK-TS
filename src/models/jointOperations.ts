import * as t from 'io-ts';

export const JointOperation = t.type({
    id: t.number,
    planetIndex: t.number,
    hqNodeIndex: t.number,
})

export type JointOperation = t.TypeOf<typeof JointOperation>