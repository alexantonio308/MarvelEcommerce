import React, { useEffect, useState } from 'react';
import { ScrollView, ImageBackground, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style';

const Description = ({ route }) => {
    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
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
        <View style={styles.flexView}>
            <View style={styles.backgroundImage}>
                <View style={styles.backgroundImage} />
                <View style={styles.viewOpacity} />
                <ImageBackground style={styles.image} resizeMode="center" source={{ uri: image }} />
            </View>
            <View style={styles.title} >
                <Text style={styles.textTitle}>{title}</Text>
            </View>
            <View style={styles.viewDescription}>
                <ScrollView style={styles.flexView}>
                    <Text style={styles.textDescription}>{descriptionLocal}</Text>
                </ScrollView>
            </View>
            <View style={styles.countView} >
                <View style={styles.countButtons} >
                    <TouchableOpacity style={styles.buttons} onPress={() => { count > 0 && setCount(prevCount => prevCount - 1) }}>
                        <Text style={styles.textButtons}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{count}</Text>
                    <TouchableOpacity style={styles.buttons} onPress={() => setCount(prevCount => prevCount + 1)}>
                        <Text style={styles.textButtons}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewAdd}>
                    <TouchableOpacity style={styles.touchAdd} onPress={() => add(title, descriptionLocal, image, count, price, count)}>
                        <Text style={styles.textAdd}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Description;