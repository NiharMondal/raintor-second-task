import { cn } from "@/lib/cn";
import React from "react";

type ContainerProps = {
	children: Readonly<React.ReactNode>;
	className?: string;
};

export default function Container({ children, className }: ContainerProps) {
	return <div className={cn("custom_container", className)}>{children}</div>;
}
