import './styles.scss';

// eslint-disable-next-line react/prop-types
const MinititleTitle = ({ title = '', minititle = '' }) => (
  <section className="minititle-title">
    <p className="minititle-title__minititle">{minititle}</p>
    <h2 className="minititle-title__title">{title}</h2>
  </section>
);

export default MinititleTitle;
