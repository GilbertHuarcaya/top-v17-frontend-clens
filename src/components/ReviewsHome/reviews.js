import DB from '../../assets/db.json';

export const getAllReviews = () => {
  return DB?.reviews || [];
};

export const getFilteredReviews = () => {
  return DB?.reviews.filter((r) => r.rate === '⭐⭐⭐⭐⭐') || [];
};
