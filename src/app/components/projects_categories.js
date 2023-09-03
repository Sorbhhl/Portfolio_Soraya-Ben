"use client"
import React from "react";
import {Tabs,TabsHeader,TabsBody,Tab,TabPanel } from "@material-tailwind/react";
import DisplayProj from "./display_projects";


export default async function ProjectsPage() {
	return (
		<>
		<div className="relative w-full py-8 px-6 md:px-12 lg:px-16">
			<div className="mb-2">
				<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
					Projects
				</h2>
				<p className="mt-4 text-zinc-400">
					Some of the projects are from work and some are on my own time.
				</p>
			</div>
			<Tabs value="Front End development" className="md:flex lg:flex">
				<TabsHeader className="flex flex-col md:w-80 lg:w-96 z-0 mb-4">
					<Tab value="Front End development">
						<h2 className="text-lg font-medium mb-2 text-gray-500">Front End development</h2>
					</Tab>
					<Tab value="Animation">
						<h2 className="text-lg font-medium mb-2 text-gray-500">Animation</h2>
					</Tab>
					<Tab value="Graphic design">
						<h2 className="text-lg font-medium mb-2 text-gray-500">Graphic design</h2>
					</Tab>
				</TabsHeader>
				<TabsBody>
					<TabPanel value="Front End development" className="px-4 py-0">
						<DisplayProj category={"Front end"}></DisplayProj>
					</TabPanel>
					<TabPanel value="Animation" className="px-4 py-0">
						<DisplayProj category={"Animation"}></DisplayProj>
					</TabPanel>
					<TabPanel value="Graphic design" className="px-4 py-0">
						<DisplayProj category={"Graphic design"}></DisplayProj>
					</TabPanel>
				</TabsBody>
			</Tabs>
		</div>
		</>
	);
}
