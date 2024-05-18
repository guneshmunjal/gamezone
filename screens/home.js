import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useState } from "react";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "zelda breath of fresh air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "gotta catch them all (Again)",
      rating: 4,
      body: "lorem ipsum",
      key: 2,
    },
    { title: "not so final fantasy", rating: 3, body: "lorem ipsum", key: "3" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ReviewDetails", {
                title: item.title,
                rating: item.rating,
                body: item.body,
              });
            }}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
