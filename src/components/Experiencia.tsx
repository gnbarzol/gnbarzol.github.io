import React from 'react';
import { IWork } from "../data/data";
import '../assets/styles/Experiencia.css';
interface ExperienceProps {
    data: IWork[];
}

const Experiencia = ({ data }: ExperienceProps) => {
    return (
        <>
            <h3>Experience</h3>
            <article className="Experience">
                {
                    data.map((work, index) => (
                        <div key={`work_${index}`} className="Experience-work">
                            <div className="Experience-work-title">
                                <h4 className="Experience-work-position">{work.title}</h4>
                                <span className="Experience-work-duration">{work.duration}</span>
                            </div>
                            <div className="Experience-work-place">
                                <img src={work.logo} alt={work.company} />
                                <div>
                                    <h6 className="Experience-work-company">{work.company}</h6>
                                    <span className="Experience-work-location">{work.location}</span>
                                </div>
                            </div>
 
                            <ul className="Experience-work-description">
                                {work.description.map((point, index) => (
                                    <li key={`point_${index}`} >{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </article>
        </>
    );
};

export default Experiencia;
