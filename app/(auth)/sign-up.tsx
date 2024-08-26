import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Criar Sua Conta
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Nome"
            placeholder="Digite seu Nome"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) =>
              setForm({
                ...form,
                name: value,
              })
            }
          />
          <InputField
            label="Email"
            placeholder="Digite seu Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) =>
              setForm({
                ...form,
                email: value,
              })
            }
          />
          <InputField
            label="Senha"
            placeholder="Digite sua Senha"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) =>
              setForm({
                ...form,
                password: value,
              })
            }
          />
          <View className="justify-center items-center">
            <CustomButton
              title="Cadastrar"
              onPress={onSignUpPress}
              className="mt-6"
            />
          </View>

          <OAuth />

          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-6"
          >
            <Text>Já possui uma Conta? </Text>
            <Text className="text-black">Efetuar Login</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
