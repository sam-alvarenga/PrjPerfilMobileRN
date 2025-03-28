import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';


export default function Home() {


    return (

        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header />
            <Form />
        </View >
    );
}


const styles = StyleSheet.create({

    container: {
        alignItems: 'center'
    },

});
