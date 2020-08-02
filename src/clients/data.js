export const getHotels = (api) => api.get(`/hotels`);
export const getNearHotels = (api, hotelId) => api.get(`/hotels/${hotelId}/nearby`);
export const getFavorites = (api) => api.get(`/favorite`);
export const postFavorite = (api, hotelId, status) => api.post(`/favorite/${hotelId}/${status}`);
