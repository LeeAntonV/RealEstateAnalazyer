import {Platform, StyleSheet, View, Text} from 'react-native';


export default function HomeScreen() {
  return (
      <View style={styles.viewContainer}>
          <Text style={styles.textContainer}>
              Home
          </Text>
      </View>
  );
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textContainer: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
});
