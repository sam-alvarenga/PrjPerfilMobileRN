import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      {/* Campo Nome */}
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
      <Text style={styles.label}>Nível de Senioridade</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nível de senioridade"
      />

     

    </View>
  );
}

const styles = StyleSheet.create({
  /*  container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   }, */

   label: {
    marginVertical: 5,
    fontSize: 16,
  },
});
