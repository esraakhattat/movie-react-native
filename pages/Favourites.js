import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import FavouriteCard from './FavouriteCard';
import MovieDetails from './MovieDetails';

const Stack = createNativeStackNavigator()
export default function Favourites() {
    return <Stack.Navigator
        initialRouteName="Favourites">
        <Stack.Screen name="Favourites" component={FavouritePage} />
        <Stack.Screen name="Details" component={MovieDetails} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
}
function FavouritePage(props) {
    let favouritesList = useSelector((state) => state.favR.favourites)
    return (
        <ScrollView>
            <View style={styles.container}>
                {favouritesList.length != 0 ? favouritesList.map((movie) => (<FavouriteCard key={movie.id} favouriteMovie={movie} navigator={props.navigation} />)) : <View style={styles.noContainer}><Image style={styles.img} source={require('../assets/location-pin.png')} /><Text style={styles.no}>No Movies added to Favourites</Text></View>}
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    noContainer: {
        marginTop: 200,
        margin: 25,
    },
    no: {
        fontSize: 20,
        color: '#fd4d87',
        alignSelf: 'center'
    },
    img: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginBottom:20
    }
})