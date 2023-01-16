import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'






const LoginScreen = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().trim().email("Invalid Email Address").required().label("Email Address"),  //i.e it must be a string and its required
        password: Yup.string().trim().required().label("Password"),  //i.e it must be a string and its required
    })


    const navigation = useNavigation();


    return (

        <View className="flex-1 bg-slate-50 justify-center px-6">
            <View>
                <Text className="text-4xl font-bold text-cyan-900 mb-10">Login</Text>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => {
                    Alert.alert("Your data has been Submitted")
                    console.log(values)
                    navigation.navigate("Product")
                }}>
                    {(props) => (
                        <View className="space-y-6">
                            <View className="space-y-2">
                                <Text className="font-semibold">Email Address</Text>
                                <TextInput placeholder='Enter Email Address'  className="border p-3 border-slate-300 rounded-lg" keyboardType="email-address"
                                    onChangeText={props.handleChange('email')} value={props.values.email} />
                                {props.touched.email && props.errors.email && (<Text className="text-red-900">{props.errors.email}</Text>)}
                            </View>

                            <View className="space-y-2">
                                <Text className="font-semibold">Password</Text>
                                <TextInput placeholder='Enter Password' className="border p-3 border-slate-300 rounded-lg" secureTextEntry={true}
                                    onChangeText={props.handleChange('password')} value={props.values.password} />
                                {props.touched.password && props.errors.password && (<Text className="text-red-900">{props.errors.password}</Text>)}
                            </View>

                            <Pressable onPress={props.handleSubmit} className={`py-4 rounded-lg ${props.isValid ? "bg-cyan-900" : "bg-cyan-600"}`} disabled={!props.isValid}>
                                <Text className="text-white text-base font-semibold text-center">Login</Text>
                            </Pressable>
                        </View>
                    )}
                </Formik>
                <View className="flex-row justify-center gap-1 mt-3 items-center">
                    <Text className="text-slate-500">Are you a new user?</Text>
                    <Pressable onPress={() => navigation.navigate('Register')}>
                        <Text className="font-semibold text-black">Create an Account</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen