import { Image, Pressable, Text, View  , SafeAreaView} from "react-native";
import { styles } from "./style";
import { useState } from "react";

export const Layout02 = function ({ navigation, route }) {
    const box = ["#C5F1FB", "#F30D0D", "#000000", "#234896", 
    
];
    const sourceImage = [
        {
            id: 0,
            name: "Xanh đậm",
            code: "#234896",
            path: require("../../assets/vs_silver.png"),
            supplier: "Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
        {
            id: 1,
            name: "Đỏ",
            code: "#F30D0D",
            path: require("../../assets/vs_red.png"),
            supplier: "Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
        {
            id: 2,
            name: "Đen",
            code: "#000000",
            path: require("../../assets/vs_black.png"),
            supplier: "Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
        {
            id: 3,
            name: "Xanh nhạt",
            code: "#C5F1FB",
            path: require("../../assets/vs_blue.png"),
            supplier: "Tiki Tradding",
            price: 1790000,
            priceUnit: "đ",
        },
    ];
    const index = route.params.data.imageSource.id;
    const [imageSource, setImageSource] = useState(sourceImage[index]);

    const handLerImageSourceChange = function (index) {
        setImageSource(sourceImage[index]);
        route.params.data.updateImageSource(sourceImage[index]);
    };
    return (
        <SafeAreaView style={{flex: 1, paddingTop: 20}}>
            <View style={styles.container}>
            <View style={styles.Image}>
                <Image
                    style={{
                        width: 112,
                        height: 132,
                    }}
                    source={imageSource.path}
                    resizeMode="contain"
                />
                <View style = {{flex: 1, paddingHorizontal: 15}}>
                    <Text style={styles.lblTitle}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 6}}>
                        <Text style={{fontSize: 15}}>Màu: </Text>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>{imageSource.name}</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center", marginTop: 6}}>
                        <Text style={{fontSize: 15}}>Cung cấp bởi </Text>
                        <Text style={{fontWeight: "bold", fontSize: 15}}>{imageSource.supplier}</Text>
                    </View>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontWeight: "bold", fontSize: 18, marginTop: 10}}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd"}).format(imageSource.price)}</Text>
                    </View>
                </View>
                
                
            </View>
            <View style={styles.containerTop}>
                <Text style={styles.lblBottom}>Chọn một màu bên dưới:</Text>
                <View
                    style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <View>
                        {box.map((e, index) => {
                            return (
                                <Pressable
                                    onPress={() => {
                                        handLerImageSourceChange(index);
                                    }}
                                    style={[styles.box, { backgroundColor: e }]}
                                ></Pressable>
                            );
                        })}
                    </View>
                </View>
                <Pressable
                    onPress={() => {
                        navigation.navigate("layout01");
                    }}
                    style={styles.btn}
                >
                    <Text style={styles.lblBtn}>XONG</Text>
                </Pressable>
            </View>
        </View>
        </SafeAreaView>
    );
};