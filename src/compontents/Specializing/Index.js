import React from 'react'
import MediumHeading from '../Hero/UI/MediumHeading';
import SmallHeading from '../Hero/UI/SmallHeading';
import Card from '../../compontents/Hero/UI/Card/index'
import Skill from '../Hero/UI/Skill/Skill'
import { Colors } from '../../Style';


const Specializing = (props) => {
    const skills = [ {
        skillName: 'HTML5/CSS3',
        desc:'Hands on experience in Html/Css',
        textColor: Colors.primaryColor,
        pathColor:'#f2a154'
    } ]

    return (
        <div className="container">

            <Card style={{ padding:" 50px"}}>
            <SmallHeading text="What I do" />
           <MediumHeading  text="Specializing"/>

           <div>
               

               <Skill

                skillName="HTML/CSS"
                desc={`Hands on experience in Html5/CSS3`}
                value="70"
                textColor={Colors.primaryColor}
                pathColor="#FF7800"

               
               />

           </div>

            </Card>

            
            
             </div>
    )
}

export default Specializing;
