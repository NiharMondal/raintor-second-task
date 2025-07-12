import React from "react";
import Container from "./container";
import Link from "next/link";
import Button from "../ui/button";

export default function Navbar() {
	return (
		<nav className="h-20 border border-primary/20">
			<Container className="h-full flex items-center justify-between">
				{/** logo */}
				<div className="font-mono text-primary">Logo</div>
				<ul className="flex items-center gap-x-4 font-mono text-sm text-accent">
					<li>
						<Link href={"/"}>First Task</Link>
					</li>
					<li>
						<Link href={"/task-two"}>Second Task</Link>
					</li>
				</ul>
				<div className="flex items-center gap-x-4">
					<Button variant="primary">Login</Button>
				</div>
			</Container>
		</nav>
	);
}
