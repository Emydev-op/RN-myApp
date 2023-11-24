import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Pressable,
} from "react-native";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar backgroundColor="#8a577a" />
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome!</Text>
          <Text style={styles.text}>Your Count is: {count}</Text>
        </View>
        <View style={[styles.box, { flexGrow: 3 }]}>
          <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={[styles.text, { color: "white" }]}>Click Me</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
  },
  safecontainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 25 : 0,
    backgroundColor: "plum",
  },
  box: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: "#8a577a",
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
