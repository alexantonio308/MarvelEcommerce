import React from 'react';
import { Alert, Modal, Text, View } from 'react-native';
import { styles } from './style';


const ModalComponent = ({ visible = false, setModalVisible = false, title = null, description = null, imagePath = null, imageExtension = null, price = null }) => {
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
            <View style={{ flex: 1 }}>
              <View style={styles.viewImage}>
                <View style={styles.viewImage} />
                <View style={styles.viewOpacity} />
                <ImageBackground style={styles.imageBackGround} resizeMode="center" source={{ uri: `${comics.thumbnail.path}.${comics.thumbnail.extension}` }} />
              </View>
              <View style={styles.viewTitle} >
                <Text style={styles.textTitle}>{comics.title}</Text>
              </View>
              <View style={styles.viewDescription}>
                <ScrollView style={{ flex: 1 }}>
                  <Text style={styles.textDescription}>{comics.description}</Text>
                </ScrollView>
              </View>
              <View style={styles.viewRow} >
                <View style={styles.viewTouchMinus} >
                  <TouchableOpacity style={styles.touchText} onPress={() => { count > 0 && setCount(prevCount => prevCount - 1) }}>
                    <Text style={styles.textMinus}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>{count}</Text>
                  <TouchableOpacity style={styles.touchText} onPress={() => setCount(prevCount => prevCount + 1)}>
                    <Text style={styles.textMinus}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewAdd}>
                  <TouchableOpacity style={styles.touchAdd} onPress={() => add({ title: comics.title, description: comics.description, imagePath: comics.thumbnail.path, imageExtension: comics.thumbnail.extension, price: comics.prices[0].price })}>
                    <Text style={styles.textAdd}>Adicionar</Text>
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