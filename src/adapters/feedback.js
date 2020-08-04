const transformFeedback = (feedbackFromServer) => {
  const transformedOffer = {
    id: feedbackFromServer.id,
    comment: feedbackFromServer.comment,
    date: feedbackFromServer.date,
    rating: feedbackFromServer.rating,
    user: {
      avatarUrl: feedbackFromServer.user.avatar_url,
      id: feedbackFromServer.user.id,
      isPro: feedbackFromServer.user.is_pro,
      name: feedbackFromServer.user.name
    },
  };

  return transformedOffer;
};

const collectFeedbacks = (FeedbacksFromServer) => {
  const transformedFeedbacks = [];
  FeedbacksFromServer.forEach((feedback) => {
    transformedFeedbacks.push(transformFeedback(feedback));
  });
  return transformedFeedbacks;
};

export {collectFeedbacks, transformFeedback};
