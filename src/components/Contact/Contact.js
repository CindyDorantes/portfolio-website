import React from "react";

import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';
import { ContactGrid, HeaderThree, Form, UL, LI,  Input, TextArea, RedButton } from './ContactStyles';

const Contact = () => (
  <Section id="contact">
    <SectionDivider />
    <ContactGrid>
      <HeaderThree title>
        I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
      </HeaderThree>
      <Form action="https://formspree.io/f/mnqwrdak" method="post">
      <UL class="ul-form">
          <LI>
            <Input type="text" placeholder="Full name" minlength="2" maxlength="30" required
              id="input-name" name="user-name" />
          </LI>
          <LI>
            <Input type="email" placeholder="Email address" required id="input-email"
              name="user-email" />
          </LI>
          <LI>
            <TextArea maxlength="500" required id="input-comment"
              name="user-comment">Enter message here</TextArea>
          </LI>
        </UL>
        <small class="error-msg"></small>
        <RedButton type="submit">
          Get in touch
        </RedButton>
      </Form>
    </ContactGrid>
  </Section>
);

export default Contact;
