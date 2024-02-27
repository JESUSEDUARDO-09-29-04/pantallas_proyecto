import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export const Productos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.cartIconContainer} onPress={() => {}}>
          <Image
            source={require('../assets/car.png')}
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.searchContainer}>
          <Image
            source={require('../assets/lupa.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Buscar productos"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.productContainer}>
          <View style={styles.productItem}>
            <Image
              source={require('../assets/dis.png')}
              style={styles.productImage}
            />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>Comedero</Text>
              <Text style={styles.productDescription}>Dispensador de comida y agua inteligente </Text>
              <Text style={styles.productPrice}>$200.00</Text>
              <TouchableOpacity style={styles.addToCartButton} onPress={() => {}}>
                <Text style={styles.addToCartButtonText}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.footer, { backgroundColor: '#fff' }]}>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => {}}>
          <Image
            source={require('../assets/prod.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Productos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIconContainer} onPress={() => {}}>
          <Image
            source={require('../assets/not.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIconContainer} onPress={() => {}}>
          <Image
            source={require('../assets/perfil.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerIconContainer} onPress={() => {}}>
          <Image
            source={require('../assets/menu.png')}
            style={styles.footerIcon}
          />
          <Text style={styles.footerText}>Menú</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  cartIconContainer: {
    padding: 10,
  },
  cartIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 15,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
    height: 60, // Ajusta esta altura según sea necesario
  },
  footerIconContainer: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  footerText: {
    marginTop: 5,
    fontSize: 12,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  addToCartButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Productos;
