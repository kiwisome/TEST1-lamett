export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  if (client === "postgres") {
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString: env("DATABASE_URL"),
          ssl: env.bool("DATABASE_SSL", false),
        },
        pool: { min: 0, max: 10 },
      },
    };
  }

  // default: sqlite (本地开发)
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      useNullAsDefault: true,
    },
  };
};