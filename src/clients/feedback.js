export const getFeedbacks = (api, hotelId) => api.get(`/comments/${hotelId}`);
export const postFeedbacks = (api, hotelId, feedbackData) => api.post(`/comments/${hotelId}`, {
  comment: feedbackData.comment,
  rating: feedbackData.rating,
});
