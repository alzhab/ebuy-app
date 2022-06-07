import React, {Component, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {MainNavigaiton, Onboarding} from '@modules';
import {OnboardingContext} from '@context';
import {observer} from 'mobx-react';
import {LoadingBig, Message, Modal} from '@components';
import {authStore, loadingStore, modalStore, noticeMessageStore} from '@stores';
import {navigationRef} from '@navigations/RootNavigation';
import {COLORS} from '@styles/base';
import AuthNavigaiton from '../modules/Auth';

const colors = {
	primary: COLORS.PRIMARY,
	background: COLORS.MAIN_BG,
	card: COLORS.MAIN_BG,
	text: COLORS.NEUTRAL_DARK,
	border: COLORS.NEUTRAL_DARK,
	notification: COLORS.PRIMARY,
};

const navigations = [
	{
		name: Navigations.Onboarding,
		component: Onboarding,
	},
	{
		name: Navigations.Main,
		component: MainNavigaiton,
	},
	{
		name: Navigations.Auth,
		component: AuthNavigaiton,
	},
];

const Stack = createStackNavigator();

@observer
class Container extends Component {
	static contextType = OnboardingContext;
	
	render(): ReactElement {
		const {showOnboarding} = this.context;
		
		const firstScreen = showOnboarding
			? Navigations.Onboarding
			: Navigations.Main
		
		return (
			<>
				<NavigationContainer
					ref={navigationRef}
					theme={{
						dark: false,
						colors,
					}}>
					<Stack.Navigator
						headerMode={'none'}
						initialRouteName={
							showOnboarding ? Navigations.Onboarding : firstScreen
						}>
						{navigations.map((route) => (
							<Stack.Screen
								key={route.name}
								name={route.name}
								component={route.component}
							/>
						))}
					</Stack.Navigator>
				</NavigationContainer>
				
				<LoadingBig loading={loadingStore.loading} />
				<Message
					show={noticeMessageStore.show}
					text={noticeMessageStore.text}
					type={noticeMessageStore.type}
				/>
				<Modal open={modalStore.modalProps.show} close={modalStore.closeModal}>
					{modalStore.modalProps.children()}
				</Modal>
			</>
		);
	}
}

export default Container;
