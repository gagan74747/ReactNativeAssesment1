import React from 'react';
import DrawerNavigator from '../components/DrawerNavigator.js';

export default function Dashboard({route}) {
  const {username} = route.params;
  return <DrawerNavigator username={username} />;
}
