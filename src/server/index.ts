import { publicProcedure, router } from "./trpc";


export const appRouter = router({
  hello: publicProcedure
    .query(() => {
      return "world";
    })
});

export type AppRouter = typeof appRouter;