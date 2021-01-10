import React from 'react';
import { TaggedContentCard }  from 'react-ui-cards';
import Feynmans from '../../assets/images/feynmansintro.png'
import Actual from '../../assets/images/actual.png'
import CCS from '../../assets/images/ccs.png'
import Ginestin from '../../assets/images/ginestin.png'
import Old from '../../assets/images/old.png'
import Footer from '../footer/Footer'

import 'react-vertical-timeline-component/style.min.css';
//Components
import Card from '../cards/Card'

function Portfolio({page, setPage}) {
  return (
      <Card
        width = {'75%'}
        height = {'90%'}
        links = {true}
        setPage = {setPage}
        page = {page}
      >
        <div className='ContentPresentation WorkPage'>
          <div className='ContentPortfolio'>
            <TaggedContentCard
              thumbnail = {Actual}
              title =  { `Angel Morante Presentation` }
              description = 'Current sample portfolio'
              tags = {['React', 'Javascript', 'Hooks', 'Heroku']}
            />
            <TaggedContentCard
              thumbnail = {Feynmans}
              href = {'https://angelj413.github.io/feynmans2.0/'}
              title =  { `Feynman's Technologies` }
              description = 'Introductory web site prototype for Feynmans. '
              tags = {['HTML', 'CSS', 'Javascript', 'PHP']}
            />
            <TaggedContentCard
              thumbnail = {CCS}
              href = {'https://angelj413.github.io/CentroCristianoSobrenatural/'}
              title =  { `Centro Cristiano de lo Sobrenatural` }
              description = ' Introductory website for the Christian Center of the Supernatural. '
              tags = {['HTML', 'CSS', 'Javascript', 'PHP']}
            />
            <TaggedContentCard
              thumbnail = {Ginestin}
              href = {'https://angelj413.github.io/ginestin/'}
              title =  { `Ginestin (Feynman's)` }
              description = {` Introductory website for Ginestin. Working for Feynman's`}
              tags = {['HTML', 'CSS', 'Javascript', 'PHP']}
            />
            <TaggedContentCard
              thumbnail = {Old}
              href = {'https://angelj413.github.io/AngelMorante/'}
              title =  { `Angel Morante (Old Page)` }
              description = 'Old Portfolio'
              tags = {['HTML', 'CSS', 'Javascript', 'PHP']}
            />
          </div>

        </div>
        <Footer/>
      </Card>
  )
}


export default Portfolio;