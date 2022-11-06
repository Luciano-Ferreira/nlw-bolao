import { useEffect, useState } from 'react';
import { useToast, FlatList } from 'native-base';

import { Game, GameProps } from '../components/Game';

import { api } from '../services/api';


interface Props {
  poolId: string;
}

export function Guesses({ poolId }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<GameProps[]>([]);
  const [firstTeamPoints, setFirstTeamPoints] = useState('');
  const [secondTeamPoints, setSecondTeamPoints] = useState('');


  const FlatListRenderItem = ({item}) => (
    <Game 
      data={item} 
      setFirstTeamPoints={setFirstTeamPoints} 
      setSecondTeamPoints={setSecondTeamPoints}
      onGuessConfirm={() => {}}
    />
  )

  const toast = useToast();

  async function fetchGames() {
    try {
      setIsLoading(true);

      const response = await api.get(`/pools/${poolId}/game`);

      setGames(response.data.games);

    } catch (err) {
      console.log(err);

      toast.show({
        title: 'Não foi possivel carregar os palpites',
        placement: 'top',
        bgColor: 'red.500'
      })
    } finally {
      setIsLoading(false)
    }
  }

 

  useEffect(() => {
    fetchGames();
  }, [poolId]);

  return (
    <FlatList 
      data={games}
      keyExtractor={item => item.id}
      renderItem={FlatListRenderItem}
    />
  );
}
