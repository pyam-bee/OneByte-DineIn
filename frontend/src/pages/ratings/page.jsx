import React, { useState, useEffect } from 'react';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem('reviews');
    return storedReviews ? JSON.parse(storedReviews) : [
      { id: 1, user: 'John Doe', rating: 4, comment: 'Great food and excellent service!' },
      { id: 2, user: 'Jane Smith', rating: 5, comment: 'Highly recommended restaurant. The atmosphere is fantastic.' },
      { id: 3, user: 'Mike Johnson', rating: 3, comment: 'Good food, but the wait time was a bit long.' }
    ];
  });

  const [newReview, setNewReview] = useState({
    user: '',
    rating: 0,
    comment: ''
  });

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = () => {
    const id = reviews.length + 1;
    setReviews([...reviews, { id, ...newReview }]);
    setNewReview({ user: '', rating: 0, comment: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  return (
    <div className="w-screen reviews-page flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-4 text-center m-5 p-5">Reviews</h2>
      <div className="mb-4 flex justify-center">
        <input type="text" name="user" value={newReview.user} onChange={handleChange} placeholder="Your Name" className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none" />
        <select name="rating" value={newReview.rating} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none">
          <option value="0">Select Rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
        <textarea name="comment" value={newReview.comment} onChange={handleChange} placeholder="Your Review" className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none"></textarea>
        <button onClick={addReview} disabled={!newReview.user || !newReview.rating || !newReview.comment} className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed focus:outline-none hover:bg-blue-600">Submit</button>
      </div>
      <div className="w-1/2">
        {reviews.map(review => (
          <div key={review.id} className="border border-gray-300 rounded-md p-4 mb-4 shadow-lg">
            <div className="flex items-center mb-2">
              <div className="logo-type bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center mr-3 font-semibold text-lg">{review.user.slice(0, 1)}</div>
              <span className="text-yellow-400 flex">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={index < review.rating ? "currentColor" : "none"} stroke="currentColor">
                    <path d="M10 0l2.5 6.25H20l-5 3.75 1.25 6.25L10 15l-6.25 4.25L5 10l-5-3.75h7.5L10 0z"/>
                  </svg>
                ))}
              </span>
              <span className="text-gray-500 ml-2">({review.rating} Stars)</span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
