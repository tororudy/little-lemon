import { View, Text, StyleSheet, Image } from "react-native";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require("../img/little-lemon-logo.png")}
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />

      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        padding: 12,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#dee3e9",
      },
      logo: {
        height: 50,
        width: 150,
        resizeMode: "contain",
      },
});

export default Header;
