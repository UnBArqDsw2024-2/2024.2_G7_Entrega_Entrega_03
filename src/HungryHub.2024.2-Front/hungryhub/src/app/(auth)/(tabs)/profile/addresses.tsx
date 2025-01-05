

import { View, Text, StyleSheet, SafeAreaView, ScrollView, Pressable } from "react-native";
import Header from '../../../../components/Profile/Header';
import { router } from "expo-router";

export default function addresses() {

    
    // const back = () => {
    //     router.push({pathname="../../(auth)/(tabs)/profile/index"}); 
    // }

    const back = () => {
        router.back();
    }

    const navigateEdit = () =>{
      router.push({
        pathname:"../../(auth)/(tabs)/editAddress",
        // params: address
      })
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container}>
                <View style={styles.container}>
                    <Header title="Endereços" onBack={back}/>
                    <Pressable
                    onPress = {navigateEdit}>
                        <Text style={styles.text}>Editar novo endereço</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    safe: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});