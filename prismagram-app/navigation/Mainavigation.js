import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";
import MessageNavigation from "./MessageNavigation";
import { stackStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    PhotoNavigation,
    TabNavigation,
    MessageNavigation
  },
  {
    navigationOptions: {
      headerStyles: { ...stackStyles }
    },
    headerMode: "none"
  }
);

export default createAppContainer(MainNavigation);
