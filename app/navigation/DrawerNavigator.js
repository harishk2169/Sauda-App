import React, { useEffect } from "react";
import * as firebase from "firebase";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import CustomButton from "../components/CustomButton";
import { getUserInfo } from "../utils";

const Drawer = createDrawerNavigator();

const SignOut = ({ onPress }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <CustomButton onPress={onPress}>Log Out</CustomButton>
  </View>
);

const DrawerNavigator = ({ navigation }) => {
  const { updateUser, logout } = useContext(AuthContext);
  const currentUserUID = firebase.auth().currentUser?.uid;

  useEffect(() => {
    console.log(currentUserUID);
    getUserInfo(currentUserUID).then((user) => {
      console.log("user mil gya, drawerNav\n", user);
      if (user) {
        updateUser(user);
      }
    });
  }, []);
  return (
    <Drawer.Navigator intialRoute="Feed">
      <Drawer.Screen name="Feed" component={TabNavigator} />
      {/* <Drawer.Screen name="SignIn" component={SignInScreen} /> */}
      {/* <Drawer.Screen name="SignUp" component={SignUpScreen} /> */}
      <Drawer.Screen name="LogOut">
        {() => <SignOut onPress={() => logout()} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;