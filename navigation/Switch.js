import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import CreateTask from '../screens/CreateTask'
import Home from '../screens/Home'
export default class Switch extends React.Component {
    render() {
        return <Appcontainer />
    }
}

var switchContainer = createSwitchNavigator({
    Home: Home,
    CreateTask: CreateTask
})
const Appcontainer = createAppContainer(switchContainer)