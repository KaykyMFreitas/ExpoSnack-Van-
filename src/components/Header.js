import React from 'react';
import { Appbar } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';

const Header = ({ goBack }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Appbar.Header style={styles.header}>
        {goBack && <Appbar.BackAction onPress={goBack} />}
      </Appbar.Header>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
});

export default Header;
