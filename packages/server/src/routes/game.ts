import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { authenticate } from '../plugins/authenticate';

export async function gameRoutes(fastify: FastifyInstance) {
   fastify.get("/pools/:id/game",
    {
      onRequest: [authenticate]
    },
    async (req) => {
      const getPoolsParams = z.object({
        id: z.string(),
  
      });
      const { id } = getPoolsParams.parse(req.params)

      const games = await prisma.game.findMany({
        orderBy: {
          date: 'desc',
        },
        include: {
          guesses: {
            where: {
              participant: {
                userId: req.user.sub,
                poolId: id
              }
            }
          }
        }
      });

      return {
        // alterando o retorno para que retorne apenas o id do meu palpite ao inves de um array com apenas um palpite.
        // e removendo esse array de guesses
        games: games.map(game => {
          return {
            ...game,
            guess: game.guesses.length > 0 ? game.guesses[0] : null,
            guesses: undefined 
          }
        })
      }
  });
}