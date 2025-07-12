import React from "react";
import SkillCard from '../components/SkillCard';

const Homepage = () => {
    return (
        <>
            <SkillCard
                image="https://ui-avatars.com/api/?name=Rajan&background=0D8ABC&color=fff"
                name="Rajan Sharma"
                offered="React, UI Design"
                wanted="Node.js, MongoDB"
                rating={4.5}
            />
            <SkillCard
                image="https://ui-avatars.com/api/?name=Priya&background=8e44ad&color=fff"
                name="Priya Mehta"
                offered="Python, ML"
                wanted="Web Dev"
                rating={4.8}
            />
        </>
    )
}

export default Homepage;