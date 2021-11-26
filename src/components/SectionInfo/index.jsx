import './styles.scss';
// eslint-disable-next-line react/prop-types
const SectionInfo = ({ title = '', info = '', imgn }) => (
  <section className="section-info">
    {imgn ? <img className="section-info__img" src={imgn} alt={title} /> : null}
    <h3 className="section-info__title">{title}</h3>
    <p className="section-info__info">{info}</p>
  </section>
);

export default SectionInfo;
