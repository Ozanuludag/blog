import React from "react";
import IndexScreen from "./src/IndexScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/ShowScreen";
import CreateScreen from "./src/CreateScreen";
import EditScreen from './src/EditScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
};
