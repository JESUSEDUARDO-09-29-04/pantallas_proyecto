import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/mascotas.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Inicio de Sesión</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          placeholder='Ingrese su correo electrónico'
          autoCapitalize='none'
          style={[styles.input, styles.inputWhiteBackground]} 
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder='Ingrese su contraseña'
          secureTextEntry={true}
          style={[styles.input, styles.inputWhiteBackground]} 
        />
      </View>

      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={() => {}}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/huella.png')}
        style={styles.huella}
      />

      <View style={styles.registerText}>
        <TouchableOpacity onPress={() => {}}>
          <Text>¿No tienes una cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  huella: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 10,
    backgroundColor: '#fff', 
  },
  label: {
    marginBottom: 5,
  },
  inputWhiteBackground: {
    backgroundColor: '#fff', 
  },
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    paddingVertical: 12,
  },
  loginButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
