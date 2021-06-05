import { request } from '@/common';

export const getTVShow = (id) => request.get(`shows/${id}`, { params: { embed: 'episodes' } });
