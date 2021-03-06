import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      {/* <LottieView
        source={require("../assets/animations/loading.json")}
        autoplay
        loop
      /> */}
      <ActivityIndicator animating={true} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    opacity: 0.8,
    zIndex: 1000,
  },
});

export default ActivityIndicator;
