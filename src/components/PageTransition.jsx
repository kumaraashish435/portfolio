import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition; 