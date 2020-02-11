import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state= {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: "Lorem ipsum dolor sit amet veniam, quis nostrud exercitation",
            },
            {
                icon: <FaHiking />,
                title: "Endless hikings",
                info: "Lorem ipsum dolor sit amet veniam, quis nostrud exercitation",
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle",
                info: "Lorem ipsum dolor sit amet veniam, quis nostrud exercitation",
            },
            {
                icon: <FaBeer />,
                title: "Strongest beers",
                info: "Lorem ipsum dolor sit amet veniam, quis nostrud exercitation",
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>

    
            </section>
        )
    }
}
