export default ({ env }) => ({
  host: '127.0.0.1', // 强制 IPv4
  port: 1337,
  app: {
    keys: env.array('APP_KEYS'),
  },
});