import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ea4bb0",
        tabBarInactiveTintColor: "#888888",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          href: null,
        }}
      />

      <Tabs.Screen
        name="alta"
        options={{
          title: "Alta",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-add-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="consulta"
        options={{
          title: "Consultar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="search-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}