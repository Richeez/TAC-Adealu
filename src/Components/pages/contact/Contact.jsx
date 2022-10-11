import React from 'react'
import { Heading } from '../../../Styles/Styled'
import { Button } from '../../Buttons/SubmitStyled'
import { ContentCont } from '../subtext/subTextStyled'
import { ContactPage } from './contactStyled'

const Contact = ({contact}) => {
  return (
    <ContactPage ref={contact}>
<div className="clip">
  <Heading>contact us</Heading>
</div>
<ContentCont>
      <div className="contact-container " >
        <div className="contact-Text ">
          <p>
            Drop us a line! We will reach out to you &amp; answer all your questions
            personally. Recurring questions will be added to the FAQ page.
          </p>
        </div>
        <form action="">
        <div className="details ">
          <div className="names-display-format span-2">
            <input type="text " name="first" placeholder="First Name " />
            <input type="text " name="second" placeholder="Last Name " />
          </div>
          <div className="email-Comment span-2 ">
            <input
              type="email"
              name="email"
              id=" "
              placeholder="Email Address"
            />
            <textarea
              name="comment"
              id=" "
              cols="30 "
              rows="10 "
              placeholder="Your Comment... "
            ></textarea>
            <div className="send-btn">
              <Button type='submit'>Send</Button>
            </div>
          </div>
        </div>
        </form>
      </div>  
</ContentCont>
    </ContactPage>
  )
}

export default Contact