import { request } from '../../utils/http';
import { Status } from '../../models/status';
import { Planet } from '../../models/planet';
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'

import { pipe } from 'fp-ts/lib/function';

function playerFilter(playerCount: number, min: number, max?: number) : boolean {
    if ( typeof max === 'number'){
        return playerCount > min && playerCount <= max;
    }

    return playerCount > min;
}

export const getWarStatus = async (): Promise<Status | null> => await request<Status>(Status)(`/v1/war/status`, 'GET');

export const getPlanetsWithPlayers = async (): Promise<Planet[] | []> => await getPlanetsWithPlayersMinMax(0);

export const getPlanetsWithPlayersMinMax = async (min: number = 0, max?: number): Promise<Planet[] | []> => {
    const response = await getWarStatus()

    return pipe(
        response?.planetStatus,
        O.fromNullable,
        O.map(
            A.filter((obj : Planet) => playerFilter(obj.players, min, max)),
        ),
        O.getOrElse(() : Planet[] => [])
    )
}
