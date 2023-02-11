import axios from "axios";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Card, useTheme } from "react-native-paper";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack=createNativeStackNavigator()

// function detailsStackScreen() {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="card" component={MovieCard} />
//       <SettingsStack.Screen name="Details" component={MovieDetails} />
//     </SettingsStack.Navigator>
//   );
// }
export default function MovieDetails({navigation,route}) {
  const id=route.params.id
  const theme = useTheme();
  const base_url="https://image.tmdb.org/t/p/w500";
  const [movie,setMovie]=useState({})
  // alert(JSON.stringify(route))
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9dee35d33d48888bd478fed31c90d916`)
    .then((data)=>setMovie(data.data))
    .catch((err)=>console.log(err))
},[id])
    return (
        <View style={styles.container}>
        <ImageBackground  source={{uri:`${base_url}${movie.poster_path}` }} resizeMode="cover" style={styles.image}>
        {/* <Card.Content> */}
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
}
});