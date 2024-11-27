import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const handleLogin = () => {
    router.push('/');
}
export default function register() {
    return (
        <View style={styles.container}>  
          {/* Logo and title */}
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/templogo.jpg')} style={styles.logo} />
            <Text style={styles.title}>Baking Session</Text>
          </View>
    
          {/* Subtitle */}
          <Text style={styles.subtitle}>Get Registered!!</Text>
          <Text style={styles.infoText}>Enter your credentials to get registered</Text>
    
          {/* Input fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Name:</Text>
            <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#000"/>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email:</Text>
            <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#000" />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry placeholderTextColor="#000" />
          </View>
          
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number:</Text>
            <TextInput style={styles.input} placeholder="Share your phone number" placeholderTextColor="#000" keyboardType="numeric" />
          </View>
    
          {/* Registration button */}
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Get Registered</Text>
          </TouchableOpacity>
    
          {/* Login button */}
          <TouchableOpacity style={[styles.loginButton]} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <Image source={require('../assets/images/tempp.jpg')} style={styles.cookies} />
          <Image source={require('../assets/images/tempp.jpg')} style={styles.cookies1} />
          <Image source={require('../assets/images/temprory.jpg')} style={styles.cream} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
      },
      logoContainer: {
        alignItems: 'center',
        marginBottom: 10,
      },
      logo: {
        width: 120,
        height: 120,
      },
      cookies:{
        width: 100,
        height: 100,
        right: -40,
        top: 30,
        position: 'absolute',
      },
      cookies1:{
        width: 50,
        height: 50,
        bottom: -10,
        right: 0,
        position: 'absolute',
      },
      cream:{
        width: 100,
        height: 100,
        left: -50,
        top: 130,
        position: 'absolute',
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#865437',
      },
      subtitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 4,
      },
      infoText: {
        fontSize: 14,
        color: '#7C7C7C',
        marginBottom: 20,
        textAlign: 'center',
        width: '80%',
      },
      inputContainer: {
        width: '100%',
        marginBottom: 10,
      },
      inputLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 5,
      },
      input: {
        height: 43,
        borderColor: '#BE9D70',
        backgroundColor: '#C69A7D',
        borderRadius: 10,
        paddingHorizontal: 10,
        color: '#000',
      },
      registerButton: {
        width: '100%',
        backgroundColor: '#855539',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
      },
      registerButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
      loginButton: {
        width: '100%',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: '#855539',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
      },
      loginButtonText: {
        color: '#855539',
        fontSize: 16,
        fontWeight: 'bold',
      }
    });    