import './styles.scss';

// eslint-disable-next-line react/prop-types
const TitleMinititle = ({ title = '', minititle = '', info = '' }) => (
  <section className="title-minititle">
    <p className="title-minititle__minititle">{minititle}</p>
    <h2 className="title-minititle__title">{title}</h2>
    <p className="title-minititle__info">{info}</p>
  </section>
);

export default TitleMinititle;
