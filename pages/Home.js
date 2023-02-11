import {  ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home() {
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