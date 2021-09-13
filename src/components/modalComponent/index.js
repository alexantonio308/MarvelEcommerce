import React, { useState } from 'react';
import { Alert, Modal, Text, Pressable, View } from 'react-native';
import { styles } from './style';
import Description from '../../pages/description';


const ModalComponent = ({visible = false, setModalVisible = false, title = null, description= null, imagePath= null, imageExtension= null, price= null }) => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!visible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={{ flex: 1}}>
            <View style={{ height: '50%', width: '100%', backgroundColor: '#242526' }}>
                <View style={{ height: '50%', width: '100%', backgroundColor: '#242526' }}/>
                <View style={{ height: '50%', width: '100%', backgroundColor: 'white', opacity:20 }}/>
                <ImageBackground style={{ height: '100%', width: '100%', position:'absolute' }} resizeMode="center" source={{ uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}` }} />
            </View>
            <View style={{ height: '10%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{ padding: 10, fontSize: 20, textAlign: "center" }}>{comics.title}</Text>
            </View>
            <View style={{ height: '20%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView style={{ flex: 1 }}>
                    <Text style={{ padding: 10, fontSize: 16, textAlign: "left" }}>{comics.description}</Text>
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', height: '10%', width: '100%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }} >
                <View style={{ padding: 10, flexDirection: 'row', height: '100%', width: '40%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }} >
                    <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: '#242526', borderRadius: 80, justifyContent:'center', alignItems:'center'  }} onPress={() => { count > 0 && setCount(prevCount => prevCount - 1) }}>
                        <Text style={{ fontSize: 25, textAlign: "center" }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{count}</Text>
                    <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: '#242526', borderRadius: 80, justifyContent:'center', alignItems:'center' }} onPress={() => setCount(prevCount => prevCount + 1)}>
                        <Text style={{ fontSize: 25, textAlign: "center" }}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: '80%', width: '40%', backgroundColor: 'blue',marginRight:10 }}>
                    <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: '#242526' }} onPress={() => add({ title: comics.title, description: comics.description, imagePath: comics.thumbnail.path, imageExtension: comics.thumbnail.extension, price: comics.prices[0].price })}>
                        <Text style={{ padding: 10, fontSize: 20, textAlign: "center" }}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  

  export default ModalComponent;