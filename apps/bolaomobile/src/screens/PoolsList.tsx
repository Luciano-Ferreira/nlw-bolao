import { VStack, Icon } from 'native-base';

import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button';
import { Header } from '../components/Header';

export function PoolsList() {
  const navigation = useNavigation();

  const whatsRoute = () => navigation.navigate('findPool');

  const lupe = <Icon as={Octicons} name='search' color='black' size='md' />

  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header title='Meus bolões' />
      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor='gray.600' pb={4} mb={4}>
        <Button 
          title='Buscar Bolão por código'
          leftIcon={lupe}
          onPress={whatsRoute}
        />
      </VStack>
    </VStack>
  )
}