"use client"
import React from "react";
import {Card, Typography} from "@material-tailwind/react";
import Modal from "./modal";
   
export function CardProj(props) {
return (
    <Card className={props.image === "" ?
    "mb-8 w-full justify-center" :
    "mb-8 w-full justify-center flex flex-col md:flex-row lg:flex-row overflow-hidden"}>
        <div className={props.image === "" ?
        "py-4 px-6" :
        "py-4 px-6 md:w-1/2 lg:w-1/2"}
        >
            <Typography variant="h6" color="blue-gray" className="mb-2">
            {props.title}
            </Typography>
            <Typography color="blue-gray" className="font-bold text-xs uppercase mb-2 text-slate-400">
            {props.category}
            </Typography>
            <Typography>
            {props.description}
            </Typography>
            <Modal projlink={props.projlink} modalType={props.modalType} title={props.title} category={props.category}></Modal>
        </div>
        <div className={props.image === "" ? "hidden" : "max-h-36 md:w-1/2 lg:w-1/2 md:max-h-64 md:h-auto m-auto"}>
            <img
            className="object-cover m-auto"
            src={props.image}
            alt="card-image"
            />
        </div>
    </Card>
);
}