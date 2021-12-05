import './styles.scss';
import Header from '../../components/Header/Header';

const Page404 = () => {
  return (
    <>
      <Header />
      <div className="page404">
        <h1 className="page404__title">Bajo Construcción</h1>
        <div className="page404__logo">
          <img
            className="page404__logo__img"
            src="https://www.vascon.com/images/404/hanging_404.gif"
            alt="404error"
          />
        </div>
      </div>
    </>
  );
};

export default Page404;
