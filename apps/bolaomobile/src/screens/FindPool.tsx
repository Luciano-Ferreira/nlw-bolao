import { VStack, Heading, Text } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import Logo from '../assets/logo.svg';

export function FindPool() {
  return (
    <VStack bgColor='gray.900' h='full'>
      <Header title='Buscar por código' showBackButton />

      <VStack mt={8} mx={5} alignItems='center' bgColor='gray.900'>

        <Heading fontFamily='heading' color='white' fontSize='xl' mb={8} textAlign='center'>
          Encontre um bolão através de {'\n'}
          seu código único
        </Heading>

        <Input
          mb={2}
          placeholder='Qual o código do bolão?'
        />

        <Button 
          title='Buscar bolão'
        />
      </VStack>
    </VStack>
  )
}