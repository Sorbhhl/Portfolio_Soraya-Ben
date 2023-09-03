import React from "react";
import { CardProj } from "./card_project";
import dataProject from "./data_projects.json" assert {type:"json"}

export default function DisplayProj(props){
    return(
        <>
        <ul>
            {props.category === 'Front end' ? (
                dataProject.projectsFrontEnd.map((item) => (
                    <CardProj
                        key={item.name}
                        title={item.name}
                        category={props.category}
                        modalType={item.modalType}
                        image={item.image}
                        description={item.description}
                        projlink={item.projlink}
                    />
                ))) : props.category === 'Animation' ? (
                    dataProject.projectsAnimation.map((item) => (
                        <CardProj
                            key={item.name}
                            title={item.name}
                            category={props.category}
                            modalType={item.modalType}
                            image={item.image}
                            description={item.description}
                            projlink={item.projlink}
                        />
                    ))) :(
                    dataProject.projectsGraphicDesign.map((item) => (
                        <CardProj
                            key={item.name}
                            title={item.name}
                            category={props.category}
                            modalType={item.modalType}
                            image={item.image}
                            description={item.description}
                            projlink={item.projlink}
                        />
                    )))
                }
            </ul>
        </>
    )
}