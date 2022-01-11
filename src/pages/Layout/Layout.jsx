import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './styles.scss';

const App = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
export default App;
