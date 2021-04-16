import React, {Component, ReactElement} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {OnboardingContext} from '@context';

class WithOnboarding extends Component<{
  hideSplash: () => void;
}> {
  state = {
    showOnboarding: false,
  };

  componentDidMount() {
    this.getShowIntroFromStorage();
  }

  getShowIntroFromStorage() {
    AsyncStorage.getItem('showOnboarding')
      .then((res) => {
        setTimeout(() => {
          this.setState({showOnboarding: res === null}, () => {
            this.props.hideSplash();
          });
        }, 3000);
      })
      .catch((e) => {
        console.log('getShowIntroFromStorage error: ', e);
      });
  }

  hideIntro() {
    const jsonValue = JSON.stringify(false);
    AsyncStorage.setItem('showOnboarding', jsonValue)
      .then((res) => {
        console.log('Hide onboarding: ', res);
      })
      .catch((e) => {
        console.log('Hide onboarding error: ', e);
      });
  }

  render(): ReactElement {
    return (
      <OnboardingContext.Provider
        value={{
          showOnboarding: this.state.showOnboarding,
          hideOnboarding: () => this.hideIntro(),
        }}>
        {this.props.children}
      </OnboardingContext.Provider>
    );
  }
}

export default WithOnboarding;
