import { repositoryRouter } from "./routers/repository";
import { pullRequestRouter } from "./routers/pull-request";
import { createCallerFactory, createTRPCRouter, publicProcedure } from "./trpc";

export const appRouter = createTRPCRouter({
  health: publicProcedure.query(() => {
    return { status: "ok", timestamp: Date.now() };
  }),
  repository : repositoryRouter,
  pullRequest: pullRequestRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);