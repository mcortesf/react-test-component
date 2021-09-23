import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loading } from 'components';
import { HELP, LOGIN, ROOT } from './constants';
import { NotFound } from './NotFound';

export const RouterConfig = () => {
  const HomePage = lazy(() => import('pages/Home/Home'));
  const LoginPage = lazy(() => import('pages/Login/Login'));
  const TodoPage = lazy(() => import('pages/Todo/Todo'));
  const HelpPage = lazy(() => import('pages/Help/Help'));
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={HomePage} />

        <Route exact path={LOGIN} component={LoginPage} />

        <Route exact path={HELP} component={HelpPage} />

        <Route path="/todo" component={TodoPage} />

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1}>
        <AuthorizedPage1 />
      </PrivateRoute> */}
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
};
