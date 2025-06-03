import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const bioData = () => {
    //states for biodata fields: first name, birthday and favourite genre
    const [firstName, setfirstName] = React.useState(''); //store's the user's name (initially empty '')
    const [birthday, setBirthday] = React.useState('');
    const [favouriteGenre, setfavouriteGenre] = React.useState('');

    //fctn for handling saving the biodata
    //const handleSave = () => {
       //Alert.alert('Profile Saved!', `Welcome: ${firstName}\n Birthday: ${birthday}\n`) 
    //};

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Text style={styles.label}>First Name: </Text> 
                <TextInput 
                style={styles.input}
                onChangeText = {setfirstName}
                value={firstName}
                placeholder='Enter your first name'
                />
            <Text style={styles.label}>Birthday:</Text>
            <TextInput
            style={styles.input}
            onChangeText={setBirthday}
            value={birthday} 
            placeholder='Enter your birthday (YYY-MM-DD)'
            keyboardType='numeric'
            />
            <Text style={styles.label}>Favourite Genre:</Text>
            <TextInput
            style={styles.input}
             onChangeText={setfavouriteGenre}
             value={favouriteGenre}
             placeholder='Enter your favourite book genre'
            />  
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        marginBottom: 5,
    },
    
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },

});

export default bioData;