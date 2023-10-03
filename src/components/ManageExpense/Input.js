import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../../../assets/theme";

export default function Input({ label,style, textInputConfig, invalid }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if(invalid){
    inputStyles.push(styles.invalidInput)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8
  },
  label: {
    fontSize: 12,
    color: COLORS.primary50,
    marginBottom: 4,
    fontWeight:'bold'
  },
  input: {
    backgroundColor: COLORS.primary50,
    color: COLORS.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  },

  invalidLabel:{
    color:COLORS.error700
  },

  invalidInput:{
    backgroundColor:COLORS.error50
  },
});
