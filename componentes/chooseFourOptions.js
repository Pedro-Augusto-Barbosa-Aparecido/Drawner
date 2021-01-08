import React, { useState } from 'react';
import { Text, SafeAreaView, Alert, TouchableHighlight, StyleSheet, View, TextInput } from 'react-native';

export default function(){

    const testing=()=>{
      Alert.alert("Alerta","Botão pressionado")
    }

    return(
        <SafeAreaView>
          <View>
            <Text style={styles.txt}>Lembre-se das regras!!</Text>
          </View>
          <View>
            <View>
              <TextInput 
                placeholder="Digite um nome..."
                style={styles.txtBox}
              />
              <TextInput 
                placeholder="Digite um nome..."
                style={styles.txtBox}
              />
              <TextInput 
                placeholder="Digite um nome..."
                style={styles.txtBox}
              />
              <TextInput 
                placeholder="Digite um nome..."
                style={styles.txtBox}
              />
            </View>
          </View>
          <View>
            <TouchableHighlight
              
              onPress={()=>{testing()}}
              style={styles.btnS}
              
            >
              <Text style={styles.txtBtn}>
                Sortear
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
              <View style={styles.viewRes}>

              </View>
              <View style={styles.viewRes}>

              </View>
            </View>
            <View style={{flexDirection:'column'}}>
              <View style={styles.viewRes}>

              </View>
              <View style={styles.viewRes}>
                
              </View>
            </View>            
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

  btnS:{
    borderWidth:2,
    borderColor:'orange',
    backgroundColor:'#ffea45',
    borderRadius:5,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5,
  },
  txt:{
    fontSize:25,
    fontWeight:'500',
    color:'#000',
  },
  txtBtn:{
    fontSize:15,
    fontWeight:'500',
    color:'#000',
  },
  txtBox:{
    width:350,
    height:50,
    backgroundColor:'#aaeeff',
    borderColor:'#000',
    borderRadius:8,
    borderWidth:2,
    alignItems:'center',
    paddingLeft:5,
    marginHorizontal:5,
    marginVertical:5,
    paddingRight:5,
  },
  viewRes:{
    backgroundColor:'#af23ff',
    height:20,
    width:125,
    marginVertical:3,
  },
})