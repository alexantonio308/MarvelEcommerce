import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  viewImage: {
    height: '50%',
    width: '100%',
    backgroundColor: '#242526'
  },
  viewOpacity: {
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 20
  },
  imageBackGround: {
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  viewTitle: {
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitle: {
    padding: 10,
    fontSize: 20,
    textAlign: "center"
  },
  viewDescriprion: {
    height: '20%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDescription: {
    padding: 10,
    fontSize: 16,
    textAlign: "left"
  },
  viewRow: {
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  viewTouchMinus: {
    padding: 10,
    flexDirection: 'row',
    height: '100%',
    width: '40%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  touchText: {
    height: 40,
    width: 40,
    backgroundColor: '#242526',
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMinus: {
    fontSize: 25,
    textAlign: "center"
  },
  viewAdd: {
    height: '80%',
    width: '40%',
    backgroundColor: 'blue',
    marginRight: 10
  },
  touchAdd: {
    height: '100%',
    width: '100%',
    backgroundColor: '#242526'
  },
  textAdd: {
    padding: 10,
    fontSize: 20,
    textAlign: "center"
  }


});
