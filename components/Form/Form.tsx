import { Text, View, TextInput } from "react-native";
import Button from "../Button/Button";
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from '@expo/vector-icons/FontAwesome6'
import { useState } from 'react';
import { FormStyles } from './FormStyle';

export default function Form() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Júnior', value: 'Júnior' },
        { label: 'Pleno', value: 'Pleno' },
        { label: 'Sênior', value: 'Sênior' }
    ]);


    return (
        <View style={FormStyles.form}>
            <Text style={FormStyles.label}>Usuário:</Text>
            
            <TextInput
                style={FormStyles.input}
                placeholder="Digite seu nome"
            />


            {/* Campo Idade */}
            <Text style={FormStyles.label}>Idade:</Text>
            <TextInput
                style={FormStyles.input}
                placeholder="Digite sua idade"
                keyboardType="numeric"
            />

            {/* Campo Email */}
            <Text style={FormStyles.label}>Email:</Text>
            <TextInput
                style={FormStyles.input}
                placeholder="Digite seu email"
                keyboardType="email-address"
            />

            {/* Campo Celular */}
            <Text style={FormStyles.label}>Celular:</Text>
            <TextInput
                style={FormStyles.input}
                placeholder="Digite seu celular"
                keyboardType="phone-pad"
            />

            {/* Campo Nível de Senioridade */}


            <DropDownPicker style={FormStyles.dropDownPicker} placeholder='Nível Senioridade' textStyle={{ color: '#276FF5', fontSize: 15 }}

                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <Button />

        </View>


    );
}

