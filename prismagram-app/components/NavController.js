import React from "react";
import { View } from "react-native";
import { useIsLoggedIn } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import TabNavigation from "../navigation/TabNavigation";
import Mainavigation from "../navigation/Mainavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <Mainavigation /> : <AuthNavigation />}
    </View>
  );
};
