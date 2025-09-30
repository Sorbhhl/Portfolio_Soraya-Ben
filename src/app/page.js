import React from "react";
import 'tailwindcss/tailwind.css';
import ProjectsPage from "./components/projects_categories";
import ContactMe from "./components/contact";
import './globals.css'

export default function Home() {
  return (
    <>
		<div className="flex flex-col items-center justify-center bg-black py-8 md:py-20 lg:py-30">
			<h1 className="z-4 text-2xl text-white font-black duration-1000 sm:text-4xl md:text-6xl">
				Soraya Ben
			</h1>
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
