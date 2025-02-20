import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // BREVO_API_KEY: z.string().min(1),
    // RESEND_API_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_MAPBOX_TOKEN: z.string().min(1),
    NEXT_PUBLIC_WEGLOT_API: z.string().min(1),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
    NEXT_PUBLIC_WEGLOT_API: process.env.NEXT_PUBLIC_WEGLOT_API,
  },
});
