import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs 
            screenOptions={{ 
                tabBarActiveBackgroundColor: "#EB001B",
                tabBarInactiveBackgroundColor: "#EB001B",
                tabBarActiveTintColor: "#FFFFFF",
                tabBarInactiveTintColor: "#F79E1B",
                headerShown: false,
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='home' color={color}/>,
                }}
            />
            <Tabs.Screen 
                name="search"
                options={{
                    title: "Buscar",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='search' color={color}/>,
                }}
            />
            <Tabs.Screen 
                name="orders"
                options={{
                    title: "Pedidos",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='list' color={color}/>,
                }}
            />
            <Tabs.Screen 
                name="favorites"
                options={{
                    title: "Favoritos",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='heart' color={color}/>,
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name='user' color={color}/>,
                }}
            />
        </Tabs>
    )
}