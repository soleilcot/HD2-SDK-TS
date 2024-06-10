import { request } from '../../utils/http';
import { Status } from '../../models/status';
import { Planet } from '../../models/planet';
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'

import { pipe } from 'fp-ts/lib/function';

export const getWarStatus = async (): Promise<Status | null> => {
  const response = await request<Status>(Status)(`/v1/war/status`, 'GET');
  return response;
};

export const getPlanetsWithPlayers = async (): Promise<Planet[] | []> => {
    const response = await getWarStatus()

    return pipe(
        response?.planetStatus,
        O.fromNullable,
        O.map(
            A.filter((obj : Planet) => obj?.players > 0),
        ),
        O.getOrElse(() : Planet[] => [])
    )
}