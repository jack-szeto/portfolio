"use client";

import { useEffect, useState } from "react";

export const useCountdown = (ttl: number) => {
	const [isOnCooldown, setIsOnCooldown] = useState(false);
	const [countdown, setCountdown] = useState(0);

	const startCountdown = () => {
		if (ttl) {
			setIsOnCooldown(true);
			setCountdown(ttl / 1000); // Convert ttl from milliseconds to seconds
		}
	};

	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (isOnCooldown && ttl) {
			timer = setInterval(() => {
				setCountdown((prevCountdown) => prevCountdown - 1);
			}, 1000);
			setTimeout(() => {
				setIsOnCooldown(false);
				clearInterval(timer);
			}, ttl);
		}
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	}, [isOnCooldown, ttl]);

	return { isOnCooldown, countdown, startCountdown };
};
