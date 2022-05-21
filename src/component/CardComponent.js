import React from "react";
import Image from './ImageComponent'
import About from './AboutComponent';
import Skill from './SkillSetComponent';
import Name from './NameComponent';
import Footer from "./footerComponent";


export default function Card(){
    return (
        <div className='card'>
        <Image />
        <Name />
        <About />
        <Skill />
        <Footer />
      </div>
    )
}