import React from 'react';
import { FaNetworkWired , FaCheck} from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Footer from '../footer/Footer'

//Components
import Card from '../cards/Card'

function Work({page, setPage}) {
  return (
      <Card
        width = {'75%'}
        height = {'90%'}
        links = {true}
        setPage = {setPage}
        page = {page}
      >
        <div className='ContentPresentation WorkPage'>
          <div className='ContentTimeLine'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(52, 118, 210) ', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(52, 118, 210) ' }}
              date="2019 - present"
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FaNetworkWired />}
            >
              <h3 className="vertical-timeline-element-title">Senior Full Stack Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">SmartHop</h4>
              <p>
              Technical management of projects related to Freight Browser.
              Analyze, propose and execute comprehensive solutions that target the needs of the company that compete
              with Freight Browser.
              Participate in performance evaluations of team members who are assigned Freight Browser activities.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019 - 2020"
              contentStyle={{ background: 'rgb(243 242 240) ', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(243 242 240) ' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FaNetworkWired />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Web Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">SmartHop</h4>
              <p>
                As a web developer at SmartHop, I collaborate in the development of an application as a technological tool for carriers and dispatchers in the United States
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2019"
              contentStyle={{ background: 'rgb(243 242 240) ', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(243 242 240) ' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FaNetworkWired />}
            >
              <h3 className="vertical-timeline-element-title">Project Development Manager</h3>
              <h4 className="vertical-timeline-element-subtitle">Feynmans Technologies</h4>
              <p>
              As director, I am in charge of the management and organization of each project, in addition to devising the different methodologies and ideas to use.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2018 - 2019"
              contentStyle={{ background: 'rgb(243 242 240) ', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(243 242 240) ' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FaNetworkWired />}
            >
              <h3 className="vertical-timeline-element-title">Backend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Grupo Ingenio Tecnologico</h4>
              <p>
              At Ingenio Tecnológico he was a Backend developer for the Credirutas application.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<FaCheck />}
            />
          </VerticalTimeline>
          </div>

        </div>
        <Footer/>
      </Card>
  )
}


export default Work;