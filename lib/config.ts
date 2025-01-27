// The `config` object contains environment-specific configuration settings for the application. It includes the following properties:

// - `apiEndpoint`: The URL endpoint for the application's API.
// - `imagekit`: An object containing configuration settings for the ImageKit service, including the public and private keys, and the URL endpoint.
// - `databaseUrl`: The URL for the application's database.
const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    imagekit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
    },
    databaseUrl: process.env.DATABASE_URL,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_REST_URL!,
      redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!,
      qstashUrl: process.env.QSTASH_URL!,
      qstashToken: process.env.QSTASH_TOKEN!,
    },
    emailjs: {
      signInServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_SIGNIN!,
      signInTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SIGNIN!,
      userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
      signUpServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_SIGNUP!,
      signUpTemplateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_SIGNUP!,
    },
  },
};

export default config;
