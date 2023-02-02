import LandingScreen from "../screens/LandingScreen";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

const LandingStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="LandingScreen" component={LandingScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default LandingStack;
