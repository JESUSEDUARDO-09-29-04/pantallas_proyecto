import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const Controles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estado del comedero</Text>
      <View style={styles.iconContainer}>
        <View style={styles.individualIcon}>
          <Image source={require('../assets/core.png')} style={styles.icon} />
          <Text style={styles.percentage}>50%</Text>
          <Image source={require('../assets/conco.png')} style={styles.icon} />
          <Text style={styles.statusText}>Comida: Lleno</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Servir comida</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.individualIcon}>
          <Image source={require('../assets/aguare.png')} style={styles.icon} />
          <Text style={styles.percentage}>50%</Text>
          <Image source={require('../assets/coco.png')} style={styles.icon} />
          <Text style={styles.statusText}>Agua: Lleno</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Servir agua</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.recordContainer}>
        <Text style={styles.recordTitle}>Historial</Text>
        <Text style={styles.recordText}>Usuario: NombreUsuario1</Text>
        <Text style={styles.recordText}>Fecha: 24/02/2024</Text>
        <Text style={styles.recordText}>Hora: 07:51 pm</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  individualIcon: {
    alignItems: 'center',
    marginRight: 20,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  percentage: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  recordContainer: {
    alignItems: 'center',
  },
  recordTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recordText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Controles;
