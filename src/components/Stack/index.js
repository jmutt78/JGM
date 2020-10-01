import React from "react";

import Front from "../../../assets/coding.svg";
import Server from "../../../assets/ui.svg";
import Data from "../../../assets/database.svg";
import Cloud from "../../../assets/cloud-computing.svg";

import {
  Root,
  Container,
  Column,
  SkillsContainer2,
  SkillsColumn
} from "./styles";

const Work = () => {
  const skillsData = [
    {
      image: <Front />,
      title: "FRONT END",
      body: ["React", "Redux", "Apollo", "SSR"]
    },
    {
      image: <Server />,
      title: "SERVER",
      body: ["NodeJS", "Express", "GraphQl", "PHP"]
    },
    {
      image: <Data />,
      title: "DATABASE",
      body: ["PostgreSQL", "mySQL", "MongoDB", "Cassandra"]
    },
    {
      image: <Cloud />,
      title: "DEPLOYMENT",
      body: ["Netlify", "AWS", "Docker", "Git"]
    }
  ];

  return (
    <Root>
      <SkillsContainer2 style={{ width: "100%", paddingTop: "30px" }}>
        {skillsData.map(({ image, title, body }) => (
          <SkillsColumn key={title}>
            {image}
            <h4>{title}</h4>
            <ul>
              {body.map(body => {
                return <li>{body}</li>;
              })}
            </ul>
          </SkillsColumn>
        ))}
      </SkillsContainer2>
    </Root>
  );
};

export default Work;
