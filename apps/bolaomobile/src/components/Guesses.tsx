import { useEffect, useState } from "react";
import { useToast, FlatList } from "native-base";

import { Game, GameProps } from "../components/Game";

import { api } from "../services/api";
import { Loading } from './Loading';
import { EmptyMyPoolList } from './EmptyMyPoolList';

interface Props {
  poolId: string;
  code: string;
}

export function Guesses({ poolId, code }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<GameProps[]>([]);
  const [firstTeamPoints, setFirstTeamPoints] = useState("");
  const [secondTeamPoints, setSecondTeamPoints] = useState("");

  const FlatListRenderItem = ({ item }) => (
    <Game
      data={item}
      setFirstTeamPoints={setFirstTeamPoints}
      setSecondTeamPoints={setSecondTeamPoints}
      onGuessConfirm={() => handleGuessConfirm(item.id)}
    />
  );

  const toast = useToast();

  async function fetchGames() {
    try {
      setIsLoading(true);

      const response = await api.get(`/pools/${poolId}/game`);

      setGames(response.data.games);
    } catch (err) {
      console.error(err);

      toast.show({
        title: "Não foi possivel carregar os palpites",
        placement: "top",
        bgColor: "red.500",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGuessConfirm(gameId: string) {
    try {
      if (!firstTeamPoints.trim() || !secondTeamPoints.trim()) {
        return toast.show({
          title: "Informe o placar do palpite",
          placement: "top",
          bgColor: "red.500",
        });
      }

      await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
        firstTeamPoints: Number(firstTeamPoints),
        secondTeamPoints: Number(secondTeamPoints)
      });

      toast.show({
        title: "Palpite realizado com sucesso! 🎉🥳",
        placement: "top",
        bgColor: "green.500",
      });

      fetchGames();


    } catch (err) {
      console.error(err);

      toast.show({
        title: "Não foi possivel carregar os palpites",
        placement: "top",
        bgColor: "red.500",
      });
    }
  }

  useEffect(() => {
    fetchGames();
  }, [poolId]);

  if (isLoading) {
    return <Loading />
  }

  return (
    <FlatList
      data={games}
      keyExtractor={(item) => item.id}
      renderItem={FlatListRenderItem}
      ListEmptyComponent={() => <EmptyMyPoolList code={code} />}
    />
  );
}
