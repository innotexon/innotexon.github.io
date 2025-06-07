import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToBottom = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [location.pathname]);

  return children;
};

export default ScrollToBottom;
