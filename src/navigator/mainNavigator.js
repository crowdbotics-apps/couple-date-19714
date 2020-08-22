import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings93152Navigator from '../features/Settings93152/navigator';
import SignIn293150Navigator from '../features/SignIn293150/navigator';
import Settings93145Navigator from '../features/Settings93145/navigator';
import UserProfile93138Navigator from '../features/UserProfile93138/navigator';
import Settings93137Navigator from '../features/Settings93137/navigator';
import Settings93135Navigator from '../features/Settings93135/navigator';
import SignIn293133Navigator from '../features/SignIn293133/navigator';
import Settings93117Navigator from '../features/Settings93117/navigator';
import UserProfile93110Navigator from '../features/UserProfile93110/navigator';
import Settings93109Navigator from '../features/Settings93109/navigator';
import Settings93107Navigator from '../features/Settings93107/navigator';
import SignIn293105Navigator from '../features/SignIn293105/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings93152: { screen: Settings93152Navigator },
SignIn293150: { screen: SignIn293150Navigator },
Settings93145: { screen: Settings93145Navigator },
UserProfile93138: { screen: UserProfile93138Navigator },
Settings93137: { screen: Settings93137Navigator },
Settings93135: { screen: Settings93135Navigator },
SignIn293133: { screen: SignIn293133Navigator },
Settings93117: { screen: Settings93117Navigator },
UserProfile93110: { screen: UserProfile93110Navigator },
Settings93109: { screen: Settings93109Navigator },
Settings93107: { screen: Settings93107Navigator },
SignIn293105: { screen: SignIn293105Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
