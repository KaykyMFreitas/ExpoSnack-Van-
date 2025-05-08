import React from 'react';
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';

const Header = (props) => {

  return(
      <TextInput
        style={styles.input}
        mode="outlined"
        {...props}
      />
  );
};

const styles = StyleSheet.create({
  input:{
    width: '90%',
    marginBottom: 20,
  }
});

export default Header;