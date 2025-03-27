import { View, StyleSheet, Image, Text } from "react-native";


export default function Header() {
    return (
        <View style={styles.header}>

            <Image style={styles.fotoPerfil}
                source={require('./../assets/image/FotoPerfil.png')}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    header: {
        height: 150,
        width: '100%',
        backgroundColor: '#276FF5',
        justifyContent: 'center',
        alignItems: 'center',

    },

    fotoPerfil: {     
      position: 'relative',
      top: 80,
      height: 150,
      width: 140,
    }
});
