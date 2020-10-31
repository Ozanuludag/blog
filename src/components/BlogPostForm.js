import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <View style={{ margin: 30 }}>
        <Text style={styles.title}>Enter New Title</Text>
        <TextInput
          value={title}
          onChangeText={(newTitle) => setTitle(newTitle)}
          style={styles.input}
          placeholder="Enter Title"
        />
      </View>
      <View style={{ margin: 30 }}>
        <Text style={styles.title}>Enter New Content</Text>
        <TextInput
          value={content}
          onChangeText={(newContent) => setContent(newContent)}
          style={styles.input}
          placeholder="Enter Content"
        />
      </View>
      <TouchableOpacity 
      onPress={() => onSubmit(title,content)}
      style={styles.button}>
        <Text style={styles.btnText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "blue",
    borderRadius: 10,
    width: 100,
    height: 50,
    justifyContent: "center",
  },
  btnText: {
    alignSelf: "center",
    fontSize: 24,
  },
});

export default BlogPostForm;
