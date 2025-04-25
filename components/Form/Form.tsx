import { Text, View, TextInput } from "react-native";
import Button from "../Button/Button";
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { useState } from 'react';
import { FormStyles } from './FormStyle';

export default function Form() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([

       /*  { label: 'Selecione o nível de senioridade', value: '' }, */
        { label: 'Júnior', value: 'Júnior' },
        { label: 'Pleno', value: 'Pleno' },
        { label: 'Sênior', value: 'Sênior' }
    ]);


    return (
        <View style={FormStyles.form}>

            <View style={FormStyles.formText}>
                <Text style={FormStyles.label}>Usuário:</Text>
                <TextInput
                    style={FormStyles.input}
                    placeholder="Digite seu usuário"
                />
                <FontAwesome size={20} name="user-large" color="#276FF5" style={FormStyles.icon} />

            </View>

            {/* Campo Idade */}
            <View style={FormStyles.formText}>
                <Text style={FormStyles.label}>Idade:</Text>
                <TextInput
                    style={FormStyles.input}
                    placeholder="Digite sua idade"
                    keyboardType="numeric"
                />

            </View>
            
            {/* Campo Email */}
            <View style={FormStyles.formText}>
                <Text style={FormStyles.label}>Email:</Text>
                <TextInput
                    style={FormStyles.input}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                />
                <FontAwesome size={20} name="envelope-open-text" color="#276FF5" style={FormStyles.icon} />
            </View>

            {/* Campo Celular */}
            <View style={FormStyles.formText}>
                <Text style={FormStyles.label}>Celular:</Text>
                <TextInput
                    style={FormStyles.input}
                    placeholder="(99) 99999-9999"
                    keyboardType="phone-pad"
                />
                <FontAwesome size={20} name="phone-flip" color="#276FF5" style={FormStyles.icon} />

            </View>

            {/* Campo Nível de Senioridade */}
            <View style={FormStyles.formText}>
                <DropDownPicker
                    style={FormStyles.dropDownPicker}
                    placeholder="Selecione o nível de senioridade"
                    textStyle={{ color: '#276FF5', fontSize: 15 }}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                   
                />
                
            </View>

            <Button />

        </View>


    );
}

