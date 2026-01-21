export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env('DATABASE_SSL', false),
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
});