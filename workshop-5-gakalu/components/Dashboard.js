import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Button} from 'react-native';
import ProfileDetails from './ProfileDetails';
import Repositories from './Repositories';
import Notes from './Notes';

const Dashboard = ({navigation,route:{params}}) => {

    return (
    <View style={styles.container}>
        <Text source={{uri:user.name}}></Text>
        <Image style={styles.image}
        source={{uri:user.avatar_url}}
        />
        <Button title='Profile' onPress={()=>navigation.navigate(ProfileDetails)}></Button>
        <Button title='Repositories' onPress={()=>navigation.navigate(Repositories)}></Button>
        <Button title='Notes' onPress={()=>navigation.navigate(Notes)}></Button>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: 0,
    },
    profilePicBox: {
        flex: 2,
    },
    image: {
        height: 350
    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 26,
    },
    blue: {
        backgroundColor: 'powderblue',
    },
    purple: {
        backgroundColor: 'violet'
    },
    pink: {
        backgroundColor: 'pink'
    }
});
export default Dashboard;