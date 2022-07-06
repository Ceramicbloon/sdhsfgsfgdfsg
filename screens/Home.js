import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, FlatList } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import firebase from 'firebase'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            taskList: [],
            taskTitle: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeAreaContainer} />
                <Text style={styles.title}>Reminder App</Text>
                <View>
                    <TouchableOpacity style={styles.taskbutton} onPress={() => { this.props.navigation.navigate('CreateTask') }}><Text>Create task</Text></TouchableOpacity>
                </View>
                <View>
                    <FlatList data={this.state.taskList} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
                </View>
            </View>
        )
    }
    getTask = () => {
        firebase.database().ref('tasks').on('value', (data) => {
            let arr = []
            if (data.val()) {
                Object.keys(data.val()).forEach(function (key) {
                    arr.push({
                        key: key,
                        value: data.val()[key]
                    })
                })
            }

            this.setState({ taskList: arr })
            console.log(this.state.taskList)

        })
    }
    keyExtractor = (item, index) => {
        index.toString()
    }
    renderItem = () => {
        {
            this.state.taskList.map((a) => {
                console.log(a.value)
                return (<View>

                    <Text>{a.value}</Text>
                </View>)
            })
        }

    }
    componentDidMount() {
        this.getTask()

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        flex: 0.1,
        justifyContent: 'center',
        fontSize: RFValue(20),
        alignSelf: 'center'

    }, safeAreaContainer: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    },
    taskbutton: {
        backgroundColor: '#3CCDEF',
        justifyContent: 'center',
        height: RFValue(30),
        alignItems: 'center'
    }
})