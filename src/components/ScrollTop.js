import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    const scrollDelay = 300; // 0.25 seconds in milliseconds

    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0 });
    }, scrollDelay);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollTop;