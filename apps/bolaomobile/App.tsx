import { NativeBaseProvider, StatusBar } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { AuthProvider } from './src/components/contexts/AuthContext';

import { Loading } from "./src/components/Loading";
import { SignIn } from './src/screens/SignIn';


import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthProvider>
        <StatusBar 
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        {!fontsLoaded ? <Loading /> : <SignIn />}
      </AuthProvider>
    </NativeBaseProvider>
  );
}
