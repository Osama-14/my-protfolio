import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const Skill = (props) => {
  return (
    <div>
      <CircularProgressbar
        value={props.value}
        text={`${props.value}%`}
        styles={buildStyles({
          textColor: props.textColor,
          pathColor: props.pathColor,
        })}
      />
        <div>
            <p> {props.skillName}</p>
            <p> {props.desc}</p>

        </div>

    </div>


  );
};

export default Skill;
