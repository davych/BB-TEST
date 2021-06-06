import { request } from '@/common';

export const getEpisode = (id) => request.get(`episodes/${id}`);
