import { cn } from "@/lib/cn";
import React from "react";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
	variant?: "primary" | "secondary";
};
export default function Button({
	children,
	variant,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={cn(
				className,
				variant,
				"px-4 py-2 rounded-md cursor-pointer inline-flex gap-2"
			)}
		>
			{children}
		</button>
	);
}
