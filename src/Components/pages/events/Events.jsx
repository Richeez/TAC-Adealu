import React from 'react'
import { Image, Heading } from '../../../Styles/Styled'
import { ContentCont } from '../subtext/subTextStyled'
import { EventPage } from './eventsStyled'

const Events = ({events}) => {
  return (
    <EventPage ref={events}>
      <div className="clip">
        <Heading>events</Heading>
      </div>
      <ContentCont as='div'>
        <div className="image-cont">
          <div data-aos='flip-up' className="item">
            <Image src="images/celebrate-6.jpg" alt="image" />
          <div className="overlay">
<Heading white>24hrs african praise</Heading>
          </div>
          </div>
          <div data-aos='zoom-out' className="item">
            <Image src="images/celebrate-1.jpg" alt="image" />
          <div className="overlay">
          <Heading>youth's week</Heading>

          </div>
          </div>
          <div data-aos='zoom-out' className="item">
            <Image src="images/celebrate-2.jpg" alt="image" />
          <div className="overlay">
<Heading>4hrs of tailoring God's worship</Heading>
          </div>
          </div>
          <div data-aos='zoom-out' className="item">
            <Image src="images/celebrate-3.jpg" alt="image" />
          <div className="overlay">
          <Heading>concert</Heading>

          </div>
          </div>
          <div data-aos='zoom-out' className="item">
            <Image src="images/celebrate-4.jpg" alt="image" />
          <div className="overlay">
          <Heading>night of guest ministers</Heading>

          </div>
          </div>

        </div>

      </ContentCont>
     </EventPage>
  )
}

export default Events