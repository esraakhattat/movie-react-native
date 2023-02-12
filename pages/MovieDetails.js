import axios from "axios";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
import {removeFromFavourite,addToFavourite} from "./Store/actions/FavouriteCount"
import { addOrRemoveFavourite } from "./Store/actions/FavouriteAction";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { editSingleMovie } from "./Store/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
export default function MovieDetails({navigation,route}) {
  
  const dispatch=useDispatch()
  const id=route.params.id
  let movie = useSelector((state) => state.movieListR.movies.find(
    (singleMovie) => singleMovie.id == id
    ))
    const [iconName,setIconName]=useState(movie.isFavourite?'star':'star-outline')
  const theme = useTheme();
  const base_url="https://image.tmdb.org/t/p/w500";
  // const [movie,setMovie]=useState({})
  // alert(JSON.stringify(route))
const addOrRemoveFromFavourite = () => {
  // alert(JSON.stringify(movie))
  let movie2 = { ...movie, isFavourite: !movie.isFavourite }
  dispatch(editSingleMovie(movie2))
  dispatch(addOrRemoveFavourite(movie2))
  dispatch(movie2.isFavourite ? addToFavourite() : removeFromFavourite())
  setIconName(movie2.isFavourite?'star':'star-outline')
}
useEffect(() => {
  setIconName(movie.isFavourite?'star':'star-outline')
}, [movie.isFavourite])
    return (
        <View style={styles.container}>
        <ImageBackground  source={{uri:`${base_url}${movie.poster_path}` }} resizeMode="cover" style={styles.image}>
        <MaterialCommunityIcons name={iconName} style={styles.favouriteIcon} color={'#ffd800'} size={30} onPress={addOrRemoveFromFavourite} />
        
        <View style={styles.textContainer}>
    <Text style={styles.text} variant="titleLarge">{movie.title}</Text>
    <Text style={styles.textOverview} variant="bodyMedium">{movie.overview}</Text>
  {/* </Card.Content> */}</View>
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
      opacity:0.7
  },
  text: {
      color: "#fd4d87",
      textAlign: 'center',
      fontWeight:'bold',
      fontSize:25 
  },
  textOverview: {
    color: 'white',
    textAlign: 'center',
    color:"white",
},
textContainer:{
  backgroundColor: "#273178f0" ,
  padding:20
},
favouriteIcon: {
  position: 'absolute',
  top: 5,
  right: 10,
  color: '#ffd800',
}
});