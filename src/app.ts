import {
  config,
  logger,
  createServer,
  connectToDb,
  disconnectFromDb,
} from "./utils";

const signals = ["SIGINT", "SIGTERM", "SIGHUP"] as const;
async function gracefulShutdown({
  signal,
  server,
}: {
  signal: typeof signals[number];
  server: Awaited<ReturnType<typeof createServer>>;
}) {
  logger.info(`Got signal ${signal}. Good bye`);
  await server.close();
  await disconnectFromDb();
  process.exit(0);
}

async function startServer() {
  const server = await createServer();
  server.listen({
    port: config.PORT,
    host: config.HOST,
  });

  await connectToDb();
  logger.info(`http://localhost:${config.PORT}`);
  for (let i = 0; i < signals.length; i++) {
    process.on(signals[i], () =>
      gracefulShutdown({
        signal: signals[i],
        server,
      })
    );
  }
}

startServer();
