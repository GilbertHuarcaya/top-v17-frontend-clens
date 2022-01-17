import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (props) => {
  const { children } = props;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div>{children}</div>;
};

ScrollToTop.propTypes = {
  children: PropTypes.func,
};

ScrollToTop.defaultProps = {
  children: () => {},
};
export default ScrollToTop;
