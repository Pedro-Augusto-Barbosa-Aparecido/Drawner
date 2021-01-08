import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function(){

    const [sort, setSort]=useState("Clique para sortear")
    const images=[
        "Campo","Bola"
    ]

    function _sortear(quantidade, maximo) {
        var numeros = [];
    
        // Preenche um array com os números de 1 ao maximo
        for (var numero = 1; numero <= maximo;  numero++) {
        numeros.push(numero);
        }
        
        numeros.sort(function randomizar(a, b) {
        return Math.random() * 2 - 1; // Ordena randomicamente
        });
    
        return numeros.splice(0, quantidade);
    }

    const sorteioCampo=()=>{
        var num=_sortear(1,10)
        if((num%2)!==0){
            setSort(images[1]);
        }else{
            setSort(images[0]);
        }
    }
    return(
        <View style={{paddingHorizontal:5}}>
            <Text style={styles.title}>Nesta tela você poderá sortear o campo ou bola.</Text>
            <View style={styles.txtShowed}>
                <Text style={styles.textContentSort}>{sort}</Text>
            </View>
            <TouchableHighlight style={styles.btn} onPress={()=>{sorteioCampo()}}>
                <Text style={styles.txtBtn}>Sortear campo ou bola</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        paddingHorizontal:5,
        paddingVertical:5,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    btn:{
        backgroundColor: '#798',
        padding:10,
        borderWidth:2,
        borderColor: 'black',
        borderRadius:10,
        alignItems: 'center',
    },
    txtBtn:{
        fontWeight: 'bold',
        fontSize: 24,
    },
    txtShowed: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius:5,
        backgroundColor:'#ddd',
        alignItems: 'center',
        paddingBottom:205,
        paddingTop:205,
        
    },
    textContentSort:{
        fontWeight: 'bold',
        fontSize: 24,
        color: '#80090f',
    },
})