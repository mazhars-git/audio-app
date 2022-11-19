import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { colors } from './../theme/colors';
import Home from './../screen/home';
import Headphones from './../screen/headphones';
import Details from './../screen/productDetails';
import Earphones from './../screen/earphones';
import Speakers from './../screen/speakers';
import Cart from './../screen/cart';
import Checkout from './../screen/checkout';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



const THEME = {
    ...DefaultTheme,

    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    }
}

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreens (){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name= "Home" component = {Home}  />
       </HomeStack.Navigator>
    )
}

const HeadphonesStack = createNativeStackNavigator();
function HeadphonesStackScreens (){
    return(
        <HeadphonesStack.Navigator>
            <HeadphonesStack.Screen name= "Headphones" component = {Headphones} /> 
            <HeadphonesStack.Screen name= "Details" component = {Details} /> 
       </HeadphonesStack.Navigator>
    )
}

const EarphonesStack = createNativeStackNavigator();
function EarphonesStackScreens (){
    return(
        <EarphonesStack.Navigator>
            <EarphonesStack.Screen name= "Earphones" component = {Earphones}  />
            <EarphonesStack.Screen name= "Details" component = {Details} /> 
       </EarphonesStack.Navigator>
    )
}
const SpeakersStack = createNativeStackNavigator();
function SpeakersStackScreens (){
    return(
        <SpeakersStack.Navigator>
            <SpeakersStack.Screen name= "Speakers" component = {Speakers}  />
            <SpeakersStack.Screen name= "Details" component = {Details} /> 
       </SpeakersStack.Navigator>
    )
}
const CartStack = createNativeStackNavigator();
function CartStackScreens (){
    return(
        <CartStack.Navigator>
            <CartStack.Screen name= "Cart" component = {Cart}  />
            <CartStack.Screen name= "Checkout" component = {Checkout} /> 
       </CartStack.Navigator>
    )
}



export default function Navigation(){

    return(
    <NavigationContainer theme = {THEME}>
        <Tab.Navigator>
            <Tab.Screen name= "HomeTab" component = {HomeStackScreens} />
            <Tab.Screen name= "HeadphonesTab" component = {HeadphonesStackScreens} />
            <Tab.Screen name= "EarphonesTab" component = {EarphonesStackScreens} />
            <Tab.Screen name= "SpeakersTab" component = {SpeakersStackScreens} />
            <Tab.Screen name= "CartTab" component = {CartStackScreens} />
        </Tab.Navigator>
    </NavigationContainer>
    );   
    
}