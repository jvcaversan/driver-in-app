import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleSignIn = async () => {};

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-3 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Ou</Text>
        <View className="flex-1 h-[1px] bg-general-100" />
      </View>

      <View className="justify-center items-center">
        <CustomButton
          title="Login com Google"
          className="mt-3 shadow-none bg-white border border-neutral-400 w-80"
          textVariant="primary"
          onPress={handleGoogleSignIn}
          IconLeft={() => (
            <Image
              source={icons.google}
              resizeMode="contain"
              className="w-5 h-5 mx-2"
            />
          )}
        />
      </View>
    </View>
  );
};

export default OAuth;
