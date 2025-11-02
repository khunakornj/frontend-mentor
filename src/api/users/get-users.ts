import fetcher from '@/shared/integrations/api-client';
import type { FetchOptions } from '@/shared/types/common';

type GetUsersOptions = {} & FetchOptions;

type GetUsersResponse = {
  id: number;
};

export async function getUsers(id: string, opts?: GetUsersOptions) {
  const { data } = await fetcher(opts).get<GetUsersResponse>(`/users/${id}`);
  return data;
}
