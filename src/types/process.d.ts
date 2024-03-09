declare namespace NodeJS {
	interface ProcessEnv {
		EMAIL_USERNAME: string;
		EMAIL_PASSWORD: string;

		NEXT_PUBLIC_EMAIL: string;
		NEXT_PUBLIC_PHONE: string;

		VERCEL: string;
		VERCEL_ENV: string;
		VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
		VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
		VERCEL_GIT_COMMIT_MESSAGE: string;
		VERCEL_GIT_COMMIT_REF: string;
		VERCEL_GIT_COMMIT_SHA: string;
		VERCEL_GIT_PREVIOUS_SHA: string;
		VERCEL_GIT_PROVIDER: string;
		VERCEL_GIT_PULL_REQUEST_ID: string;
		VERCEL_GIT_REPO_ID: string;
		VERCEL_GIT_REPO_OWNER: string;
		VERCEL_GIT_REPO_SLUG: string;
		VERCEL_URL: string;
	}
}
