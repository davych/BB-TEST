import { request } from '@/common';

const getTVShow = (id) => request.get(`shows/${id}`, { params: { embed: 'episodes' } });
export default {
  getTVShow,
};
