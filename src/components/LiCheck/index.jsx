import './styles.scss';
import Check from '../../img/icons/check.svg';

// eslint-disable-next-line react/prop-types
const LiCheck = ({ item = '' }) => (
  <li className="LiCheck">
    <img className="LiCheck__img" src={Check} alt="Check" />
    <span className="LiCheck__text">{item}</span>
  </li>
);

export default LiCheck;
