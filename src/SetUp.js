// In index.js of a new project
import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/App/HomeScreen';
import Introduction from './screens/Intro';
import HomePage from './screens/Home';
import Detail from './screens/Intro/Detail';
import SearchPage from './screens/Home/SearchPage';
import ViewAll from './screens/Home/ViewAll';
import Cart from './screens/Cart';
// Home screen declaration

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
};

// Settings screen declaration - this is the screen we'll be pushing into the stack

//register screen
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Introduction', () => Introduction);
Navigation.registerComponent('HomePage', () => HomePage);
Navigation.registerComponent('Detail', () => Detail);
Navigation.registerComponent('SearchPage', () => SearchPage);
Navigation.registerComponent('ViewAll', () => ViewAll);
Navigation.registerComponent('Cart', () => Cart);
Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'white',
  },
  topBar: {
    title: {
      color: 'black',
    },
    backButton: {
      color: 'black',
    },
    background: {
      color: 'white',
    },
  },
});

// eslint-disable-next-line no-undef
export default App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                id: 'HomeScreen',
                name: 'Home',
              },
            },
          ],
        },
      },
    });
  });
};
