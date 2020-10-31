import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "./context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({navigation}) => {
  const { state, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      
      <Text>Index Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return (
           <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>
              <View style={styles.row}>
              <Text style={styles.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity style={{elevation:1, borderRadius:1}} onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} color="black" />
              </TouchableOpacity>
            </View>
           </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon:{
   fontSize:30,
   padding:8,
   borderRadius:10
   
  }
});

export default IndexScreen;
