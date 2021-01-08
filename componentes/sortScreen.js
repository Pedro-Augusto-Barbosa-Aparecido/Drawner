import React, {useState} from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

export default function(){

    const [name1,setName1]=useState("Nome")
    const [name2,setName2]=useState("Nome")
    const [name3,setName3]=useState("Nome")
    const [name4,setName4]=useState("Nome")
    const [name5,setName5]=useState("Nome")
    const [name6,setName6]=useState("Nome")

    const [nname1,setNname1]=useState(" ")
    const [nname2,setNname2]=useState(" ")
    const [nname3,setNname3]=useState(" ")
    const [nname4,setNname4]=useState(" ")
    const [nname5,setNname5]=useState(" ")
    const [nname6,setNname6]=useState(" ")

    let namesS=[nname1,nname2,nname3,nname4,nname5,nname6]
    

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

    const sortTeam=()=>{

        for (var i = 0; i < namesS.length; i++) {
            if (namesS[i] === " ") {
                Alert.alert("Alerta", "É obrigatório o preenchimento dos campos");
                return
            }
        }

        var numeroSorteio = _sortear(5, 5);

        numeroSorteio.push(0);

        numeroSorteio.sort(function randomizar(a, b) {
            return Math.random() * 2 - 1; // Ordena randomicamente
        });

        setName1(namesS[numeroSorteio[0]]);
        setName2(namesS[numeroSorteio[1]]);
        setName3(namesS[numeroSorteio[2]]);
        setName4(namesS[numeroSorteio[3]]);
        setName5(namesS[numeroSorteio[4]]);
        setName6(namesS[numeroSorteio[5]]);

    }

        
    
    return(
        <ScrollView>
            <Text style={styles.txtInf}>
                Nesta tela você poderá sortear os jogadores nos times,
                por enquanto só temos um sorteio de 6 jogadores no total.
            </Text>
            <View style={styles.box}>
                <TextInput
                    placeholder="Digite um nome..."
                    style={styles.txtBox}
                    onChangeText={(text)=>{setNname1(text)}}            
                />
                <TextInput
                    placeholder="Digite um nome..."
                    style={styles.txtBox}
                    onChangeText={(text)=>{setNname2(text)}}            
                />
                <TextInput
                    placeholder="Digite um nome..."
                    style={styles.txtBox}
                    onChangeText={(text)=>{setNname3(text)}}            
                />
                <TextInput
                    placeholder="Digite um nome..."
                    style={styles.txtBox}
                    onChangeText={(text)=>{setNname4(text)}}            
                />
                <TextInput
                    placeholder="Digite um nome..."
                    style={styles.txtBox}
                    onChangeText={(text)=>{setNname5(text)}}            
                />
                <TextInput
                    placeholder="Digite um nome..."
                    style={styles.txtBox}
                    onChangeText={(text)=>{setNname6(text)}}            
                />
            </View>
            <View style={styles.btnSBox}>
                <Button title="SORTEAR" onPress={()=>sortTeam()} style={styles.btnS}></Button>
            </View> 
            <ScrollView>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={styles.block}>
                            <Text style={styles.txtNames}>{name1}</Text>
                        </View>
                        <View style={styles.block2}>
                            <Text style={styles.txtNames}>{name2}</Text>
                        </View>
                        <View style={styles.block2}>
                            <Text style={styles.txtNames}>{name3}</Text>
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'column'}}>
                        <View style={styles.block}>
                            <Text style={styles.txtNames}>{name4}</Text>
                        </View>
                        <View style={styles.block2}>
                            <Text style={styles.txtNames}>{name5}</Text>
                        </View>
                        <View style={styles.block2}>
                            <Text style={styles.txtNames}>{name6}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>           
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    txtInf:{
        fontSize:20,
        color:'#000',
        marginHorizontal:5,
        marginTop:3,
    },
    txtBox:{
        borderWidth:2,
        borderColor:'#000',
        padding:10,
        borderRadius:5,
    },
    box:{
        marginTop:25,
        marginHorizontal:5,
    },
    btnS:{
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#09a9f4',
        paddingVertical:15,
    },
    btnSBox:{
        marginHorizontal:5,
        marginTop:10,
    },
    txtBtn:{
        fontWeight:'bold',
        fontSize:25,
        color:'#000',
        marginLeft:125,
    },
    block:{
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#7599cd',
        height:40,
        marginHorizontal:5,
        marginTop:10,
    },
    block2:{
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'#7599cd',
        height:40,
        marginHorizontal:5,
        marginTop:5,
    },
    txtNames:{
        fontSize:25,
        marginTop:3,
        marginLeft:50,
        fontWeight:'bold',
        color:'#000',
    },
})