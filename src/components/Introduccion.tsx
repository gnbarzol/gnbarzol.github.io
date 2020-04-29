import React from 'react';
import '../assets/styles/Introduccion.css';
import { IIntroduction } from '../data/data';
import photo from "../assets/images/avatar.jpg"

interface IntroductionProps {
    data: IIntroduction;
}

const Introduccion = ({ data }: IntroductionProps) => {
    return (
        <>
            <article className="Introduction">
                <img className="Introduction-avatar" src={photo} alt="photoProfile" />
                <div className="Introduction-wrapper">
                    <h1 className="Introduction-name">{data.name}</h1>
                    <h2 className="Introduction-title">{data.position}</h2>
                    <p className="Introduction-description">{data.description}</p>
                    <span className="Introduction-location">
                        {data.location}
                    </span>
                </div>
            </article>
        </>
    );
}

export default Introduccion;
