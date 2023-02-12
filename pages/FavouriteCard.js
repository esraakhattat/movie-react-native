import { StyleSheet, Text, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from "react-redux";
import { addOrRemoveFavourite } from "./Store/actions/FavouriteAction";
import { addToFavourite, removeFromFavourite } from "./Store/actions/FavouriteCount";
import { editSingleMovie } from "./Store/actions/MovieAction";

export default function FavouriteCard(props){
    const movie=props.favouriteMovie
    const theme=useTheme()
    const dispatch = useDispatch()
    const base_url="https://image.tmdb.org/t/p/w500";
    const remove = () => {
        let movie2 = { ...movie, isFavourite: !movie.isFavourite }
        dispatch(editSingleMovie(movie2))
        dispatch(addOrRemoveFavourite(movie2))
        dispatch(movie2.isFavourite ? addToFavourite() : removeFromFavourite())
    }
    return(
        <View style={styles.card}>
            <Card.Cover style={styles.img} onPress={()=>props.navigator.navigate("Details",{id:movie.id})}  source={{ uri: `${base_url}${movie.poster_path}` }} />
            <Card.Content>
                <Text onPress={() => props.navigator.navigate('Details', { id: movie.id })} style={{ backgroundColor: theme.colors.onBackground, color: theme.colors.primary, fontWeight: 'bold', fontSize: 10 }} variant="titleLarge">{movie.title}</Text>

            </Card.Content>
                <MaterialCommunityIcons name='delete' style={styles.favouriteIcon} color={'#dc3545'} size={20} onPress={remove}/>
</View>
    )
}
const styles = StyleSheet.create({
    card: {
        width:150,
        // height: 250,
        position: 'relative',
        marginBottom:20,
        marginEnd:20
    },
    img:{
        height:250
    },
    favouriteIcon: {
        position: 'absolute',
        top: 5,
        right: 5,
        // color: 'red',
    }
})