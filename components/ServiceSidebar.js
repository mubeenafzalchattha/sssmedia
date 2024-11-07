import React from 'react';
import Link from 'next/link';

const ServiceSidebar = ({services, ActiveService, setActiveService}) => {

    const handleActiveService = (service) => {
        setActiveService(service);
    }

    return (
        <div className="sidebar__widget sidebar__widget-2">
            <div className="sidebar__widget-title">
                <h3>Services</h3>
            </div>
            <div className="sidebar__widget-link">
                <ul>
                    {services?.map(service => (
                        <li key={service.name}>
                            <p 
                                onClick={() => handleActiveService(service.name)}
                                style={ActiveService === service.name ? { color: '#7432ff' } : { cursor: 'pointer'}}
                            >
                                <a>{service.title}</a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceSidebar;

