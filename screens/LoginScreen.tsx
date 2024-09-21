import { View } from "react-native";
import { Text, Card, Input, Button, renderNode } from "@rneui/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { login } from "../services/auth-service";
import { AxiosError } from "../services/http-service";
import Toast from "react-native-toast-message";

const LoginScreen = (): React.JSX.Element => {
  // 1.define validation with Yub
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email.")
      .email("Email format is invalid."),
    password: yup
      .string()
      .required("Please enter your password.")
      .min(3, "Password must be at least 3 characters"),
  });
  //2. Apply with react hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onLogin = async (data:any) => {
    try {
      const res = await login(data.email, data.password);
      if(res.status === 200) {
        Toast.show({type:'success', text1:"Login Successful!"})
        //console.log("Login successful!")
      }
    } catch (error:any) {
      let err:AxiosError<any> = error; // change error to AxiosError
      if(err.response?.status===401) {
        Toast.show({type:'error', text1:err.response.data.message})
        //console.log(err.response.data.message);
      } else {
        Toast.show({type:'error', text1:"Fail to connect to server . . ."})
        //console.log("Fail to connect to server . . .");
      }
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h2>Thai-Nichi Apirak</Text>
      <Card containerStyle={{ padding: 10, width: "90%" }}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Email"
              leftIcon={{ name: "email" }}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              secureTextEntry
              placeholder="Password"
              leftIcon={{ name: "key" }}
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <Button title="Login" 
          size="lg"
          onPress={handleSubmit(onLogin)}
          loading={isSubmitting}
          disabled={!isValid}
        />
      </Card>
    </View>
  );
};

export default LoginScreen;
