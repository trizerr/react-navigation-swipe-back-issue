import LandingScreen from "../screens/LandingScreen";
import {createStackNavigator} from "@react-navigation/stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";
import Screen4 from "../screens/Screen4";
import Screen5 from "../screens/Screen5";

const Stack = createStackNavigator();

const ScreensStack = () =>{
    return(
        <Stack.Navigator initialRouteName='Screen1'>
            <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
            <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
            <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}/>
            <Stack.Screen name="Screen4" component={Screen4} options={{headerShown:false}}/>
            <Stack.Screen name="Screen5" component={Screen5} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default ScreensStack;
