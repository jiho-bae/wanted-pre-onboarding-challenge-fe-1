import { TOKEN_KEY } from '@src/libs/constant';

import { Navigate } from 'react-router-dom';

const withAuth =
  <P extends any>(Component: React.ComponentType<P>) =>
  (props: JSX.IntrinsicAttributes & P) => {
    const isAuthenticated = localStorage.getItem(TOKEN_KEY);

    if (isAuthenticated) {
      return <Component {...props} />;
    }

    return <Navigate replace to="/" />;
  };

export default withAuth;
