import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProductList from '../components/productList'
import { SafeAreaView } from 'react-native-safe-area-context'
import { products } from '../data/Products'

const ProductScreen = () => {
    return (
        <View className="flex-1 bg-cyan-50 py-10 px-6">
            <SafeAreaView>
                <Text className="text-3xl font-extrabold border-b border-slate-400 pb-3">All Products</Text>
                <FlatList showsVerticalScrollIndicator={false} data={products} numColumns={2} keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ProductList product={item} />} />
            </SafeAreaView>
        </View>
    )
}

export default ProductScreen