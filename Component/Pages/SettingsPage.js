import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class SettingsPage extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="settings" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render () {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Settings Page</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SettingsPage;
