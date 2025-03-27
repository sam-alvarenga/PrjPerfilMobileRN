import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';


export default function App() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Júnior', value: 'Júnior' },
    { label: 'Pleno', value: 'Pleno' },
    { label: 'Sênior', value: 'Sênior' }
  ]);

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
        />

        {/* Campo Idade */}
        <Text style={styles.label}>Idade</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade"
          keyboardType="numeric"
        />

        {/* Campo Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        {/* Campo Celular */}
        <Text style={styles.label}>Celular</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu celular"
          keyboardType="phone-pad"
        />

        {/* Campo Nível de Senioridade */}

        <DropDownPicker style={styles.dropDownPicker} placeholder='Nível Senioridade'
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center'


  },

  form: {
    width: '90%',
    marginTop: 100
  },

  label: {
    marginVertical: 5,
    fontSize: 15,

  },

  input: {
    height: 40,
    borderColor: '#276FF5',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    width: '100%'

  },

  dropDownPicker: {
    borderColor: '#276FF5',
    marginVertical:10

  }
});
