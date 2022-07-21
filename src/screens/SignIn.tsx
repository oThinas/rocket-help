import { useState } from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import { VStack, Heading, Icon, useTheme } from 'native-base'

import { Input } from '../components/Input'
import { Button } from '../components/Button'

import Logo from '../assets/logo_primary.svg'
import { Envelope, Key } from 'phosphor-react-native'

export function SignIn() {
  const { colors } = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    if (!email || !password) 
      return Alert.alert('Erro ao entrar', 'Informe e-mail e senha')
    
    console.log(email, password)
  }
  
  return(
    <VStack
      flex={1}
      alignItems='center'
      bg='gray.600'
      px={8}
      pt={24}
    >
      <Logo />
      <Heading
        color='gray.100'
        fontSize='xl'
        mt={20}
        mb={6}
      >
        Acesse sua conta
      </Heading>
      <Input 
        mb={4}
        placeholder='E-mail'
        InputLeftElement={
          <Icon 
            as={
              <Envelope 
                color={email === '' ? colors.gray[300] : colors.green[700]}
              />
            }
            ml={4}
          />
        }
        onChangeText={setEmail}
      />
      <Input
        secureTextEntry
        mb={8}
        placeholder='Senha'
        InputLeftElement={
          <Icon 
            as={
              <Key 
                color={password === '' ? colors.gray[300] : colors.green[700]}
              />
            }
            ml={4}
          />
        }
        onChangeText={setPassword}
      />
      <Button 
        title='Entrar'
        w='full'
        onPress={handleSignIn}
      />
    </VStack>
  )
}