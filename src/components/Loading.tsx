import { Center, Spinner, Heading } from 'native-base';

export function Loading() {
  return (
    <Center
      flex={1}
      bg='gray.700'
    >
      <Spinner 
        color='primary.700'
        size={48}
      />
      <Heading
        color='gray.100'
        mt={6}
      >
        Carregando
      </Heading>
    </Center>
  );
}