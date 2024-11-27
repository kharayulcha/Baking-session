import { router } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const handleRegistration = () => {
    router.push('/register');
}
export default function index() {
    return (
        <View style={styles.container}>  
          {/* Logo and title */}
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/templogo.jpg')} style={styles.logo} />
            <Text style={styles.title}>Baking Session</Text>
          </View>
    
          {/* Subtitle */}
          <Text style={styles.subtitle}>Happy Login !!</Text>
          <Text style={styles.infoText}>Enter your credentials to login your account</Text>
    
          {/* Input fields */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email:</Text>
            <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#000" />
          </View>
    
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry placeholderTextColor="#000" />
          </View>

          {/* login button */}
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
    
          <View style={styles.loginTextContainer}>
            <Text style={styles.notRegisteredText}>
                Not registered yet?{' '}
                <Text style={styles.registerText} onPress={handleRegistration}>Get Registered</Text>
            </Text>
        </View>

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
        marginBottom: 5,
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
      loginButton: {
        width: '100%',
        backgroundColor: '#855539',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
      },
      loginButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
      loginTextContainer: {
        marginTop: 10,
        alignItems: 'center',
      },
      notRegisteredText: {
        fontSize: 16,
        color: '#000000', 
      },
      registerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#855539', 
      },
      
    });    