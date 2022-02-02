import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useSelector } from 'react-redux';
import { Rating } from 'react-simple-star-rating';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import CardsReviews from '../../ReviewsHome/CardsReviews';
import './styles.scss';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;

const PersonalCard = (props) => {
  const { personal } = props;
  const reviews = useSelector((state) => state.reviews);
  const [personalRating, setPersonalRating] = useState();
  const [personalReviews, setPersonalReviews] = useState();
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });
  const myImage = cld.image(personal.photo.id || 'cld-sample');
  myImage.resize(
    thumbnail()
      .width(450)
      .height(450)
      .gravity('face'),
  );
  useEffect(() => {
    const getReviews = () => {
      setPersonalReviews(reviews?.filter((e) => e.clensId === personal.id));
    };
    getReviews();
  }, [reviews]);

  useEffect(() => {
    const calcRating = () => {
      const ratings = personalReviews?.map((e) => e.rating);
      if (ratings) {
        const total = ratings.reduce((partialSum, a) => partialSum + a, 0);
        setPersonalRating(total / ratings.length);
      }
    };
    calcRating();
  }, [personalReviews]);

  return (
    <div className="personal-card">
      <div className="personal-card__data">
        <AdvancedImage cldImg={myImage} />
        <div className="personal-card__data__text">
          <h2>{personal?.userName}</h2>
          <p className="rate">
            <Rating size="3rem" ratingValue={personalRating} readonly />
          </p>
        </div>
      </div>
      {personalReviews?.length >= 1 ? (
        <>
          <h3>Reseñas:</h3>
          <CardsReviews reviews={personalReviews} />
        </>
      ) : (
        <h3>Aún no tiene reseñas</h3>
      )}
    </div>
  );
};
PersonalCard.propTypes = {
  personal: PropTypes.objectOf(PropTypes.any),
};
PersonalCard.defaultProps = {
  personal: {},
};
export default PersonalCard;
