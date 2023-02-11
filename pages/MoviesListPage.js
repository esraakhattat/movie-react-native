import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from "./MovieDetails";
import { Button, Card, useTheme } from "react-native-paper";
const Stack = createNativeStackNavigator()
export function ListNavigator() {

    return <Stack.Navigator
        initialRouteName="Movies"
    >
        <Stack.Screen name="Movies" component={MoviesList} />
        <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
}
export default function MoviesList(props) {
    const theme = useTheme();
    const base_url="https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9dee35d33d48888bd478fed31c90d916`)
            .then((data) => setMovies(data.data.results))
            .catch((err) => console.log(err))
    }, [])
    return (<ScrollView>
        <SafeAreaView style={styles.container}>

            <View>
                {movies.map(movie => (<Card key={movie.id} type="elevated" style={{ backgroundColor: theme.colors.onBackground, marginTop: 20 }}>
                    <Card.Cover style={styles.card} source={{ uri: `${base_url}${movie.poster_path}` }} />
                    <Card.Content>
                        <Text onPress={() => props.navigation.navigate('Details', { id: movie.id })} style={{ backgroundColor: theme.colors.onBackground, color: theme.colors.primary, fontWeight: 'bold', fontSize: 25 }} variant="titleLarge">{movie.title}</Text>
                        <Text style={{ backgroundColor: theme.colors.onBackground, color: 'white' }} variant="bodyMedium">{movie.overview}</Text>
                    </Card.Content>
                </Card>))}
            </View>

        </SafeAreaView>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    card: {
        height: 450,

    }

})