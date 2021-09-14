import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { ImageBackground, View, Text, TextInput, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default ({ navigation, route }) => {
    const [total, setTotal] = useState();
    const [cardList, setCardList] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (route.params) {
            setTotal(route.params.count * route.params.price);
            setCardList(route.params.cardList)
        }
    }, [route.params])
    
    return (
        <View style={{ width: '100%', flex: 1, backgroundColor: 'white'}}>
            <FlatList scrollEnabled={true} style={{ width: '100%', height: '100%' }} data={cardList} renderItem={({ item }) => (
                <View style={{alignSelf: 'stretch', height: 200, backgroundColor: 'red', margin: 10, flexDirection:'row' }}>
                    <View style={{ padding: 10, height: '100%', width: '30%', justifyContent: 'center' }} >
                        <ImageBackground style={{ height: '100%', width: '100%' }} resizeMode="contain" source={{ uri: item.image }} />
                    </View>
                    <View style={{ padding: 10, height: '100%', width: '70%', backgroundColor: '#FAEBD7', alignItems: 'center', justifyContent: 'center' }} >
                        <View style={{ width: '100%' }}>
                            <Text style={{ width: '100%', height: 40, fontSize: 12, borderBottomWidth: 1, }}>{item.title}</Text>
                        </View>
                        <Text style={{ width: '100%', height: 20, marginTop: 10, fontSize: 12 }}>Qnt: {item.count}</Text>
                        <Text style={{ width: '100%', height: 20, fontSize: 12 }}>Price: $ {item.price}</Text>
                        <Text style={{ width: '100%', height: 20, fontSize: 12 }}>Total: $ {total}</Text>
                    </View>
                </View>
            )} />
            <View style={{ height: '20%', padding: 10, width: '100%', borderTopWidth: 1, backgroundColor: '#DDD9CE' }}>
                <View style={{ height: '50%', padding: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput style={{ width: '60%', height: 40, borderWidth: 1, }} placeholder={'Cupom'} />
                    <TouchableOpacity style={{ height: 40, width: '100%', backgroundColor: '#242526', borderRadius: 5 }}>
                        <Text style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 5, color: 'white', fontSize: 20, height: 40, textAlign: "center" }}>Aplicar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '50%', padding: 10, width: '100%' }} >
                    <Text style={{ width: '90%', height: 25, marginBottom: 20 }}>Total: $ {parseFloat(total).toString()}</Text>
                </View>
            </View>
            <View style={{ height: '20%', width: '100%', backgroundColor: '#DDD9CE', alignItems: 'center', justifyContent: 'center' }} >
                <TouchableOpacity style={{ height: '55%', width: '100%', backgroundColor: 'gray', borderRadius: 5 }}>
                    <Text style={{ marginRight: 20, marginLeft: 20, padding: 10, fontSize: 20, textAlign: "center" }}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}

