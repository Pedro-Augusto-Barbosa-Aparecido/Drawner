import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default function(){
    return(
        <View>
            <Text style={styles.txtScreen}>Escolha entre um jogo com quatro ou seis pessoas que vão jogar!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txtScreen:{
        fontSize:25,
        fontWeight: 'bold',
        marginHorizontal:5
    },
})