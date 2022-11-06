import { useState } from 'react';
import { VStack, Heading, useToast } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { api } from '../services/api';
import { useNavigation } from '@react-navigation/native';



export function FindPool() {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');

  const toast = useToast();

  const { navigate } = useNavigation()

  async function handleJoinPool () {
    try {
      setIsLoading(true);

      if (!code.trim()) {
        return toast.show({
          title: 'Informe o código',
          placement: 'top',
          bgColor: 'red.500'
        })
      }

      await api.post('/pools/join', { code });

      navigate('poolsList');

      toast.show({
        title: 'Você entrou no bolão com sucesso!',
        placement: 'top',
        bgColor: 'green.500'
      });
      
    } catch (err) {
      console.log(err);

      setIsLoading(false);

      if (err.response?.data?.message === 'Pool not found') {
        return toast.show({
          title: 'Bolão não encontrado',
          placement: 'top',
          bgColor: 'red.500'
        })
      }
      
      if (err.response?.data?.message === 'You already joined this pool!') {
        return toast.show({
          title: 'Você já está nesse bolão!',
          placement: 'top',
          bgColor: 'red.500'
        })
      }

      toast.show({
        title: 'Não foi possivel encontrar o bolão',
        placement: 'top',
        bgColor: 'red.500'
      })
    }
  }
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
          autoCapitalize='characters'
          onChangeText={setCode}
        />

        <Button 
          title='Buscar bolão'
          isLoading={isLoading}
          onPress={handleJoinPool}
        />
      </VStack>
    </VStack>
  )
}