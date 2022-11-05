import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewPool } from '../screens/NewPool';
import { PoolsList } from '../screens/PoolsList';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name='newPool'
        component={NewPool}
      />
      <Screen
        name='pools'
        component={PoolsList}
      />
    </Navigator>
  )
}