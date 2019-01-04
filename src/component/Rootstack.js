



const RootStack = StackNavigator(
    {
      SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
          // headerStyle:{backgroundColor:'#51b7c1'},
          // title: '',
          //headerTintColor: 'white',
          header: null,
        }
  
      },
      SelectLoginType: {
        screen: selectLoginType,
        navigationOptions: {
          title: 'Login',
          headerTitleStyle: { flex: 1, textAlign: 'center', fontSize: fontsize, fontWeight: 'bold' },
          headerStyle: { backgroundColor: color.primaryColor },
          headerTintColor: textColor,
        }
      },
    },
    {
      initialRouteName: 'SplashScreen',
      headerMode: 'float',
      navigationOptions: {
        headerStyle: { backgroundColor: color.primaryColor },
        title: 'Connected Car',
        headerTintColor: 'white',
      }
    }
  );


export const GlobalStack = StackNavigator(
    {
      loginStack: {
        screen: RootStack,
      },
      
    
    },
    {
        initialRouteName: 'loginStack',
        headerMode: 'none',
      }
    );