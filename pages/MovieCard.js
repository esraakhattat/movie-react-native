import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { useTheme,Card } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {removeFromFavourite,addToFavourite} from "./Store/actions/FavouriteCount"
import { addOrRemoveFavourite } from "./Store/actions/FavouriteAction";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { editSingleMovie } from "./Store/actions/MovieAction";


export default function MovieCard(props) {
    const theme = useTheme();
    const base_url="https://image.tmdb.org/t/p/w500";
    const dispatch = useDispatch()
    let movie = useSelector((state) => state.movieListR.movies.find(
        (singleMovie) => singleMovie.id == props.singleMovie
    ))
    useEffect(() => {
        setIconName(movie.isFavourite?'star':'star-outline')
    }, [movie.isFavourite])
    const [iconName,setIconName]=useState(movie.isFavourite?'star':'star-outline')
    const addOrRemoveFromFavourite = () => {
        // alert(JSON.stringify(movie))
        let movie2 = { ...movie, isFavourite: !movie.isFavourite }
        dispatch(editSingleMovie(movie2))
        dispatch(addOrRemoveFavourite(movie2))
        dispatch(movie2.isFavourite ? addToFavourite() : removeFromFavourite())
        // setIconName(movie2.isFavourite?'star':'star-outline')
    }
    return (<>
        <Card type="elevated" style={{ backgroundColor: theme.colors.onBackground, marginTop: 20 }}>
            <Card.Cover style={styles.card} source={{ uri: `${base_url}${movie.poster_path}` }} />
            <MaterialCommunityIcons name={iconName} style={styles.favouriteIcon} color={'#ffd800'} size={30} onPress={addOrRemoveFromFavourite} />
            <Card.Content>
                <Text onPress={() => props.navigator.navigate('Details', { id: movie.id })} style={{ backgroundColor: theme.colors.onBackground, color: theme.colors.primary, fontWeight: 'bold', fontSize: 25 }} variant="titleLarge">{movie.title}</Text>
                <Text style={{ backgroundColor: theme.colors.onBackground, color: 'white' }} variant="bodyMedium">{movie.overview}</Text>
            </Card.Content>
        </Card>
    </>)
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    card: {
        height: 450,
        position: 'relative'
    },
    favouriteIcon: {
        position: 'absolute',
        top: 5,
        right: 10,
        color: '#ffd800',
    }
})