import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Home from "./Home";
const Stack = createNativeStackNavigator()
export default function LogIn(){
    return <Stack.Navigator
    initialRouteName="LogIn">
    <Stack.Screen name="LogIn" component={LogInPage} />
    {/* <Stack.Screen name="Home" component={Home} /> */}
</Stack.Navigator>
}

function LogInPage({navigation}){
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [userNameErr,setUserNameErr]=useState()
    const [passwordErr,setPasswordErr]=useState()

    function handleUserNameChange(e){
        setUserName(e)
        if(e.length==0){
            setUserNameErr("This field is required")
        }else if(e.length<2){
            setUserNameErr("Username length at least 2 characters")
        }else{
            setUserNameErr("")
        }
    }
    function handlePasswordChange(e){
        setPassword(e)
        if(e.length==0){
            setPasswordErr("This field is required")
        }else if(e.length<8){
            setPasswordErr("password length at least 8 characters")
        }else{
            setPasswordErr("")
        }
    }
    function handleSubmit(){
        if (passwordErr!="" || userNameErr!=""){
            alert("Invalid login")

        }else{
            alert(`Hello, ${userName}`)
            navigation.navigate("Home")
        }
    }


    return <View style={styles.loginContainer}>
    <Text style={styles.title}>Log In</Text>
    <TextInput  onChangeText={handleUserNameChange} value={userName} style={styles.input} label="Username" mode="flat"/>
    <Text style={{color:'red'}}>{userNameErr}</Text>
    <TextInput secureTextEntry={true} onChangeText={handlePasswordChange} value={password} style={styles.input} label="Password" mode="flat"/>
    <Text style={{color:'red'}}>{passwordErr}</Text>
    <Button onPress={handleSubmit} style={styles.btn} title="Submit">Submit</Button>
    </View>
}

const styles=StyleSheet.create({
    loginContainer:{
        padding:30,
        backgroundColor:'white',
        // marginTop:50,
        margin:30,
        borderRadius:20,
        // opacity:0.8
    },
    input:{
        color:"#273178"
    },
    btn:{
        backgroundColor:"#273178f0",
        color:'white',
        marginTop:10,
        width:150
    },
    title:{
        fontWeight:'bold',
        fontSize:25,
        color:"#273178"
    }
})