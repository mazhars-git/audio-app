import { NavigationContainer, DefaultTheme, Tab } from "@react-navigation/native";
import { colors } from './../theme/colors';
import Home from './../screen/home';



const THEME = {
    ...DefaultTheme,

    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    }
}

const Tab = createBottomTabNavigator();

const myStack = createStackNavigator();

function homeStackScreen (){
    return(
        <Tab.Navigation>
            <Tab.Screen name= "Home" component = {Home}  />
       </Tab.Navigation>
    )

}

export default function Navigation(){
    <NavigationContainer theme = {THEME}>
        
            <Tab.Screen name= "Setting" component = {Home}  />
            <Tab.Screen name= "Setting" component = {Details}  />
        
    </NavigationContainer>
}