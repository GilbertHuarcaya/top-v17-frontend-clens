import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const App = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);
export default App;
