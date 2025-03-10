import { icons } from "@/constants/icons";
import { Image, Text, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center px-5 py-4 rounded-full bg-dark-200">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        placeholderTextColor="#a8b5db"
        onChangeText={onChangeText}
        className="flex-1 ml-1 text-white"
      />
    </View>
  );
};

export default SearchBar;
