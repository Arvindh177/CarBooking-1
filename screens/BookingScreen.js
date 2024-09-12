import React from "react";
import { useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import DatePicker from "react-native-datepicker";
import { supabase } from "../supabase";
export default function BookingScreen ({route, navigation}) {

    const { cars } = route.params;
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate ] = useState('');

    const handleBooking = async ()=> {
        const user = supabase.auth.user();
        if(!user) {
            Alert.alert('Please login to continue');
            return;
        }

        const { data , error } = await supabase
        .from('bookings')
        .insert({
            user_id: user.id,
            car_id: car.id,
            start_date: startDate,
            end_date: endDate,
        });

        if(error) {
            Alert.alert('Error','Booking failed');
            console.error('Booking error:', error);
        } else {
            Alert.alert('Success', 'Car booked successfully');
            navigation.goBack();
        }
        
    };


    return (
        <View>
            <Text>Book {car.name} </Text>
            <Text>Price: {car.price_per_day}/day</Text>
            <DatePicker
            date={startDate}
            mode="date"
            placeholder="Select start date"
            onDateChange={setStartDate}
            />
            <DatePicker
            date={endDate}
            mode="date"
            placeholder="Select end date"
            onDateChange={setEndDate}/>
        <Button title="Confirm Booking" onPress={handleBooking} />
            
        </View>
    );
}