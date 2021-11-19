import React from 'react'
import MediumHeading from '../Hero/UI/MediumHeading';
import SmallHeading from '../Hero/UI/SmallHeading';
import Card from '../../compontents/Hero/UI/Card/index'
import Skill from '../Hero/UI/Skill/Skill'


const Specializing = (props) => {
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
                textColor="red"
                pathColor="green"

               
               />

           </div>

            </Card>

            
            
             </div>
    )
}

export default Specializing;
