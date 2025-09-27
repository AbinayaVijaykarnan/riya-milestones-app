import React from 'react';
import RoutesWithPermission from './RoutesWithPermission';
import Footer from '../Main/Components/Footer';

const AppBase = () => {
  return (<>
  {/* <div>Side Menu</div>  // TODO: Later include Menu to navigate to different modules */} 
  <RoutesWithPermission />
  <Footer />
  </>);
};

export default AppBase;
