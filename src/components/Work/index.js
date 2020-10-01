import React from "react";

import ContactModal from "./ContactModal";
import Calendly from "../Calendly";

import Idea from "../../../assets/idea.svg";
import System from "../../../assets/innovation.svg";
import Problem from "../../../assets/workflow.svg";
import Organize from "../../../assets/man.svg";

import {
  Root,
  Container,
  Column,
  SkillsContainer2,
  SkillsColumn
} from "./styles";

const Work = ({ skillsData }) => {
  return (
    <Root>
      <Container>
        <Column>
          <h2>My Approach</h2>
          <h3>
            I help my clients make their ideas a reality. What to chat?{"  "}
            <ContactModal buttonLabel=" Contact Me">
              <Calendly />
            </ContactModal>
          </h3>
        </Column>
      </Container>
      <SkillsContainer2 style={{ width: "80%", paddingTop: "30px" }}>
        {skillsData.map(({ image, title, body }) => (
          <SkillsColumn key={title}>
            {image}
            <h4>{title}</h4>
            <p>{body}</p>
          </SkillsColumn>
        ))}
      </SkillsContainer2>
    </Root>
  );
};

export default Work;
