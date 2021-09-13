import React, {useEffect, useState } from 'react';
import { ScrollView, ImageBackground,View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useCart } from '../context/cart';


const Description = ({ navigation, route }) => {
    const { add } = useCart();
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [total, setTotal] = useState();
    const [count, setCount] = useState(0);
    const [descriptionLocal, setDescriptionLocal] = useState();
    useEffect(() => {

        if (route.params) {
            setTitle(route.params.title);
            setDescriptionLocal(route.params.description);
            setImage(`${route.params.imagePath}.${route.params.imageExtension}`)
            setPrice(route.params.price);
            setTotal(route.params.total);
            setCount(route.params.count);
            setTotal(route.params.total);

        }
    }, [route.params])

    return (
        <View style={{ flex: 1}}>
            <View style={{ height: '50%', width: '100%', backgroundColor: '#242526' }}>
                <View style={{ height: '50%', width: '100%', backgroundColor: '#242526' }}/>
                <View style={{ height: '50%', width: '100%', backgroundColor: 'white', opacity:20 }}/>
                <ImageBackground style={{ height: '100%', width: '100%', position:'absolute' }} resizeMode="center" source={{ uri: image }} />
            </View>
            <View style={{ height: '10%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ padding: 10, fontSize: 20, textAlign: "center" }}>{title}</Text>
            </View>
            <View style={{ height: '20%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView style={{ flex: 1 }}>
                    <Text style={{ padding: 10, fontSize: 16, textAlign: "left" }}>{descriptionLocal}</Text>
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', height: '20%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }} >
                <View style={{ padding: 10, flexDirection: 'row', height: '100%', width: '40%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }} >
                    <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: '#242526', borderRadius: 80, justifyContent:'center', alignItems:'center'  }} onPress={() => { count > 0 && setCount(prevCount => prevCount - 1) }}>
                        <Text style={{ fontSize: 25, textAlign: "center" }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{count}</Text>
                    <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: '#242526', borderRadius: 80, justifyContent:'center', alignItems:'center' }} onPress={() => setCount(prevCount => prevCount + 1)}>
                        <Text style={{ fontSize: 25, textAlign: "center" }}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '40%', width: '40%', backgroundColor: 'blue',marginRight:10 }}>
                    <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: '#242526' }} onPress={() => add(title,descriptionLocal,image,count,price, count)}>
                        <Text style={{ padding: 10, fontSize: 20, textAlign: "center" }}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Description;