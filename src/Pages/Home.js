import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native'
import { NotificationManager } from '/home/rafael/ProjetoNotificacao/notificacao/src/Notification.js'

const notificador = NotificationManager

export default class Home extends Component {

  onPressSendNotification = () => {
    notificador.showNotification(
      1,
      "Esse é o nosso título",
      "E aqui está a mensagem. Vamos inserir uma mensagem um pouco mais longa para vermos o Android irá se adaptar ao conteúdo na tela?",
      {}, // data
      {} // options
    )
  }

  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification()
  }


  render() {
    let { container, button } = styles

    return (

      <View style={styles.container}>

<Image style={{ width: 300, height: 270, }} source={require('notificacao/src/Imagens/rafafood.png')}></Image>
          <TouchableOpacity
          style={styles.button}
          onPress={this.props.MandarNotificacao}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'red' }}>Enviar Notificação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={this.props.CancelarNotificacao}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#4169E1' }}>Cancelar Notificações</Text>
        </TouchableOpacity>
      </View>

    )
  }
}

/* Estilização do projeto */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    width: 200,
    marginTop: 40

  }
});