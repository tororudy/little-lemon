import { View, Text, StyleSheet, Image } from "react-native";

const HeroSection = (props) => {
  return (
    <View style={styles.heroSection}>
      <Text style={styles.heroHeader}>Little Lemon</Text>
      <View style={styles.heroBody}>
        <View style={styles.heroContent}>
          <Text style={styles.heroHeader2}>Chicago</Text>
          <Text style={styles.heroText}>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </Text>
        </View>
        <Image
          style={styles.heroImage}
          source={require("../img/food-banner.png")}
          accessible={true}
          accessibilityLabel={"Little Lemon Food"}
        />
      </View>

      {props.children}

    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: "#495e57",
    padding: 15,
    marginBottom: 20,
  },
  heroHeader: {
    color: "#f4ce14",
    fontWeight: "bold",
    fontSize: 60,
    fontFamily: "MarkaziText",
  },
  heroHeader2: {
    color: "#fff",
    fontSize: 45,
    fontFamily: "MarkaziText",
    marginBottom: 10,
    marginTop: -20,
  },
  heroText: {
    color: "#fff",
    fontFamily: "Karla",
    fontSize: 20,
    paddingBottom: 20,
  },
  heroBody: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heroContent: {
    flex: 1,
  },
  heroImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
});

export default HeroSection;
