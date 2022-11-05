import { useState } from 'react';
import { VStack, Heading, Text, Toast } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import Logo from '../assets/logo.svg';
import { useToast } from 'native-base'
import { api } from '../services/api';

export function NewPool() {
  
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast()

  async function handlePoolCreate() {
    if (!title.trim()) {
      return toast.show({
        title: 'Informe um nome para o seu bolão!',
        placement: 'top',
        bgColor: 'red.500'
      }) 
    }

    try {
      setIsLoading(true);

      await api.post('/pools/', { title });

      toast.show({
        title: 'Bolão criado com sucesso!! ✅',
        placement: 'top',
        bgColor: 'green.500'
      });

      setTitle('')


    } catch (err) {
      console.log(err);

      toast.show({
        title: 'Não foi possivel criar o bolão!',
        placement: 'top',
        bgColor: 'red.500'
      });
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <VStack bgColor='gray.900' height='full'>
      <Header title='Criar novo bolão' />

      <VStack mt={8} mx={5} alignItems='center' bgColor='black.900'>
        <Logo />

        <Heading fontFamily='heading' color='white' fontSize='xl' my={8} textAlign='center'>
          Crie seu próprio bolão da copa {'\n'}
          e compartilhe entre amigos!
        </Heading>

        <Input
          mb={2}
          placeholder='Qual o nome do seu bolão'
          onChangeText={setTitle}
          value={title}
        />

        <Button 
          title='Criar meu bolão'
          onPress={handlePoolCreate}
          isLoading={isLoading}

        />

        <Text color='gray.200' fontSize='sm' textAlign='center' px={10} mt={4}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}