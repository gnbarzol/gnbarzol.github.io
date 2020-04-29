import React from 'react';
import { ISkill } from "../data/data";
import '../assets/styles/Habilidades.css';

interface SkillsProps {
    data: ISkill[];
    title: string;
}

const Habilidades = ({ data, title }: SkillsProps) => {
    return (
        <>
            <h3>{title}</h3>
            <article className="Skills">
                {data.map((skill, index) => (
                    <div className="Skills-skill" key={`skill_${index}`} >
                        <img src={skill.icon} alt="iconSkill" />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </article>
        </>
    );
}

export default Habilidades;