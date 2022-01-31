import PropTypes from 'prop-types';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { useSelector } from 'react-redux';
import Loader from '../../Loader';
import CardsReviews from '../../ReviewsHome/CardsReviews';
import './styles.scss';

const CLOUD = process.env.REACT_APP_CLOUD_NAME;

const PersonalCard = (props) => {
  const { personal } = props;
  const reviews = useSelector((state) => state.reviews);
  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD,
    },
  });
  return (
    <div className="personal-card">
      <div className="personal-card__data">
        <AdvancedImage cldImg={cld.image(personal.photo.id || 'cld-sample')} />
        <h2>{personal?.userName}</h2>
      </div>
      {reviews ? (
        <CardsReviews
          // eslint-disable-next-line no-underscore-dangle
          reviews={reviews.filter((e) => e.clensId === personal.id)}
        />
      ) : (
        <Loader />
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
