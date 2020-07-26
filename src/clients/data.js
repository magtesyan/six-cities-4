export const getHotels = (api) => api.get(`/hotels`);
export const postFavorite = (api, hotelId, status) => api.post(`/favorite/${hotelId}/${status}`);
