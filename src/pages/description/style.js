import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    flexView: {
        flex: 1
    },
    backgroundImage: {
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
    image: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    title: {
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
    viewDescription: {
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
    countView: {
        flexDirection: 'row',
        height: '20%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    countButtons: {
        padding: 10,
        flexDirection: 'row',
        height: '100%',
        width: '40%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttons: {
        height: 40,
        width: 40,
        backgroundColor: '#242526',
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtons: {
        fontSize: 25,
        textAlign: "center"
    },
    viewAdd: {
        height: '40%',
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
})