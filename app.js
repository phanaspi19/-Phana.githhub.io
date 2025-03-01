import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

const bubbleSort = (arr, order) => {
  let n = arr.length;
  let sortedArr = [...arr];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (
        (order === "ascending" && sortedArr[j] > sortedArr[j + 1]) ||
        (order === "descending" && sortedArr[j] < sortedArr[j + 1])
      ) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }
  return sortedArr;
};

export default function App() {
  const [input, setInput] = useState("");
  const [order, setOrder] = useState("ascending");
  const [sortedArray, setSortedArray] = useState([]);

  const handleSort = () => {
    let arr = input.split(",").map(Number);
    setSortedArray(bubbleSort(arr, order));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>បញ្ចូលលេខដែលបំបែកដោយសញ្ញាក្បៀស (,):</Text>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        keyboardType="numeric"
        placeholder="e.g. 5,3,8,1"
      />
      <Button title="តម្រៀបឡើង" onPress={() => { setOrder("ascending"); handleSort(); }} />
      <Button title="តម្រៀបចុះ" onPress={() => { setOrder("descending"); handleSort(); }} />
      <Text style={styles.label}>លទ្ធផល:</Text>
      <FlatList
        data={sortedArray.map((item) => ({ key: item.toString() }))}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});
