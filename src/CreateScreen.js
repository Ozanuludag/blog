import React, { useContext, useState } from "react";
import { Context } from "./context/BlogContext";
import { StyleSheet } from "react-native";
import BlogPostForm from "./components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

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

export default CreateScreen;
