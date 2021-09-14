import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, TextInput, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';



const Cart = ({ route }) => {
    const COMUM = 'COMUM'; //10
    const RARE = 'RARE'; //25
    const [cardList, setCardList] = useState([]);
    const [final, setFinal] = useState(0);
    const [cupom, setCupom] = useState('');
    const [discount, setDiscount] = useState(0);
    useEffect(() => {
        if (route.params) {
            setCardList(route.params.cardList)
        }
    }, [route.params])

    useEffect(() => {
        cardList.map((item) =>
            setFinal(prevCount => prevCount + (item.price * item.count))
        )

    }, [cardList])

    function applyCupom() {
        if (cupom == COMUM) {
            setDiscount(final * 0.10)
        } else if (cupom == RARE) {
            setDiscount(final * 0.25)
        } else {
            setDiscount(0)
        }
    }
    return (
        <View style={styles.principal}>
            <FlatList scrollEnabled={true} style={styles.normal} data={cardList} renderItem={({ item }) =>
                <View style={styles.row}>
                    <View style={styles.viewImage} >
                        <ImageBackground style={styles.normal} resizeMode="contain" source={{ uri: item.image }} />
                    </View>
                    <View style={styles.descItemTotal} >
                        <View style={styles.normalWidth}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <Text style={styles.quantity}>Qnt: {item.count}</Text>
                        <Text style={styles.description}>Price: $ {item.price.toFixed(2)}</Text>
                        <Text style={styles.description}>Total: $ {(item.price * item.count).toFixed(2)}</Text>
                    </View>
                </View>} />
            <View style={styles.cartFinaly}>
                <View style={styles.viewCupom}>
                    <TextInput style={styles.input} placeholder={cupom} value={cupom} onChangeText={setCupom} maxLength={6} />
                    <TouchableOpacity style={styles.touchApply} onPress={() => { applyCupom(cupom) }}>
                        <Text style={styles.applyButton}>Aplicar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTotal} >
                    <Text style={styles.total}>Discount: $ {(discount.toFixed(2))}</Text>
                    <Text style={styles.total}>Total: $ {((final - discount).toFixed(2))}</Text>

                </View>
            </View>
            <View style={styles.comprar} >
                <TouchableOpacity style={styles.comprarTouch}>
                    <Text style={styles.comprarText}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}

export default Cart