import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Stack = createNativeStackNavigator()
export default function Home(){
    return <Stack.Navigator
    initialRouteName="Home">
    <Stack.Screen name="Home" component={HomePage} />
    {/* <Stack.Screen name="Home" component={Home} /> */}
</Stack.Navigator>
}


function HomePage() {
    return (
        <View style={styles.container}>
            <ImageBackground  source={require('../assets/Movie_Night.jpg')} resizeMode="cover" style={styles.image}>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'stretch',
        
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        margin:30,
        opacity:0.9
    },
});