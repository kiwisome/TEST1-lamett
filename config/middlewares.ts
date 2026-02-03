export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',

  // ✅ 必须保留 favicon middleware，否则 Strapi 会报 Missing required middlewares
  {
    name: 'strapi::favicon',
    config: {
      // ✅ 最稳：相对路径（不要以 / 开头）
      path: './public/favicon.ico',
    },
  },

  'strapi::public',
];