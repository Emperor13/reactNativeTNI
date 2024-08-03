import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";

const UseEffectExample = (): React.JSX.Element => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("useEffect1 - Runs after every render...");
  });

  useEffect(() => {
    console.log("useEffect2 - Runs only when count1 change...");
  }, [count1]);

  //   use when retrieve data from API
  useEffect(() => {
    console.log("useEffect3 - Runs only once after first render...");
  }, []);

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ marginTop: 50 }}>Count1: {count1}</Text>
      <Button title="Increment Count1" onPress={() => setCount1(count1 + 1)} />
      <Text>{"\n\n"}</Text>
      <Text>Count2: {count2}</Text>
      <Button title="Increment Count2" onPress={() => setCount2(count2 + 1)} />
    </View>
  );
};

export default UseEffectExample;
