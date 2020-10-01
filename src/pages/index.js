import React from 'react';

import Intro from '../components/Intro';
import About from '../components/About';
import Skill from '../components/Skill';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Transition from '../components/Transition';
import Startup from '../components/Startup';
import Services from '../components/Stack/Stacks';
import Testimonials from '../components/Testimonials';

import Idea from '../../assets/idea.svg';
import System from '../../assets/innovation.svg';
import Problem from '../../assets/workflow.svg';
import Organize from '../../assets/man.svg';

import SEO from '../components/seo.js';

const skillsData = [
  {
    image: <Idea />,
    title: 'An Entrepreneurial Mind',
    body:
      'I leverage my experience in business with all of my projects. I understand your challenges and work my tail off to help you solve them.',
  },
  {
    image: <System />,
    title: 'Systems Thinking',
    body: `I'm good at thinking abstractly and putting together systems with many moving parts.`,
  },
  {
    image: <Organize />,
    title: 'Communicating',
    body: `I can explain things clearly, in plain English, with no tech jargon.`,
  },
  {
    image: <Problem />,
    title: 'Organizing',
    body: `I can self-manage, work to deadlines, organize projects, and present well-structured and complete deliverables.`,
  },
];

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Intro />
    <About />
    <Skill />
    <Services />
    <Work skillsData={skillsData} />
    <Transition />
    <Projects />
    <Startup />
  </>
);

export default IndexPage;
