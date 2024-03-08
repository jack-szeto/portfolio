import { NextRequest, NextResponse } from "next/server";
import rateLimit from "./lib/rate-limit";

const ratelimit = rateLimit({
	uniqueTokenPerInterval: 500, // 500 requests per interval
	interval: 60000, // 1 minute by default
});

// Define which routes you want to rate limit
export const config = {
	matcher: "/",
};

export default async function middleware(request: NextRequest) {
	const response = NextResponse.next({
		request: {},
	});

	try {
		if (request.method === "POST") {
			await ratelimit.check(
				response,
				!!request.ip ? 1 : 10,
				`${request.ip ?? "CACHE_TOKEN"}`
			); // 10 requests per minute or 1 request per minute if has IP
		}
		return response;
	} catch (error) {
		return new Response("Rate limit exceeded", { status: 429 });
	}
}
