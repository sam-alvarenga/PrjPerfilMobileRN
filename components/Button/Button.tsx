import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Button() {
    // 'isHovered' é o estado que guarda se o botão está sendo "hovered" ou não (se o mouse está sobre ele).
    // 'setIsHovered' é a função para atualizar o valor de 'isHovered'.
    const [isHovered, setIsHovered] = useState(false);
    return (
        <TouchableOpacity
            style={[styles.button, isHovered && styles.buttonHovered]}
            onMouseEnter={() => setIsHovered(true)}  // Detecta o hover
            onMouseLeave={() => setIsHovered(false)} // Remove o hover
        >
            <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({

   
  
    button: {
      backgroundColor: '#276FF5',
      width: 151,
      height: 53,
      borderRadius: 30,
      marginTop: 15,
      alignSelf: 'center'
     
    },
  
    buttonText: {
      textAlign: 'center',
      marginTop: 12, 
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 20
  
  
    },
  
  
    buttonHovered: {
      backgroundColor: '#276FF5', // Altera a cor quando hover
    },
  
  
  
  });
  