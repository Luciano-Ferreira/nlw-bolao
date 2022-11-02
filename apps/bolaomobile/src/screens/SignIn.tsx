import { Text, Center, Icon } from 'native-base';
import { Button } from '../components/Button';
import Logo from '../assets/logo.svg';
import { AntDesign } from '@expo/vector-icons';


export function SignIn() {
  return (
    <Center flex={1} bgColor='gray.900' p='7'>
      <Logo width={212} height={40} />
      <Button 
        variant='secondary'
        leftIcon={<Icon as={AntDesign} name='google' color='white' size='md' />} 
        title='Entrar com Google' 
        mt={12}
      />
      <Text color='gray.500' textAlign='center' fontSize='md' mt={4}>
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  )
}
