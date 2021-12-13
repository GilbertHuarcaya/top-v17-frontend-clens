import './styles.scss';

// eslint-disable-next-line react/prop-types
const MinititleTitle = ({ title = '', minititle = '', info }) => (
  <section className="minititle-title">
    <p className="minititle-title__minititle">{minititle}</p>
    <h2 className="minititle-title__title">{title}</h2>
    {info ? <p className="minititle-title__info">{info}</p> : null}
  </section>
);

export default MinititleTitle;
