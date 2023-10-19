import { StyleSheet, Text, View } from "react-native";
import { Layout01 } from "./View/Layout01";
import { Layout02 } from "./View/Layout02";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={Layout01} name="layout01"></Stack.Screen>
                <Stack.Screen component={Layout02} name="layout02"></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});