import { NavigationContainer, DefaultTheme, Tab } from "@react-navigation/native";
import { colors } from './../theme/colors';
import Home from './../screen/home';
import Headphones from './../screen/headphones';
import Details from './../screen/productDetails';
import Earphones from './../screen/earphones';
import Speakers from './../screen/speakers';



const THEME = {
    ...DefaultTheme,

    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    }
}

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
function HomeStackScreen (){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name= "Home" component = {Home}  />
       </HomeStack.Navigator>
    )
}

const HeadphonesStack = createStackNavigator();
function HeadphonesStackScreen (){
    return(
        <HeadphonesStack.Navigator>
            <HeadphonesStack.Screen name= "Headphones" component = {Headphones} /> 
            <HeadphonesStack.Screen name= "Details" component = {Details} /> 
       </HeadphonesStack.Navigator>
    )
}

const EarphonesStack = createStackNavigator();
function EarphonesStackScreen (){
    return(
        <EarphonesStack.Navigator>
            <EarphonesStack.Screen name= "Earphones" component = {Earphones}  />
            <EarphonesStack.Screen name= "Details" component = {Details} /> 
       </EarphonesStack.Navigator>
    )
}
const SpeakersStack = createStackNavigator();
function SpeakersStackScreen (){
    return(
        <SpeakersStack.Navigator>
            <SpeakersStack.Screen name= "Speakers" component = {Speakers}  />
            <SpeakersStack.Screen name= "Details" component = {Details} /> 
       </SpeakersStack.Navigator>
    )
}



export default function Navigation(){
    <NavigationContainer theme = {THEME}>
         <Tab.Navigator>
            <Tab.Screen name= "Home" component = {HomeStackScreen}  />
            <Tab.Screen name= "Headphones" component = {HeadphonesStackScreen}  />
        </Tab.Navigator>
    </NavigationContainer>
}