import z from 'zod';

const ENV = z
  .object({
    VITE_API_URL: z.string().default('http://localhost:3000'),
  })
  .parse(import.meta.env);

export default ENV;
