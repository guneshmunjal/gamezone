import { Button, StyleSheet, Text, View } from "react-native";

export default function ReviewDetails({ navigation, route }) {
  const { rating, title, body } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text>rating:{rating}</Text> */}
      <Text>title:{title}</Text>

      <Text>body:{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
