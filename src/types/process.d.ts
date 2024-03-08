declare namespace NodeJS {
  interface ProcessEnv {
    EMAIL_USERNAME: string;
    EMAIL_PASSWORD: string;

    NEXT_PUBLIC_EMAIL: string;
    NEXT_PUBLIC_PHONE: string;
  }
}