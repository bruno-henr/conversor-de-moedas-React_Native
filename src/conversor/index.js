import React,{useState} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import api from '../services/api';
// https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=1aa1c7d2aada8c743707
export default function Conversor(props){
    const [moedaA, setMoedaA] = useState(props.moedaA);
    const [moedaB, setMoedaB] = useState(props.moedaB);
    const [moedaB_valor, setMoedaB_valor] = useState(0);
    const [valor_final, setValor_final] = useState(0);

     const converter = async () => {
        let de_para = moedaA+'_'+moedaB; 
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=1aa1c7d2aada8c743707`);
        let cotacao = response.data[de_para];
        let resultado = (cotacao * parseFloat(moedaB_valor));
        setValor_final(resultado.toFixed(2));
        Keyboard.dismiss();
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{ props.moedaA } para { props.moedaB }</Text>
            <TextInput
                placeholder="Digite aqui quanto você quer converter"
                style={styles.areaInput}
                onChangeText={(moedaB_valor)=>{setMoedaB_valor(moedaB_valor)}}
                keyboardType="numeric"
            ></TextInput>

            <TouchableOpacity style={styles.botaoArea} onPress={converter}>
                <Text style={styles.botaoTexto}>Converter</Text>
            </TouchableOpacity>
            <Text style={styles.valorConvertido}>
                {(valor_final === 0) ? '' : valor_final}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#ccc',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5
    },
    botaoArea:{
        width: 150,
        height: 45,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15
    },
    botaoTexto: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    valorConvertido: {
        fontSize: 30,
        fontWeight:'bold',
        color: '#000',
        marginTop: 15
    }


})




