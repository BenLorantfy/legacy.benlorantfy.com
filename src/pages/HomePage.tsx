import * as React from 'react';

/** components */
import { Spacer } from '../components/Spacer';
import { Section } from '../components/Section';
import { Page } from '../components/Page';
import { Header1 } from '../components/Header1';
import { Header2 } from '../components/Header2';
import { Header3 } from '../components/Header3';
import { formatDateRange } from '../components/DateRange';
import { PageColumn } from '../components/PageColumn';
import { Link } from '../components/Link';
import { useToday } from '../hooks/useToday';
import { Row } from '../components/Row';

/** icons */
import { GitHubIcon } from '../icons/GitHubIcon';
import { CodePenIcon } from '../icons/CodePenIcon';

import resume from "../resume.json";
import { PageContent } from '../components/PageContent';

export const HomePage: React.FC = (props) => {
  const today = useToday();
  
  return (
    <Page>
      <Row justifyContent="space-between">
        <Header1 text={resume.basics.name} />
        <div>
          <Row alginItems="center">
            <Spacer margin={{ right: "sm" }}>
              <GitHubIcon /> 
            </Spacer>
            <Link style={{ marginTop: "-6px" }} href="https://github.com/BenLorantfy">github.com/BenLorantfy</Link>
          </Row>
          <Row alginItems="center">
            <Spacer margin={{ right: "sm" }}>
              <CodePenIcon /> 
            </Spacer>
            <Link style={{ marginTop: "-6px" }} href="https://codepen.io/BenLorantfy">codepen.io/BenLorantfy</Link>
          </Row>
        </div>
      </Row>
      <PageContent>
        <PageColumn>
          <Header2>Experience</Header2>
          {resume.work.map((workItem, idx) => {
            return (
              <Spacer margin={{ bottom: "xl" }} key={idx}>
                <Header3
                  text={workItem.position}
                  // secondaryText={(
                  //   <formatDateRange
                  //     startDate={workItem.startDate}
                  //     endDate={workItem.endDate || today.toISOString()}
                  //     // showMonths={false}
                  //   />
                  // )}
                  secondaryText={
                    formatDateRange({ 
                      startDate: workItem.startDate,
                      endDate: workItem.endDate || today.toISOString(),
                      showMonths: false,
                    })
                  }
                  tertiaryText={workItem.company}
                  tags={workItem.tags}
                />
                <Section
                  summary={workItem.summary}
                  highlights={workItem.highlights}
                />
              </Spacer>
            )
          })}
        </PageColumn>

        <PageColumn>
          <Header2>Education</Header2>
          {resume.education.map((educationItem, idx) => {
            return (
              <Spacer margin={{ bottom: 'xl' }}>
                <Header3
                  key={idx}
                  text={`${educationItem.area} (${educationItem.studyType})`}
                  secondaryText={
                    formatDateRange({ 
                      startDate: educationItem.startDate,
                      endDate: educationItem.endDate || today.toISOString(),
                      showMonths: false,
                    })
                  }
                  tertiaryText={educationItem.institution}
                />
              </Spacer>
            )
          })}
          <Header2>Awards</Header2>
          {resume.awards.map((award, idx) => {
            return (
              <Spacer margin={{ bottom: 'xl' }}>
                <Header3
                  key={idx}
                  text={award.title}
                  secondaryText={award.date}
                />
                <Section
                  summary={award.summary}
                />
              </Spacer>
            )
          })}
          <Header2>Open Source</Header2>
          {resume.volunteer.map((openSourceProject, idx) => {
            return (
              <Spacer margin={{ bottom: 'md' }} key={idx}>
                <Header3
                  text={openSourceProject.organization}
                  tags={openSourceProject.tags}
                />
                <Section
                  website={openSourceProject.website}
                />
              </Spacer>
            )
          })}
        </PageColumn>
      </PageContent>
    </Page>
  )
}
