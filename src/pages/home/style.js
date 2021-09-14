import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    flexView: {
        flex: 1
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
    imageBackground: {
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
    modalView: {
        flexDirection: 'row',
        height: '20%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalCount: {
        padding: 10,
        flexDirection: 'row',
        height: '100%',
        width: '40%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    touchMinus: {
        height: 40,
        width: 40,
        backgroundColor: '#242526',
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textMinus: {
        fontSize: 25,
        paddingBottom: 3,
        textAlign: "center",
        color: 'white'
    },
    viewAdd: {
        height: '40%',
        width: '40%',
        marginRight: 10,
        borderRadius: 5

    },
    touchAdd: {
        height: '100%',
        width: '100%',
        backgroundColor: '#242526',
        borderRadius: 5

    },
    touchText: {
        padding: 15,
        fontSize: 20,
        textAlign: "center",
        color: 'white',
    },
    header: {
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        alignItems: 'center'
    },
    headerImage: {
        height: '100%',
        width: '90%',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 90,
        height: 39
    },
    viewIcon: {
        width: '100%',
        position: 'absolute',
    },
    icon: {
        textAlign: 'right', marginRight: 25
    },
    touchFlat: {
        backgroundColor: 'white',
        height: '100%',
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        padding: 5
    },
    imageFlat: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13,
        marginLeft: 10,
        marginTop: 5,
        height: 230,
        width: '90%',
        borderRadius: 25
    },
    titleText: {
        fontFamily: 'Sans',
        padding: 10,
        textAlign: "center"
    }


})