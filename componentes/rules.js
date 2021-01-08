import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function(){
    return( 
        <View>
            <Text style={styles.title}>Sorteador de times</Text>
            <Text style={{marginHorizontal:5,color:'#222',fontSize:25}}>Rules: </Text>
            <Text style={styles.rules}>- Não repitir os nomes;</Text>
            <Text style={styles.rules}>- Só apertar o botão de sorteio quando todos os nomes já estiverem adicionados;</Text>
            <Text style={styles.rules}>- Se quiser sortear o campo e bola, basta clicar no botão de sorteio de bola ou campo;</Text>
            <Text style={styles.rules}>- Não reclame dos times sorteados, pois tudo é aleatório;</Text>
            <Text style={styles.rules}>- No máximo 6 jogadores nesta versão do aplicativo.</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    title:{
        marginHorizontal:5,
        marginTop:5,
        fontSize:25,
        fontWeight:'bold',
        color:'#05d',
        fontSize:30,
    },
    rules:{
        color:'#222',
        marginHorizontal:5,
        marginLeft:10,
        fontSize:22,
    },
})