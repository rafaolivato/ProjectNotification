import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

import { NotificationManager } from './src/Notification'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/Pages/Home'
import Redirect from './src/Pages/Redirect'

const notificador = NotificationManager

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    notificador.configure();
    notificador.createChannel();
    notificador.buildNotificationSchedule();
    notificador.buildNotificationSchedule2();
  }

  onPressSendNotification = () => {
    notificador.showNotification
      (
        1,
        "Deu uma Fominha",
        "Escolhe ai um burger enquanto você corre tomar uma banho, que o pedido já está chegando....",
        {}, // data
        {} // options
      )
  }

  onPressCancelAllLocalNotification = () => {
    notificador.cancelAllLocalNotification()
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {
              ({ navigation }) => {
                notificador.setNavegador(navigation)
                return (<Home
                  MandarNotificacao={this.onPressSendNotification}
                  CancelarNotificacao={this.onPressCancelAllLocalNotification}
                />
                )
              }
            }
          </Stack.Screen>
          <Stack.Screen name="Redirect" component={Redirect} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}