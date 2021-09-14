import React, { useEffect, useState } from 'react';
import { ScrollView, ImageBackground, View, Text, TextInput, FlatList, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default ({ navigation, route }) => {
    const [imagePath, setImagePath] = useState();
    const [imageExtension, setImageExtension] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [total, setTotal] = useState();
    const [count, setCount] = useState(0);
    const [descriptionLocal, setDescriptionLocal] = useState();
    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        if (route.params) {
            setTitle(route.params.title);
            setDescriptionLocal(route.params.description);
            setImagePath(route.params.imagePath);
            setImageExtension(route.params.imageExtension);
            setCount(route.params.count);
            setPrice(route.params.price);
            setTotal(route.params.count*route.params.price);
            setCardList(route.params.cardList)
        }
    })
    console.log(cardList)

    return (
        <View style={{ width: '100%', flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
            <FlatList style={{ width: '100%', backgroundColor: 'pink' }} data={cardList} renderItem={({ item }) => (
                <View style={{ height: '100%', width: '100%', backgroundColor: '#242526', flexDirection: 'row' }}>
                    <View style={{ padding: 10, height: '100%', width: '30%', backgroundColor: 'yellow', justifyContent: 'center' }} >
                        <ImageBackground style={{ height: '100%', width: '100%' }} resizeMode="contain" source={{ uri: item.image }} />
                    </View>
                    <View style={{ padding: 10, height: '100%', width: '70%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ width: '100%', height: 40 }}>{item.title}</Text>
                        <Text style={{ width: '100%', height: 20 , marginTop:10}}>Qnt: {item.count}</Text>
                        <Text style={{ width: '100%', height: 20 }}>Price: $ {item.price}</Text>
                        <Text style={{ width: '100%', height: 20, marginBottom: 10 }}>Total: $ {parseFloat(item.total).toString()}</Text>
                    </View>
                </View>
            )} />
            <View style={{ height: '20%', padding: 10, width: '100%' }}>
                <View style={{ height: '50%', padding: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput style={{ width: '60%', height: 40, borderWidth: 1, }} placeholder={'Cupom'} />
                    <TouchableOpacity style={{ height: 40, width: '100%', backgroundColor: '#242526' }}>
                        <Text style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 5, fontSize: 20, height: 40, textAlign: "center" }}>Aply</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '50%', padding: 10, width: '100%'}} >
                    <Text style={{ width: '90%', height: 25, marginBottom: 20 }}>Total: $ {parseFloat(total).toString()}</Text>
                </View>
            </View>
            <View style={{ height: '20%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                <TouchableOpacity style={{ height: '55%', width: '100%', backgroundColor: 'gray', borderRadius: 5 }}>
                    <Text style={{ marginRight: 20, marginLeft: 20, padding: 10, fontSize: 20, textAlign: "center" }}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}

