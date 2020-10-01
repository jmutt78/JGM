import React from "react";

import ContactModal from "./ContactModal";
import Calendly from "../Calendly";

import DocuSite from "../../../assets/docusite.svg";
import Entra from "../../../assets/entra.svg";

import {
  Root,
  StartupContainer,
  StartupColumn,
  Container,
  Column
} from "./styles";

const Startup = () => {
  return (
    <Root>
      <Container>
        <Column>
          <h2>Interested in working together? </h2>
          <ContactModal buttonLabel=" LETS CHAT">
            <Calendly />
          </ContactModal>
        </Column>
      </Container>
    </Root>
  );
};

export default Startup;
