import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../assets/theme";

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: COLORS.primary400,
    
  },

  flat: {
    backgroundColor: "transparent",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  flatText: {
    color: COLORS.primary200,
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
  },
});
