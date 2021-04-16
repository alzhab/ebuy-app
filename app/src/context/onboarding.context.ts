import {createContext} from 'react';

const OnboardingContext = createContext({
  showOnboarding: false,
  hideOnboarding: () => {
    console.log('hide Onboarding')
  },
});

export default OnboardingContext;
