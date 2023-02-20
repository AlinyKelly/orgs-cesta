import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import Texto from '../../../componentes/Texto';

export default function Itens({titulo, lista}) {
  const renderItem = ({ item: {nome, imagem}}) => <View key={nome} style={estilos.item}>
      <Image source={imagem} style={estilos.imagemItem} />
      <Texto style={estilos.nomeItem}>{nome}</Texto>
    </View>

  return <>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <FlatList data={lista}
      renderItem={renderItem}
      keyExtractor={({nome}) => nome}
    />

    {lista.map(({nome, imagem}) => {
      return <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imagemItem} />
        <Texto style={estilos.nomeItem}>{nome}</Texto>
      </View>
    })  
    }
  </>
}

const estilos = StyleSheet.create ({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
  },
  imagemItem: {
    width: 46,
    height: 46,
  },
  nomeItem: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});