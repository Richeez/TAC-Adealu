import React from 'react'
import { Heading} from '../../../Styles/Styled';
import { ContentCont } from '../subtext/subTextStyled';
import { AboutPage } from './AboutStyled';

const About = ({about}) => {
  return (
    <AboutPage ref={about}>
      
    <div className="clip" >
      <Heading>our vision &amp; mission</Heading>
    </div>
      
<ContentCont as='div'>
<div className="aboutTextContainer">
  <div className="span-2">
          <p >
            We are products of TACN Adealu, we build young minds to
            become great adults, great weapons in God's hands and a blessing to
            their world.
          </p>

  </div>
  <div className="left-item">
    <div className="item">

          <h2>leadership team:</h2>

          <p>
            Our leadership team recognizes the authority of God, and realizes
            that we are shepherds who serve under the Chief Shepherd, Jesus
            Christ. We desire to devote ourselves to prayer and to the ministry
            of the Word. Our passion and goal is to equip the believers for the
            work of the ministry until we all attain maturity in the fullness of
            Christ.
          </p>
    </div>

          <div className="aboutImageAndText span-2">
           <div  className="text ">
            <div className="imageContainer">
              <img src="" alt="insert your profile pic"/>
            </div>
              <p>
              We are the lead magnet of TACN Adealu, we build young minds to
            become great adults, great weapons in God's hands and a blessing to
            their world.
              </p>
            </div>
           <div className="text ">
            <div className="imageContainer">
              <img src="" alt="insert your profile pic"/>
            </div>
              <p>
              We are the lead magnet of TACN Adealu, we build young minds to
            become great adults, great weapons in God's hands and a blessing to
            their world.
              </p>
            </div>
           <div className="text">
            <div className="imageContainer">
              <img src="" alt="insert your profile pic"/>
            </div>
              <p>
              We are the lead magnet of TACN Adealu, we build young minds to
            become great adults, great weapons in God's hands and a blessing to
            their world.
              </p>
            </div>
           <div className="text">
            <div className="imageContainer">
              <img src="" alt="insert your profile pic"/>
            </div>
              <p>
              We are the lead magnet of TACN Adealu, we build young minds to
            become great adults, great weapons in God's hands and a blessing to
            their world.
              </p>
            </div>

          </div>
          </div>

        </div>
</ContentCont>
    </AboutPage>
  )
}

export default About