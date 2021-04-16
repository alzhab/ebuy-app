import React, {Component, ReactElement} from 'react';
import Container from '@navigations/Container';
import {Splash} from '@modules';
import {COLORS} from '@styles/base';
import {Platform, StatusBar} from 'react-native';
import WithStores from './app-loads/WithStores';
import WithOnboarding from './app-loads/WithtOnboarding';
import WithAuthCheck from './app-loads/WithAuthCheck';
import {enableScreens} from 'react-native-screens';

enableScreens();

declare global {
  interface FormDataValue {
    uri: string;
    name: string;
    type: string;
  }

  interface FormData {
    append(name: string, value: FormDataValue, fileName?: string): void;
    set(name: string, value: FormDataValue, fileName?: string): void;
  }
}

class App extends Component {
  state = {
    onBoardingLoaded: false,
    authCheckLoaded: false,
  };

  render(): ReactElement {
    const loading = !this.state.onBoardingLoaded || !this.state.authCheckLoaded;

    return (
      <>
        <StatusBar
          translucent={Platform.OS === 'android'}
          backgroundColor={
            Platform.OS === 'ios' ? COLORS.PRIMARY : 'transparent'
          }
          barStyle={'dark-content'}
        />
        <WithAuthCheck
          hideSplash={() => this.setState({authCheckLoaded: true})}>
          <WithOnboarding
            hideSplash={() => this.setState({onBoardingLoaded: true})}>
            {!loading ? (
              <WithStores>
                <Container />
              </WithStores>
            ) : null}
            <Splash show={loading} />
          </WithOnboarding>
        </WithAuthCheck>
      </>
    );
  }
}

export default App;
