import * as t from 'io-ts';

export const GlobalEvent = t.type({
    eventId: t.number,
    id32: t.number,
    portraitId32: t.number,
    title: t.string,
    titleId32: t.number,
    message: t.string,
    messageId32: t.number,
    race: t.number,
    flag: t.number,
    assignmentId32: t.number,
    effectIds: t.array(t.number),
    planetIndices: t.array(t.number)
})

export type GlobalEvent = t.TypeOf<typeof GlobalEvent>