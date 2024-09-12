import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../supabase';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Registration Error', error.message);
    } else {
      // Insert the user into the users table
      const { error: dbError } = await supabase
        .from('users')
        .insert({ email: data.user.email });

      if (dbError) {
        Alert.alert('Database Error', dbError.message);
      } else {
        Alert.alert('Registration Successful!');
        navigation.navigate('Login');
      }
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, borderBottomWidth: 1 }}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
