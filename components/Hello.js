import {
  View,
  StatusBar,
  ScrollView,
  Text,
  ActivityIndicator,
  Alert,
  Image,
  Modal,
  Button,
  ImageBackground,
  Pressable,
} from "react-native";
import { useState } from "react";
import Greet from "./components/Greet";

const logoImg = require("../assets/adaptive-icon.png");

const Hello = () => {
  const [isModal, setIsModal] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  return (
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      <StatusBar
        backgroundColor="darkblue"
        barStyle="light-content"
        hidden={isClickable}
      />
      <Greet name="Clark Kent" />
      <ScrollView>
        <ActivityIndicator
          size="large"
          color="midnightblue"
          animating={isClickable}
        />
        <Pressable>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 300, height: 300, padding: 10 }}
          />
        </Pressable>

        <Button
          title="Press Me"
          onPress={() => setIsModal(true)}
          color={"green"}
        />
        <Button
          title="Text Me"
          onPress={() => setIsClickable(!isClickable)}
          color={"gray"}
        />
        <Button
          title="Test Alert"
          onPress={() =>
            Alert.alert("INVALID CLICK", "I don't understand your message", [
              {
                text: "OK",
                onPress: () => setIsClickable(!isClickable),
              },
              {
                text: "ERROR",
                onPress: () => setIsModal(!isModal),
              },
            ])
          }
        />

        <Modal
          visible={isModal}
          onRequestClose={() => setIsModal(false)}
          animationType="slide"
        >
          <View style={{ backgroundColor: "green", flex: 1, padding: 60 }}>
            <Text>I am a modal</Text>
            <Button title="Close" onPress={() => setIsModal(false)} />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default Hello;
