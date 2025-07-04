import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InvScreen from "../screens/InvScreen";


const Tab = createBottomTabNavigator();
export default function TabBar() {
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Dashboard'>
                <Tab.Screen name="Dashboard" component={HomeScreen} />
                <Tab.Screen name="Inventory" component={InvScreen} />
                <Tab.Screen name="Scan" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}