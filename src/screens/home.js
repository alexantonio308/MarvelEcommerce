import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ImageBackground, FlatList, Text, TouchableOpacity } from 'react-native';

// const PUBLIC_KEY = '71bb8861241c175f09eaa86010f4ff50';
// const PRIVATE_KEY = '93015aa6f906735b827e4801bcba0d390952ed02';
// const ts = Number(new Date()).toString();
// const hash = '56f90f70f80f2db7aae6f9732adbeb6f';
// const baseUrl = 'http://gateway.marvel.com/v1/public';


const Home = ({ navigation }) => {
    const [comics, setComics] = useState([])

    useEffect(() => {

        async function getComics() {
            const response = await axios.get('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=71bb8861241c175f09eaa86010f4ff50&hash=56f90f70f80f2db7aae6f9732adbeb6f');
            setComics(response.data.data.results)
        }
        getComics()
    }, [])
    
    return (
        <SafeAreaView style={{ flex: 1,backgroundColor: '#242526'  }}>
            <FlatList style={{ margin: 10 }} data={comics} renderItem={({ item: comics }) => (
                <TouchableOpacity style={{ backgroundColor: 'white', height: '100%', width: '50%', borderRadius: 1, alignItems: 'center', alignSelf: 'center' }} onPress={() => navigation.navigate('Description', { title: comics.title, description: comics.description, imagePath: comics.thumbnail.path, imageExtension: comics.thumbnail.extension, price: comics.prices[0].price })}>
                    <ImageBackground style={{marginLeft:15,marginTop:5, height: 230, width: '90%', borderRadius: 25 }} source={{ uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}` }} />
                    <Text style={{ padding: 10, textAlign: "center" }}>{comics.title}</Text>
                </TouchableOpacity>)
            } numColumns={2} />
        </SafeAreaView>
    );

}

export default Home;