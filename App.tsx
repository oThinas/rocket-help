// Import de node_modules
import { NativeBaseProvider, StatusBar } from 'native-base'

// Import de componentes e telas
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

// Import de estilizações
import { THEME } from './src/styles/theme'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

