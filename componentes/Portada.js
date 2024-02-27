import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

export const Portada = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} 
        style={styles.logo} 
      />
      <Text style={styles.text}>¡Bienvenido a nuestra aplicación!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.registrarButton]} onPress={() => {}}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => {}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.omitirContainer}>
        <TouchableOpacity style={styles.omitirButton} onPress={() => {}}>
          <Text style={styles.omitirText}>Omitir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 80,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%', 
    paddingVertical: 12,
  },
  registrarButton: {
    backgroundColor: '#007bff',
  },
  loginButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  omitirContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  omitirButton: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  omitirText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
