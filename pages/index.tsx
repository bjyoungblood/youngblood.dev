import React from 'react';
import {
  makeStyles,
  Chip,
  ChipProps,
  Container,
  Typography,
} from '@material-ui/core';

import Email from '@material-ui/icons/AlternateEmail';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Phone from '@material-ui/icons/Phone';

import { Hero } from '../src/Hero';
import { Section } from '../src/Section';
import { ExperienceBlock } from '../src/ExperienceBlock';

const ContactChip: React.FC<ChipProps<'a'>> = (props) => (
  <Chip clickable component="a" color="secondary" {...props} />
);

const useStyles = makeStyles((theme) => ({
  summary: {
    marginTop: theme.spacing(4),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Hero title="Ben Youngblood" subtitle="Software Engineer">
        <ContactChip
          icon={<Phone />}
          href="tel:+13037206704"
          label="(303) 720-6704"
        />
        <ContactChip
          icon={<Email />}
          href="mailto:ben@youngblood.dev"
          label="ben@youngblood.dev"
        />
        <ContactChip
          icon={<GitHub />}
          href="https://github.com/bjyoungblood"
          label="bjyoungblood"
        />
        <ContactChip
          icon={<LinkedIn />}
          href="https://www.linkedin.com/in/benyoungblood/"
          label="LinkedIn"
        />
      </Hero>
      <Container maxWidth="md">
        <div className={classes.summary}>
          <Typography variant="h6" component={'span'} color="primary">
            Self-motivated, detail-oriented software engineer with a passion for
            quality, usability, and reliability.
          </Typography>
          <Typography>
            Extensive experience with designing, building, testing, and
            deploying web and mobile SaaS products. Non-technical strengths
            include business and team development, as well as excellent written
            and verbal communication skills.
          </Typography>
        </div>
        <Section title="Experience">
          <ExperienceBlock
            organization="SmartRent"
            position="Sr. Software Engineer"
            startDate={'April 2019'}
            endDate={'Current'}
          />
          <ExperienceBlock
            organization="Yellow Express"
            position="Global CTO"
            startDate={'September 2019'}
            endDate={'March 2020'}
            highlights={[
              `Created a global business and technology strategy to expand a small Sydney-based transportation and logistics company to the United States and the rest of Australia`,
              `Rapidly developed and launched a technology platform including custom web and native mobile apps to facilitate on-demand bookings, appointments, job tracking, customer invoicing, and driver payments`,
              `Opened the first US-based Yellow Express branch in Denver, Colorado, reaching branch-level profitability within 90 days after launch`,
            ]}
          />
          <ExperienceBlock
            organization="BodeTree"
            position="Chief Technology Officer"
            startDate={'January 2016'}
            endDate={'November 2019'}
            highlights={[
              `Designed and developed a custom software suite to provide small businesses and franchises with solutions for financial management, business development, and compliance and risk management`,
              `Integrated with major US banks to provide enterprise-class financial analytics tools to small businesses`,
            ]}
          />
          <ExperienceBlock
            organization="Colony American Homes"
            position="Engineering Manager"
            startDate={'July 2014'}
            endDate={'January 2016'}
            highlights={[
              `Developed custom ETL and reporting tools, including the industry's fastest solution for extracting data from Yardi Voyager, enabling key reports for managers and executives to be generated in real-time`,
              `Built custom online rental application with a focus on accessibility and ease of use, resulting in a 30% increase in application completion rate`,
              `Oversaw development of an IoT-based self-showing program to enable qualified prospective residents to tour a property without requiring a rental agent to be present`,
            ]}
          />
          <ExperienceBlock
            organization="Synapse Studios"
            position="Senior Developer"
            startDate={'January 2013'}
            endDate={'June 2014'}
            highlights={[
              `Engaged directly with clients to produce top-quality software within time and budget constraints`,
              `Implemented industry best practices such as unit testing, continuous integration and deployment, and SOLID engineering principles`,
              `Mentored team members with a focus on skills and career development`,
            ]}
          />
        </Section>
        <Section title="Education">
          <ExperienceBlock
            organization="University of Arizona"
            position="B.S.B.A in Management Information Systems"
            startDate={'August 2008'}
            endDate={'May 2012'}
            highlights={[
              `Minor in Computer Science`,
              <>
                GPA: 3.72, <em>magna cum laude</em>
              </>,
            ]}
          />
        </Section>
      </Container>
    </>
  );
};

export default Home;
