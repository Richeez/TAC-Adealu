import { FlexContainer, Text } from '../../../Styles/Styled'
import { ButtonLink } from '../../Buttons/NavButtonStyled'
import Carousel from '../../carousel/Carousel'
import { HomePage } from './HomeStyled'




function Home({home}) {



  return (
    <HomePage>
          <div className='circle1' ref={home}>

      <div className="overlay"> 
      <h1>Welcome To Church</h1></div>
   <Carousel/>
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