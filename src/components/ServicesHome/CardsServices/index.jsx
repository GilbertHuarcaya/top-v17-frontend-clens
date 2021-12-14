import PropTypes from 'prop-types';

import SectionInfo from '../../SectionInfo';
import LiCheck from '../LiCheck';
import './styles.scss';

const CardsServices = (props) => {
  const { services } = props;
  return (
    <div className="services-cards">
      {services.map((e) => (
        <div className="services-card" key={`serviceid-${e.serviceid}`}>
          <SectionInfo title={e.title} info={e.info} imgn={e.img} />
          <div className="card__description">
            <ul>
              {e.items.map((item) => (
                <LiCheck item={item} key={`itemid-${item}`} />
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

CardsServices.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object),
};

CardsServices.defaultProps = {
  services: [],
};

export default CardsServices;
