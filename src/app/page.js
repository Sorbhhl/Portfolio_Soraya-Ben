import React from "react";
import 'tailwindcss/tailwind.css';
import ProjectsPage from "./components/projects_categories";
import ContactMe from "./components/contact";
import './globals.css'

//export default MyApp;

export default function Home() {
  return (
    <>
		<div className="flex flex-col items-center justify-center w-screen bg-black py-8 md:py-20 lg:py-30">
			<div className="hidden w-full animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="z-4 text-2xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
				Soraya Ben
			</h1>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="mt-4 text-center animate-fade-in">
				<h2 className="text-md text-zinc-500">
					Frontend Developer & UX/UI Designer
					<br />
					Passionate about crafting digital experiences that blend code and design, while embracing continuous growth.
				</h2>
				<h2 className="text-lg text-zinc-400 mt-2">
					Responsive portfolio made with React, Tailwind and Next JS
				</h2>
			</div>
			<ProjectsPage></ProjectsPage>
			<ContactMe></ContactMe>
		</div>
    </>
  )
}
