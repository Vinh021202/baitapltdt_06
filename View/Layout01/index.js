import { Image, Pressable, Text, View, SafeAreaView} from "react-native";
import { styles } from "./style";
import { useState } from "react";

export const Layout01 = function ({ navigation }) {
    const sourceImage = [
        {
            id: 0,
            path: require("../../assets/vs_silver.png"),
        },
        {
            id: 1,
            path: require("../../assets/vs_red.png"),
        },
        {
            id: 2,
            path: require("../../assets/vs_black.png"),
        },
        {
            id: 3,
            path: require("../../assets/vs_blue.png"),
        },
    ];
    const [imageSource, setImageSource] = useState(sourceImage[3]);
    const updateImageSource = function (date) {
        setImageSource(date);
    };

    return(
      <SafeAreaView style={{flex: 1, paddingTop: 20}}>
         <View style = {styles.container}>
            <View style = {styles.Image}>
                <Image style = {{width: 300, height: 360}}
                source={imageSource.path} 
                />
            </View>
            <View style = {{flex: 4, paddingLeft: 20}}>
            <View style = {styles.containerTop}>
                    <Text style={styles.containerTop2}>
                        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                    </Text>
                <View style={{ flexDirection: "row", height: 30 }}>
                        {Array.from({ length: 5 }).map(() => {
                            return (
                                <Image
                                    style={{ width: 30, height: 25 }}
                                    source={require("../../assets/star.png")}
                                />
                            );
                        })}
                     <Text style={styles.textStar}>(Xem 828 đánh giá)</Text>
                </View>
            <View style={{ flexDirection: "row" }}>
                        <Text style={styles.price}>1.790.000 đ</Text>
                        <View style={{flexDirection: "row", height: 21, marginLeft: 60 }}>
                           <Text style={styles.priceDelete}>1.790.000 đ</Text>
                        </View>
                 </View>
                 <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            height: 20,
                        }}
                    >
                        <Text style={styles.textNote}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                        <Image
                            style={{
                                width: 20,
                                height: 20,
                            }}
                            source={require("../../assets/option.png")}
                        />
                    </View>
                    <Pressable style={styles.btn}>
                        <View>
                            <Pressable
                                onPress={() => {
                                    navigation.navigate("layout02", {
                                        data: { imageSource, updateImageSource },
                                    });
                                }}
                                style={styles.btnSelect}
                            >
                                <Text style={styles.lblBtn}>4 MÀU-CHỌN MÀU</Text>
                                <Image
                                    style={{
                                        width: 12,
                                        height: 14,
                                    }}
                                    resizeMode="contain"
                                    source={require("../../assets/vector.png")}
                                />
                            </Pressable>
                        </View>
                    </Pressable>
                </View>

                    <View style={{ flex: 6, justifyContent: "flex-end" }}>
                    <Pressable style={styles.btnBottom}>
                        <Text style={styles.lblBtnBottom}>CHỌN MUA</Text>
                    </Pressable>
                </View>  
            </View>    
        </View>       
      </SafeAreaView> 
    );

}