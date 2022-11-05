import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NewPool } from '../screens/NewPool';
import { PoolsList } from '../screens/PoolsList';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();
  const size = sizes[6]

  const circleIcon = {
    tabBarIcon: ({color}) => <PlusCircle color={color} size={size} />,
    tabBarLabel: 'Novo bolão'
  } as BottomTabNavigationOptions;
  
  const soccerIcon = {
    tabBarIcon: ({color}) => <SoccerBall color={color} size={size} />,
    tabBarLabel: 'Meus bolões'
  } as BottomTabNavigationOptions;

  const screenOptions = {
    headerShown: false,
    tabBarLabelPosition: 'beside-icon',
    tabBarActiveTintColor: colors.yellow[500],
    tabBarInactiveTintColor: colors.gray[300],
    tabBarStyle: {
      position: 'absolute',
      height: sizes[22],
      borderTopWidth: 0,
      backgroundColor: colors.gray[800]
    },
    tabBarItemStyle: {
      position: 'relative',
      top: Platform.OS === 'android' ? -10 : 0
    }
  } as BottomTabNavigationOptions

  return (
    <Navigator 
      screenOptions={screenOptions}
      
    >
      <Screen
        name='newPool'
        component={NewPool}
        options={circleIcon}
      />
      <Screen
        name='pools'
        component={PoolsList}
        options={soccerIcon}
      />
    </Navigator>
  )
}