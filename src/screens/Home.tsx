import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

import Logo from '../assets/logo_secondary.svg'
import { Button } from '../components/Button';

export function Home() {
  const { colors } = useTheme()

  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '123',
      patrimony: '654321',
      when: '20/07/2022 às 15:00',
      status: 'open'
    },
  ])

  const navigation = useNavigation()
  function handleNewOrder() {
    navigation.navigate('new')
  }

  function handleOpenDetailes(orderId: string) {
    navigation.navigate('details', { orderId })
  }
  
  return (
    <VStack
      flex={1}
      pb={6}
      bg='gray.700'
    >
      <HStack
        w='full'
        justifyContent='space-between'
        alignItems='center'
        bg='gray.600'
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton 
          icon={
            <SignOut 
              size={26}
              color={colors.gray[300]}
            />
          }
          bgColor='gray.600'
        />
      </HStack>
      <VStack
        flex={1}
        px={6}
      >
        <HStack
          w='full'
          mt={8}
          mb={4}
          justifyContent='space-between'
          alignItems='center'
        >
          <Heading color='gray.100'>
            Solicitações
          </Heading>
          <Text
            color='gray.200'
            fontSize={20}
          >
            $ {/*TODO: Add variable (number of calls)*/}
          </Text>

        </HStack>
        <HStack 
          space={3}
          mb={8}
        >
          <Filter
            type='open'
            title='em andamento'
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type='closed'
            title='finalizado'
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>
        <FlatList 
          data={orders}
          keyExtractor={item => item.id}
          renderItem={
            ({ item }) => <Order 
                            data={item}
                            onPress={() => handleOpenDetailes(item.id)}
                          />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            {
              paddingBottom: 25
            }
          }
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText
                size={40}
                color={colors.gray[300]}
              />
              <Text
                color='gray.300'
                fontSize='xl'
                mt={6}
                textAlign='center'
              >
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 'open' ? 'em aberto' : 'finalizados'}
              </Text>
            </Center>
          )}
        />
        <Button 
          title='Nova solicitação' 
          onPress={handleNewOrder}
        />
      </VStack>
    </VStack>
  );
}