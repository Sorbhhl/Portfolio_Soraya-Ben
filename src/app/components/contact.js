"use client";
import { Github, Linkedin, Mail} from "lucide-react";
import Link from "next/link";
import { Card } from "./card";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/soraya-ben-67566b1ab",
		label: "Linkedin",
		handle: "Soraya Ben",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:sorbhhl@gmail.com",
		label: "Email",
		handle: "sorbhhl@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/Sorbhhl",
		label: "Github",
		handle: "Sorbhhl",
	},
];

export default function ContactMe() {
	return (
		<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-16 z-0">
			{socials.map((s, index) => (
				<Card key={index}>
					<Link
						href={s.href}
						target="_blank"
						className="py-4 px-10 relative flex flex-col items-center gap-4 duration-700 group"
					>
						<span
							className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
							aria-hidden="true"
						/>
						<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
							{s.icon}
						</span>{" "}
						<div className="z-10 flex flex-col items-center">
							<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
								{s.handle}
							</span>
							<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
								{s.label}
							</span>
						</div>
					</Link>
				</Card>
			))}
		</div>
	);
}
