import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems.jsx'; 

const Work = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => project.category === item.name);
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (index) => {
        setItem({ name: projectsNav[index].name });
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((navItem, index) => (
                    <span
                        onClick={() => handleClick(index)}
                        className={`work__item ${active === index ? 'active-work' : ''}`}
                        key={index}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projects.map((project) => (
                    <WorkItems item={project} key={project.id} />
                ))}
            </div>
        </div>
    );
};

export default Work;
