import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import './style.css'

const Skill = (props) => {
  return (
    <div className="flexRow align-center">
        <div className="skillContainer"> 
        <CircularProgressbar
        value={props.value}
        text={`${props.value}%`}
        styles={buildStyles({
          textColor: props.textColor,
          pathColor: props.pathColor,
        })}
      />

        </div>

     
        <div className="mlr-10">
            <p className="font-16 bold-500 textColor mtb-10"> {props.skillName}</p>
            <p className="font-16 bold-500 grey mtb-10"> {props.desc}</p>

        </div>

    </div>


  );
};

export default Skill;
