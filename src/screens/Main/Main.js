import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Home/home";
import { PerfilDeUsuario } from "../PerfilDeUsuario/perfil-de-usuario";
import { ContentIcon,  TextIcon} from "./style";

import {FontAwesome, FontAwesome5} from "@expo/vector-icons"

const BottomTab = createBottomTabNavigator();

const Main = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 80
                },
                tabBarActiveBackgroundColor: "transparent",

                //textinho em baixo do ícone
                tabBarShowLabel: false,

                //título do component
                headerShown: false,

                //tratativa com o item que está focado
                tabBarIcon: ({focused}) => {
                    if(route.name === "Home"){
                        return(
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome name="calendar" size={18} color={focused ? "#607EC5" : "#4E4B59"}/>
                                {focused && <TextIcon>Agenda</TextIcon>}
                            </ContentIcon>
                        )
                    }else{
                        return(
                            <ContentIcon
                                tabBarActiveBackgroundColor={focused ? "#ECF2FF" : "transparent"}
                            >
                                <FontAwesome5 name="user-circle" size={18} color={focused ? "#607EC5" : "#4E4B59"}/>
                                {focused && <TextIcon>Perfil</TextIcon>}
                            </ContentIcon>
                        )
                    }
                }
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
            />
            <BottomTab.Screen
                name="PerfilDeUsuario"
                component={PerfilDeUsuario}
            />
        </BottomTab.Navigator>
    )
};

export default Main;