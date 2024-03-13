import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Filters = ({ onChange, selections, sections }) => {
  return (
    <View style={styles.filtersContainer}>
      {sections.map((section, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onChange(index);
          }}
          style={[
            styles.btn,
            {
              flex: 1 / sections.length,
              backgroundColor: selections[index] ? "#495e57" : "#edefee",
            },
          ]}
        >
          <Text
            style={[
              styles.btnTxt,
              { color: selections[index] ? "#edefee" : "#495e57" },
            ]}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  filtersContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingLeft: 15,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginRight: 30,
  },
  btnTxt: {
    fontWeight: "bold",
    padding: 0,
  },
});

export default Filters;
