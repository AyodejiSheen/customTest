import { View, Text, Image, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Rating } from './rating';
import * as Location from 'expo-location';
import { getDistance, getPreciseDistance } from 'geolib';





const ProductList = (props) => {

  let { product } = props;

  const [location, setLocation] = useState({ long: "", lat: "", loading: false })


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const coord = location.coords;
      setLocation({ ...location, long: coord.longitude, lat: coord.latitude, loading: true });
    })();
  }, [])


  const handleOrder = (productId) => {
    let dis = getDistance(
      { latitude: location.lat, longitude: location.long },
      { latitude: 6.4253, longitude: 3.4095 },
    );

    if (dis <= 5000) {
      Alert.alert(`Your order has been placed since you are in ${dis} meters away`);
    } else {
      Alert.alert(`Order was not placed because you are in ${dis} meters away`)
    }

  }



  return (
    <View key={product.id} className="py-3 mx-3 my-3 w-[43%] shadow-lg shadow-black bg-white px-3 space-y-2 rounded-md">
      <Image
        resizeMode="contain"
        className="w-full h-24"
        alt={product.name}
        source={{ uri: product.image }}
      />

      <View>
        <Text className="text-2xl font-black">${product.price}</Text>
        <Text className="text-sm" numberOfLines={1}>{product.name}</Text>
        <Rating value={product.rating} />
        <Pressable onPress={() => handleOrder(product.id)} className="bg-cyan-900 py-2 mt-3 rounded-lg">
          <Text className="text-center text-white font-medium">Order Now</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ProductList