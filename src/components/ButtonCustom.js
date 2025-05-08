import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const ButtonCustom = (props) => {
  return (
    <Button
      mode="outlined"
      onPress={props.onPress} 
      style={styles.button} 
      contentStyle={styles.buttonContent} 
      labelStyle={styles.buttonLabel}
    >
      {props.title}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    width: '90%'
  },
  buttonContent: {
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  buttonLabel: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ButtonCustom;
