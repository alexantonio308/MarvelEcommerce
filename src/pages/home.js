import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Image, ImageBackground, FlatList, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import ModalComponent from '../components/modalComponent';
import Icon from 'react-native-vector-icons/FontAwesome5';


// const PUBLIC_KEY = '71bb8861241c175f09eaa86010f4ff50';
// const PRIVATE_KEY = '93015aa6f906735b827e4801bcba0d390952ed02';
// const ts = Number(new Date()).toString();
// const hash = '56f90f70f80f2db7aae6f9732adbeb6f';
// const baseUrl = 'http://gateway.marvel.com/v1/public';


const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [comics, setComics] = useState([])
    useEffect(() => {

        async function getComics() {
            const response = await axios.get('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=71bb8861241c175f09eaa86010f4ff50&hash=56f90f70f80f2db7aae6f9732adbeb6f');
            setComics(response.data.data.results)
            setTotalItem(count*price)
        }
        getComics()
    }, [])

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [imagePath, setImagePath] = useState();
    const [imageExtension, setImageExtension] = useState();
    const [price, setPrice] = useState(price);
    const [count, setCount] = useState(0);
    const [total, setTotalItem] = useState(0);
    const [cardList, setCardList] = useState([]);

    console.log('Seu carrinho:', cardList)
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Modal visible={modalVisible} animationType="slide"
                transparent={true}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: '50%', width: '100%', backgroundColor: '#242526' }}>
                        <View style={{ height: '50%', width: '100%', backgroundColor: '#242526' }} />
                        <View style={{ height: '50%', width: '100%', backgroundColor: 'white', opacity: 20 }} />
                        <ImageBackground style={{ height: '100%', width: '100%', position: 'absolute' }} resizeMode="center" source={{ uri: `${imagePath}.${imageExtension}` }} />
                    </View>
                    <View style={{ height: '10%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ padding: 10, fontSize: 20, textAlign: "center" }}>{title}</Text>
                    </View>
                    <View style={{ height: '20%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                        <ScrollView style={{ flex: 1 }}>
                            <Text style={{ padding: 10, fontSize: 16, textAlign: "left" }}>{description}</Text>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'row', height: '20%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }} >
                        <View style={{ padding: 10, flexDirection: 'row', height: '100%', width: '40%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }} >
                            <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: '#242526', borderRadius: 80, justifyContent: 'center', alignItems: 'center' }} onPress={() => { count > 0 && setCount(prevCount => prevCount - 1) }}>
                                <Text style={{ fontSize: 25, textAlign: "center" }}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>{count}</Text>
                            <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: '#242526', borderRadius: 80, justifyContent: 'center', alignItems: 'center' }} onPress={() => setCount(prevCount => prevCount + 1)}>
                                <Text style={{ fontSize: 25, textAlign: "center" }}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: '40%', width: '40%', backgroundColor: 'blue', marginRight: 10 }}>
                            <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: '#242526' }}
                                // onPress={() => add({ title: title, description:description, imagePath: thumbnail.path, imageExtension: thumbnail.extension, price: comics.prices[0].price })}
                                onPress={() => {
                                    setModalVisible(false);
                                    const arr = [...cardList, { title, imagePath, imageExtension, price, count, total }];
                                    setCardList(arr)

                                }}
                            >
                                <Text style={{ padding: 10, fontSize: 20, textAlign: "center" }}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{ flexDirection: 'row', height: '10%', width: '100%', alignItems: 'center'}}>
                <View style={{ height: '100%',width:'90%',marginLeft:15, alignItems:'center', justifyContent: 'center' }} >
                    <Image name='logo' style={{ width: 90, height: 39 }} source={require('../image/logo.png')} />
                </View>
                <View style={{ width:'100%', position:'absolute', aliginSelf:'flex-end'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Cart', { title, description, imagePath, imageExtension, count, price })}>
                    <Icon name='shopping-cart' class='shopping-cart' style={{ textAlign: 'right', marginRight: 25 }} size={25} color='black' backgroundColor='white' />
                </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: '90%' }}>
                <FlatList style={{ alignSelf: 'center' }} data={comics} keyExtractor={(comics) => comics.id} renderItem={({ item: comics, index }) => (
                    <TouchableOpacity style={{ backgroundColor: 'white', height: '100%', width: '50%', borderRadius: 10, alignItems: 'center', alignSelf: 'center', padding: 5 }}
                        onPress={() => { setModalVisible(true); setTitle(comics.title); setDescription(comics.description); setImageExtension(comics.thumbnail.extension); setPrice(comics.prices[0].price); setImagePath(comics.thumbnail.path), setCount(count), setTotalItem(parseFloat(count * price)) }}
                    // onPress={() => navigation.navigate('Description', { title: comics.title, description: comics.description, imagePath: comics.thumbnail.path, imageExtension: comics.thumbnail.extension, price: comics.prices[0].price })}
                    >
                        <ImageBackground style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 6, }, shadowOpacity: 0.39, shadowRadius: 8.30, elevation: 13, marginLeft: 10, marginTop: 5, height: 230, width: '90%', borderRadius: 25 }} source={{ uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}` }} />
                        <Text style={{ fontFamily: 'Sans', padding: 10, textAlign: "center" }}>{comics.title}</Text>
                    </TouchableOpacity>
                )} numColumns={2} />
            </View>
        </View>
    );

}

export default Home;