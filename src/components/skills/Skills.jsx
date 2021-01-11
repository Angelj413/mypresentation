import React from 'react';
import Footer from '../footer/Footer'
import SkillBar from '../skillBar/SkillBar'

import 'react-vertical-timeline-component/style.min.css';
//Components
import Card from '../cards/Card'

const Principals = [
  { bgcolor: "#D32F2F", completed: 90, skill:'Javascript' },
  { bgcolor: "#4CAF50", completed: 90, skill:'NodeJS' },
  { bgcolor: "#FFC107", completed: 75, skill:'Python' },
  { bgcolor: "#7C4DFF", completed: 85, skill:'HTML' },
  { bgcolor: "#CDDC39", completed: 80, skill:'CSS' },
  { bgcolor: "#03A9F4", completed: 75, skill:'SQL' },
  { bgcolor: "#00796B", completed: 65, skill:'MongoDB' },
  { bgcolor: "#607D8B", completed: 50, skill:'PHP' },
];

const Seconds = [
  { bgcolor: "#FFC107", completed: 90, skill:'Leadership' },
  { bgcolor: "#FF9800", completed: 85, skill:'Team Work' },
  { bgcolor: "#3F51B5", completed: 50, skill:'English' },
  { bgcolor: "#F44336", completed: 90, skill:'Allegiance' },
  { bgcolor: "#4CAF50", completed: 90, skill:'Resilience' },
]

function Skills({page, setPage}) {
  return (
      <Card
        width = {'75%'}
        height = {'90%'}
        links = {true}
        setPage = {setPage}
        page = {page}
      >
        <div className='ContentPresentation SkillsSuperContent'>
          <div className='Informationskills'>
            <div className='Title'>
              <p className='TitleP'><span className='Hello'></span>These are my <span className='Name'>Skills</span></p>
            </div>
          </div>
          <div className='Skills'>
            <div className='contentSkills'>
              {Principals.map((item, idx) => (
                <SkillBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill} />
              ))}
            </div>
            <div className='contentSkills'>
              {Seconds.map((item, idx) => (
                <SkillBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill} />
              ))}
            </div>
          </div>
        </div>
        <Footer/>
      </Card>
  )
}


export default Skills;