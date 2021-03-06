import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings93162Navigator from '../features/Settings93162/navigator';
import UserProfile93155Navigator from '../features/UserProfile93155/navigator';
import Settings93154Navigator from '../features/Settings93154/navigator';
import Settings93152Navigator from '../features/Settings93152/navigator';
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
Settings93162: { screen: Settings93162Navigator },
UserProfile93155: { screen: UserProfile93155Navigator },
Settings93154: { screen: Settings93154Navigator },
Settings93152: { screen: Settings93152Navigator },
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
