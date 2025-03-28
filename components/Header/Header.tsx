import { View, Image, Text } from "react-native";
import {headerStyles} from  './HeaderStyle';


export default function Header() {
    return (
        <View style={headerStyles.header}>

            <Image style={headerStyles.PhotoUser}
                source={require('./../../assets/image/FotoPerfil.png')}
            />
        </View>
    );
}


