import React, {Component, ReactElement} from 'react';
import {authStore} from '@stores';
import {observer} from 'mobx-react';

@observer
class WithAuthCheck extends Component<{
  hideSplash: () => void;
}> {
  state = {
    showIntro: false,
  };

  componentDidMount() {
    authStore.getAuthDataFromStorage().then(() => {
      this.props.hideSplash();
    });
  }

  render(): ReactElement {
    return <>{this.props.children}</>;
  }
}

export default WithAuthCheck;
