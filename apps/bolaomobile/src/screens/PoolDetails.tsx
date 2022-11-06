import { useEffect, useState } from 'react';

import { Toast, useToast, VStack } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { PoolCard, PoolCardProps } from '../components/PoolCard';

import { api } from '../services/api';
import { EmptyMyPoolList } from '../components/EmptyMyPoolList';
import { PoolHeader } from '../components/PoolHeader';

interface RouteParams {
  id: string;
}

export function PoolDetails() {
  const route = useRoute();

  const [isLoading, setIsLoading] = useState(true);
  const [poolDetails, setPoolDetails] = useState<PoolCardProps>({} as PoolCardProps);

  const toast = useToast();

  const { id } = route.params as RouteParams;

  async function fetchPoolDetails() {
    try {
      setIsLoading(true);

      const response = await api.get(`/pool/${id}`);

      setPoolDetails(response.data);



    } catch (err) {
      console.log(err)

      toast.show({
        title: 'Não foi possivel carregar os detalhes desse bolão',
        placement: 'top',
        bgColor: 'red.500'
      })
      
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPoolDetails();
  }, [id]);

  if (isLoading) {
    return (
      <Loading />
    )
  }

  return (
    <VStack flex={1} bgColor='gray.900'>
      <Header 
        title={poolDetails.owner.name} 
        showBackButton
        showShareButton
      />

      {
        poolDetails._count.participants > 0 ? (
          <VStack px={5} flex={1}>
            <PoolHeader data={poolDetails} key={poolDetails.id}/>
          </VStack>
        ) : (
          <EmptyMyPoolList code={poolDetails.code} />
        )
      }
    </VStack>
  )
}