import './styles.scss';

// eslint-disable-next-line react/prop-types
const TitleMinititle = ({ title = '', minititle = '' }) => (
  <section className="title-minititle">
    <p className="title-minititle__minititle">{minititle}</p>
    <h2 className="title-minititle__title">{title}</h2>
  </section>
);

export default TitleMinititle;
