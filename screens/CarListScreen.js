import React from "react";
import { View, Text, Button, FlatList} from 'react-native';

const cars = [
    {id: '1', name: 'Suzuki Swift', price: '2000/day'},
    {id: '2', name: 'Toyota Etios', price: '2500/day'},
]

export default function CarListScreen({navigation}) {
    return(
        <View>
            <FlatList
            data={cars}
            keyExtractor={(item)=>item.id}
            renderItem={({ item }) => (
                <View style={{padding: 10}}>
                    <Text>
                        {item.name}
                    </Text>
                    <Text>
                        {item.price}
                    </Text>
                    <Button
                    title="View Details"
                    onPress={()=> navigation.navigate('CarDetails', {car: item})} />
                </View>
            )}> 
            </FlatList>
        </View>
    )
}