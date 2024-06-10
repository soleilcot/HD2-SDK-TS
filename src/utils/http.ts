// src/utils/http.ts
import axios, { AxiosResponse } from 'axios';
import { either } from 'fp-ts';
import { pipe } from 'fp-ts/lib/function';
import * as t from 'io-ts';

// Create an axios instance with predefined configuration
const axiosInstance = axios.create({
  baseURL: 'https://helldiverstrainingmanual.com/api', // Base URL for the API
  headers: {
    'Content-Type': 'application/json', // Default content type
  },
});

// Function to make an HTTP request and validate the response
export const request = <A>(decoder: t.Decoder<unknown, A>) => async (url: string, method: 'GET' | 'POST', data?: any): Promise<A> => {
  // Make the actual HTTP request using axios
  const response: AxiosResponse<unknown> = await axiosInstance.request({ url, method, data });

  // Use fp-ts and io-ts to decode and validate the response
  return pipe(
    decoder.decode(response.data),
    either.fold(
      () => {
        throw new Error('Invalid response'); // Throw an error if the response is invalid
      },
      (decoded) => decoded // Return the decoded response if valid
    )
  );
};
