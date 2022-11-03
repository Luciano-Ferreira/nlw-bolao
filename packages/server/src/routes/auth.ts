import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';

export async  function authRoutes(fastify: FastifyInstance) {
   fastify.post('/auth/count', async (req, rep) => {
    const count = 'await prisma.auth.count();'
    return { count };
  });
}