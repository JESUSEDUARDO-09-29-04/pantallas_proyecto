import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Portada } from './componentes/Portada';
import { Login } from './componentes/Login';
import { Registro } from './componentes/Registro';
import { Productos } from './componentes/Productos';
import { Controles } from './componentes/Controles';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#753c15" />
      <Cuerpo />
    </View>
  );
}

export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.texto}>X</Text>
      <Text style={styles.texto}>Nombre</Text>
      <Text style={styles.texto}>X</Text>
    </View>
  );
};

export function Cuerpo() {
  return (
    <View style={styles.contenido}>
      <Controles />
    </View>
  );
}

export const Pie = () => {
  return (
    <View style={styles.pie}>
      <Text style={styles.texto}>x</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8fe3ff',
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c09a7e',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  pie: {
    flexDirection: 'row',
    backgroundColor: '#c09a7e',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10,
  },
  contenido: {
    flex: 1,
  },
  texto: {
    color: "#fff",
    fontSize: 30,
  },
});
