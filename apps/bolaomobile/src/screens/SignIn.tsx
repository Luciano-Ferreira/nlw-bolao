import { Text, Center, Icon } from 'native-base';
import { Button } from '../components/Button';
import { AntDesign } from '@expo/vector-icons';

import { useAuth } from '../hooks/useAuth';

import Logo from '../assets/logo.svg';


export function SignIn() {
  const { signIn, user } = useAuth();

  

  return (
    <Center flex={1} bgColor='gray.900' p='7'>
      <Logo width={212} height={40} />
      <Button 
        variant='secondary'
        leftIcon={<Icon as={AntDesign} name='google' color='white' size='md' />} 
        title='Entrar com Google' 
        mt={12}
        onPress={signIn}
      />
      <Text color='gray.500' textAlign='center' fontSize='sm' mt={4}>
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}
