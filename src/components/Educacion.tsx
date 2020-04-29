import React from 'react';
import { ISchoolEntity } from "../data/data";
import '../assets/styles/Educacion.css';

interface EducationProps {
    data: ISchoolEntity[];
}

const Educacion = ({ data }: EducationProps) => {
    return(
        <>
            <h3>Educación</h3>
            <article className="Education">
                {
                    data.map((entity, index) => (
                        <div key={`entity_${index}`} className="Education-entity">
                            <div className="Education-entity-place">
                                <img src={entity.logo} alt={entity.name} />
                                <h6 className="Education-entity-name">{entity.name}</h6>
                            </div>
                            <div className="Education-entity-details">
                                <span className="Education-entity-subject">{entity.title}</span>
                                <span className="Education-entity-duration">{entity.duration}</span>
                            </div>
                        </div>
                    ))
                }
            </article>
        </>
    );
}

export default Educacion;