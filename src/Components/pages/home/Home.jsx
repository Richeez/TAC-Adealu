import { FlexContainer, Text } from '../../../Styles/Styled'
import { ButtonLink } from '../../Buttons/NavButtonStyled'
import Carousel from '../../carousel/Carousel'
import { HomePage } from './HomeStyled'



function Home({home}) {

  function currentSlide() {

    
  }

  return (
    <HomePage>
          <div className='circle1' ref={home}>

      <div className="overlay"> 
      <h1>Welcome To Church</h1></div>
<span className="prev" >&#10094;</span>
<span className="next" >&#10095;</span>
<Carousel/>
      <div className='dots-cont'>
  <span className="dot" onClick={currentSlide(1)}></span>
  <span className="dot" onClick={currentSlide(2)}></span>
  <span className="dot" onClick={currentSlide(3)}></span>
</div>
      <FlexContainer className='absolute'>

<ButtonLink>
  <Text>Offering</Text>
</ButtonLink>
<ButtonLink>
  <Text>Explore</Text>
</ButtonLink>
      </FlexContainer>
      </div>
<div className='circle2' />
    </HomePage>
  )
}

export default Home