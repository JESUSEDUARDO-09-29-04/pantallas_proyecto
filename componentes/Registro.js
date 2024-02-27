import React from 'react';
import { View,Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const Registro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre(s)</Text>
        <TextInput
          placeholder='Ingrese su nombre(s)'
          style={styles.input}
        />

        <Text style={styles.label}>Apellidos</Text>
        <TextInput
          placeholder='Ingrese su(s) apellido(s)'
          style={styles.input}
        />

        <Text style={styles.label}>Correo</Text>
        <TextInput
          placeholder='Ingrese su correo electrónico'
          autoCapitalize='none'
          style={styles.input}
        />

        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          placeholder='Ingrese su número de teléfono'
          keyboardType='phone-pad'
          style={styles.input}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder='Ingrese su contraseña'
          secureTextEntry={true}
          style={styles.input}
        />

        <Text style={styles.label}>Confirmar Contraseña</Text>
        <TextInput
          placeholder='Confirme su contraseña'
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={[styles.button, styles.registrarButton]} onPress={() => {}}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <Image
        source={require('../assets/huella.png')}
        style={styles.huella}
      />

      <View style={styles.loginText}>
        <TouchableOpacity onPress={() => {}}>
          <Text>¿Ya tienes una cuenta? Iniciar sesión</Text>
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
    paddingHorizontal: 20,
  },
  huella: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    paddingVertical: 12,
  },
  registrarButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
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

export default Registro;
