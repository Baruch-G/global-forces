import { clerkClient } from "@clerk/nextjs";
import TrainingList from "~/pages/training";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const trainingRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const trainingList = await ctx.prisma.training.findMany();

    const users = await clerkClient.users.getUserList({
      userId: trainingList.map((trn) => trn.authorId),
    });

    return trainingList.map((trn) => ({
      ...trn,
      autor: users.find((user) => user.id === trn.authorId),
    }));
  }),
});
