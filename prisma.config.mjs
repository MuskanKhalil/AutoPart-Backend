import { defineConfig } from '@prisma/internals';

export default defineConfig({
  datasource: {
    db: {
      provider: 'mongodb',
      url: process.env.DATABASE_URL,
    },
  },
});
