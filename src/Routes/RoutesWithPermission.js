import React , {useMemo} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { APP_BASE_PATH } from '../App.config';
import LandingPage from '../Main/LandingPage';
import Redirectcomponent from './RedirectComponent';
import { ROUTE_KEYS } from './Routes.constants';
import AboutMe from '../Main/Components/AboutMe';
import Contact from '../Main/Components/Contact';

const RoutesWithPermission = (props) => {

     const routeComponents = useMemo(() => ({
      [ROUTE_KEYS.aboutMe]: AboutMe,
      [ROUTE_KEYS.album]: AboutMe,
      [ROUTE_KEYS.contact]: Contact,
      [ROUTE_KEYS.inMomsWomb]: <div>InMomsWomb</div>,
      [ROUTE_KEYS.newBornPhotoShoots]: <div>NewBornPhotoShoots</div>,
      [ROUTE_KEYS.sixthMonthPhotoShoots]: <div>SixthMonthPhotoShoots</div>,
      [ROUTE_KEYS.firstBirthday]: <div>FirstBirthday</div>,
      [ROUTE_KEYS.everyDayMoments]: <div>EveryDayMoments</div>,
    }), []);


    const mockPermissionValidator = () => true;  // TODO: Later if u want to add View, Edit, Create,Delete permissions then add your logics here

  return (  
  <Router>
    <Switch>
       <Route
        exact
        path={`${APP_BASE_PATH}`}
        render={() => (<LandingPage />)}
        />
      <Route
          path={`${APP_BASE_PATH}/:module`}
          render={(routeProps) => {
            const { match: { params: { module } } } = routeProps;
            const Component = routeComponents[module];
            console.log('module', {module, Component});
            if (Component) {
              return <Component permissionValidator={mockPermissionValidator} {...props} {...routeProps} />;
            }
            return <Redirectcomponent {...props} {...routeProps} />;
          }}
        />
        {/* <Route
        path={`${APP_BASE_PATH}/:applicationId/:objectId`}
        exact
        render={routerProps => (<LandingPage routerProps={routerProps} />)}
        /> */}
        {/* 
        <Route path="*">
        <Redirect to={`${APP_BASE_PATH}`} />
        </Route> */}
    </Switch>
  </Router>
)
};

export default RoutesWithPermission;
