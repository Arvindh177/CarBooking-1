import React from "react";
import { View, Text, Button, FlatList} from 'react-native';
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function CarListScreen() {
    const [cars, setCars] = useState([]);
    
    useEffect(()=> {
        const fetchCars = async()=> {
            const { data, error} = await supabase
            .from('cars')
            .select('*')
            .eq('available', true);

            if(error) {
                console.error('Error fetching cars:', error);
            } else {
                setCars(data);
            }
        };
        fetchCars();
    },[]);
    return(
        <View>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price_per_day}/day</Text>
          </View>
        )}
      />
    </View>
    )
}