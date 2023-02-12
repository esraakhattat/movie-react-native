import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetails from "./MovieDetails";
import { Button, Card, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "./Store/actions/MovieAction";

import MovieCard from "./MovieCard";
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
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMoviesList())
    }, [])
    const movies=useSelector((state) => state.movieListR.movies)




    return (<ScrollView>
        <SafeAreaView style={styles.container}>

            <View>
                {movies.map(movie => (<MovieCard key={movie.id} singleMovie={movie.id} navigator={props.navigation}></MovieCard>))}
            </View>

        </SafeAreaView>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})