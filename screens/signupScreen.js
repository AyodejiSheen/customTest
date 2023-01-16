import { View, Text, TextInput, Pressable, Alert, ScrollView } from 'react-native'
import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'




const SignUpScreen = () => {

    const initialValues = {
        fullname: "",
        email: "",
        phone_number: "",
        password: "",
        confirm_password: ""
    }

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().trim().required().label("First Name"),  //i.e it must be a string and its required
        email: Yup.string().trim().email("Invalid Email Address").required().label("Email Address"),  //i.e it must be a string and its required
        phone_number: Yup.string().min(10).max(12).matches(/^[0-9]+$/, "Must be digits only").required().label("Phone Number"),  //i.e it must be a string and its required
        password: Yup.string().trim().required().label("Password"),  //i.e it must be a string and its required
        confirm_password: Yup.string().trim().required().label("Confirm Password").when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Password doesnot match!"
            )
        }),
    })


    const navigation = useNavigation();


    return (

        <View className="flex-1 bg-slate-50  px-6">
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="py-20">
                        <Text className="text-4xl font-bold text-cyan-900 mb-10">Create you account</Text>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => {
                            Alert.alert("Your data has been Submitted")
                            console.log(values)
                            navigation.navigate('Product')
                        }}>
                            {(props) => (
                                <View className="space-y-6">

                                    <View className="space-y-2">
                                        <Text className="font-semibold">Fullname</Text>
                                        <TextInput placeholder='Enter Your Fullname' className="border p-3 border-slate-300 rounded-lg"
                                            onChangeText={props.handleChange('fullname')} value={props.values.fullname} />
                                        {props.touched.email && props.errors.email && (<Text className="text-red-900">{props.errors.email}</Text>)}
                                    </View>

                                    <View className="space-y-2">
                                        <Text className="font-semibold">Email Address</Text>
                                        <TextInput placeholder='Enter Email Address' className="border p-3 border-slate-300 rounded-lg" keyboardType="email-address"
                                            onChangeText={props.handleChange('email')} value={props.values.email} />
                                        {props.touched.email && props.errors.email && (<Text className="text-red-900">{props.errors.email}</Text>)}
                                    </View>


                                    <View className="space-y-2">
                                        <Text className="font-semibold">Phone Number</Text>
                                        <TextInput placeholder='+234...' className="border p-3 border-slate-300 rounded-lg" keyboardType="numeric"
                                            onChangeText={props.handleChange('phone_number')} value={props.values.phone_number} />
                                        {props.touched.phone_number && props.errors.phone_number && (<Text className="text-red-900">{props.errors.phone_number}</Text>)}
                                    </View>

                                    <View className="space-y-2">
                                        <Text className="font-semibold">Password</Text>
                                        <TextInput placeholder='Enter Password' className="border p-3 border-slate-300 rounded-lg" secureTextEntry={true}
                                            onChangeText={props.handleChange('password')} value={props.values.password} />
                                        {props.touched.password && props.errors.password && (<Text className="text-red-900">{props.errors.password}</Text>)}
                                    </View>

                                    <View className="space-y-2">
                                        <Text className="font-semibold">Confirm Password</Text>
                                        <TextInput placeholder='Confirm Your Password' className="border p-3 border-slate-300 rounded-lg" secureTextEntry={true}
                                            onChangeText={props.handleChange('confirm_password')} value={props.values.confirm_password} />
                                        {props.touched.confirm_password && props.errors.confirm_password && (<Text className="text-red-900">{props.errors.confirm_password}</Text>)}
                                    </View>

                                    <Pressable onPress={props.handleSubmit} className={`py-4 rounded-lg ${props.isValid ? "bg-cyan-900" : "bg-cyan-600"}`} disabled={!props.isValid}>
                                        <Text className="text-white text-base font-semibold text-center">Create Account</Text>
                                    </Pressable>
                                </View>
                            )}
                        </Formik>
                        <View className="flex-row justify-center gap-1 mt-3 items-center">
                            <Text className="text-slate-500">Already have an account?</Text>
                            <Pressable onPress={() => navigation.navigate('Login')}>
                                <Text className="font-semibold text-black">Sign in</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default SignUpScreen