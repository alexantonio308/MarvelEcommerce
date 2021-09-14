import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    principal:{
        width: '100%', 
        flex: 1, 
        backgroundColor: 'white'
    },
    normal:{
        width: '100%',
        height: '100%'
    },
    normalWidth:{
        width: '100%',
    },
    row:{
        alignSelf: 'stretch', 
        height: 200, 
        backgroundColor: 'red', 
        margin: 10, 
        flexDirection: 'row'
    },
    viewImage:{
        padding: 10, 
        height: '100%', 
        width: '30%', 
        justifyContent: 'center'
    },
    descItemTotal:{
        padding: 10, 
        height: '100%', 
        width: '70%', 
        backgroundColor: '#FAEBD7', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    description: {
        width: '100%',
        height: 20,
        fontSize: 12
    },
    title:{
        width: '100%', 
        height: 40, 
        fontSize: 12, 
        borderBottomWidth: 1
    },
    quantity: {
        width: '100%',
        height: 20,
        marginTop: 10,
        fontSize: 12
    },
    cartFinaly:{
        height: '20%', 
        padding: 10, 
        width: '100%', 
        borderTopWidth: 1, 
        backgroundColor: '#DDD9CE'
    },
    viewCupom:{
        height: '50%', 
        padding: 10, 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    input:{
        width: '60%', 
        height: 40, 
        borderWidth: 1
    },
    touchApply:{
        height: 40, 
        width: '100%', 
        backgroundColor: '#242526', 
        borderRadius: 5
    },
    applyButton:{
        paddingRight: 20, 
        paddingLeft: 20, 
        paddingTop: 5, 
        color: 'white', 
        fontSize: 20, 
        height: 40, 
        textAlign: "center"
    },
    viewTotal:{
        height: '50%', 
        padding: 10, 
        width: '100%'
    },
    total:{
        width: '90%',
        height: 25,
        marginBottom: 20
    },
    comprar:{
        height: '20%', 
        width: '100%', 
        backgroundColor: '#DDD9CE', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    comprarTouch:{
        height: '55%', 
        width: '100%', 
        backgroundColor: 'gray', 
        borderRadius: 5 
    },
    comprarText:{
        marginRight: 20, 
        marginLeft: 20, 
        padding: 10, 
        fontSize: 20, 
        textAlign: "center"
    }

})