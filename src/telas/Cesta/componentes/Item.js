import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem } }) {
return <View style={estilos.item}>
      <Image source={ imagem } style={estilos.imagemItem} />
      <Texto style={ estilos.nomeItem} >{nome}</Texto>
    </View>
}

const estilos = StyleSheet.create ({
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
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