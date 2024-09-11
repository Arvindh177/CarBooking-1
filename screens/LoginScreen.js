import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too short').required('Required')
});

export default function LoginScreen({ navigation }) {
    const handleLogin = (values) => {
        navigation.navigate('Cars');
    };

    return(
        <View style={{ padding: 20}}>
            <Text style={{fontSize: 24}}> Login </Text>
        <Formik
        initialValues={{ email: '', password: ''}}
        validationSchema = {LoginSchema}
        onSubmit={handleLogin}
        >
         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={{ marginBottom: 10, borderBottomWidth: 1 }}
            />
            {errors.email && touched.email ? <Text>{errors.email}</Text> : null}

            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              style={{ marginBottom: 10, borderBottomWidth: 1 }}
            />
            {errors.password && touched.password ? <Text>{errors.password}</Text> : null}

            <Button onPress={handleSubmit} title="Login" />
          </>
        )}   
        </Formik>
        </View>
    );
}