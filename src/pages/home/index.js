import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Image, ImageBackground, FlatList, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from './style';


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
            setTotalItem(count * price)
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

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Modal visible={modalVisible} animationType="slide"
                transparent={true}>
                <View style={styles.flexView}>
                    <View style={styles.viewImage}>
                        <View style={styles.viewImage} />
                        <View style={styles.viewOpacity} />
                        <ImageBackground style={styles.imageBackground} resizeMode="center" source={{ uri: `${imagePath}.${imageExtension}` }} />
                    </View>
                    <View style={styles.viewTitle} >
                        <Text style={styles.textTitle}>{title}</Text>
                    </View>
                    <View style={styles.viewDescription}>
                        <ScrollView style={styles.flexView}>
                            <Text style={styles.textDescription}>{description}</Text>
                        </ScrollView>
                    </View>
                    <View style={styles.modalView} >
                        <View style={styles.modalCount} >
                            <TouchableOpacity style={styles.touchMinus} onPress={() => { count > 0 && setCount(prevCount => prevCount - 1) }}>
                                <Text style={styles.textMinus}>-</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20 }}>{count}</Text>
                            <TouchableOpacity style={styles.touchMinus} onPress={() => setCount(prevCount => prevCount + 1)}>
                                <Text style={styles.textMinus}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.viewAdd}>
                            <TouchableOpacity style={styles.touchAdd}
                                // onPress={() => add({ title: title, description:description, imagePath: thumbnail.path, imageExtension: thumbnail.extension, price: comics.prices[0].price })}
                                onPress={() => {
                                    setCount(0)
                                    setModalVisible(false);
                                    const image = (imagePath + '.' + imageExtension);
                                    const arr = [...cardList, { title, price, count, total, image }];
                                    count > 0 && setCardList(arr)
                                }}
                            >
                                <Text style={styles.touchText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <View style={styles.headerImage} >
                    <Image name='logo' style={{ width: 90, height: 39 }} source={require('../../image/logo.png')} />
                </View>
                <View style={styles.viewIcon}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart', { cardList })}>
                        <Icon name='shopping-cart' class='shopping-cart' style={{textAlign: 'right', marginRight: 25 }} size={25} color='black' backgroundColor='white' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: '90%' }}>
                <FlatList style={{ alignSelf: 'center' }} data={comics} keyExtractor={(comics) => comics.id} renderItem={({ item: comics, index }) => (
                    <TouchableOpacity style={styles.touchFlat}
                        onPress={() => { setModalVisible(true); setTitle(comics.title); setDescription(comics.description); setImageExtension(comics.thumbnail.extension); setPrice(comics.prices[0].price); setImagePath(comics.thumbnail.path), setCount(count), setTotalItem(parseFloat(count * price)) }}                    >
                        <ImageBackground style={styles.imageFlat} source={{ uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}` }} />
                        <Text style={styles.titleText}>{comics.title}</Text>
                    </TouchableOpacity>
                )} numColumns={2} />
            </View>
        </View>
    );

}

export default Home;