import React, { useEffect, useState } from 'react'
import { ScrollView, ImageBackground, View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useCart } from '../context/cart';


export default ({ navigation, route }) => {
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
            setImage(route.params.image)
            setCount(route.params.count)
            setPrice(route.params.price)
            setTotal(route.params.count*route.params.price)
        }
    }, [route.params])
    return (
        <View style={{ width: '100%', flex: 1, backgroundColor: 'white',alignItems: 'center', justifyContent: 'center', }}>
            <View style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ height: '40%', width: '100%', backgroundColor: '#242526' }}>
                    <ImageBackground style={{ height: '100%', width: '100%' }} resizeMode="center" source={{ uri: image }} />
                </View>
                <View style={{ height: '40%', width: '100%' }}>

                    <View style={{marginLeft:10,marginTop:10, height: '60%', width: '100%', backgroundColor: 'white', alignItems: 'flex-start', justifyContent: 'center' }} >
                        <Text style={{ width:'80%' ,height:50}}>{title}</Text>
                        <Text style={{ width:'80%',height: 25}}>Qnt: {count}</Text>
                        <Text  style={{ width:'80%',height: 25}}>Price: $ {price}</Text>
                        <Text  style={{ width:'80%',height: 25, marginBottom: 20}}>Total: $ {total}</Text>
                        <TextInput style={{ width:'80%',height: 40, borderWidth: 1, padding: 10 }} placeholder={'Cupom'}/>
                    </View>
                    <View style={{ height: '50%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                    <TouchableOpacity style={{ height: '55%', width: '100%', backgroundColor: 'gray',borderRadius: 5 }}>
                        <Text style={{marginRight:20,marginLeft:20, padding: 10, fontSize: 20, textAlign: "center" }}>Comprar</Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>

    )

}

