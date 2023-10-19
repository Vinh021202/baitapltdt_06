import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        
        flex: 1,
    },
    Image : {
        flex: 5, 
        width: "100%", 
        alignItems: "center"
    },
    containerTop : {
        flex: 13,
        justifyContent: "space-between",
    },
    containerTop2 :{
        fontSize: 16,
        fontWeight: "500",
        marginTop: 12, 
        width: "80%",
    },
    textStar: {
        fontSize: 17,
        fontWeight: "400",
        lineHeight: 20,
        lineHeight: 30,
        marginLeft: 40,
    },
    price: {
        fontSize: 19,
        fontWeight: "bold",
        lineHeight: 21,
    },
    priceDelete: {
        fontSize: 17,
        fontWeight: "700",
        lineHeight: 21,
        color: "#00000094",
        textDecorationLine: 'line-through'
    },
    textNote: {
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 20,
        color: "#FA0000",
        marginRight: 10,
    },
    lblBtn: {
        lineHeight: 34,
        fontSize: 15,
        fontWeight: 400,
        width: "90%",
        textAlign: "center",
    },
    btnSelect: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    btn: {
        lineHeight: 34,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#00000075",
        borderRadius: 10,
        marginRight: 15,
    },
    btnBottom: {
        backgroundColor: "#EE0A0A",
         marginTop: "auto",
          borderRadius: 12,
    },
    lblBtnBottom: {
        textAlign: "center",
         color: "#fff",
          padding: 12, 
         fontSize: 20, 
         fontWeight: "500",
    },

})