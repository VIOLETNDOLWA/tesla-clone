  import React from 'react'
  import styled from 'styled-components'
  import Section from './Section'

  function Home() {
    return (
      <Container>
          <Section
            title="Model S"
            description="Order online for Touchless Delivery"
            backgroundImg ="model-s.jpg"
            leftBtnText ="custom order"
            rightBtnText= "existing inventory"
          />

          <Section
              title="Model Y"
              description="Order online for Touchless Delivery"
              backgroundImg ="model-y.jpg"
              leftBtnText ="custom order"
              rightBtnText= "existing inventory"
            />
          
          <Section
            title="Model 3"
            description="Order online for Touchless Delivery"
            backgroundImg ="model-3.jpg"
            leftBtnText ="custom order"
            rightBtnText= "existing inventory"
          />
          
          <Section
            title="Model X"
            description="Order online for Touchless Delivery"
            backgroundImg ="model-x.jpg"
            leftBtnText ="custom order"
            rightBtnText= "existing inventory"
          /> 

          <Section
              title="Lowest Cost Solar Panels in the World"
              description="Money-back guarantee"
              backgroundImg ="solar-panel.jpg"
              leftBtnText ="Order now"
              rightBtnText= "Learn more"
            />

          <Section
              title="Solar for New Roofs"
              description="Solar Roofs Cost Less Than a New Roof"
              backgroundImg ="solar-roof.jpg"
              leftBtnText ="Order now"
              rightBtnText= "Learn more"
            />

          <Section
              title="Accessories"
              description="Order online for Touchless Delivery"
              backgroundImg ="accessories.jpg"
              leftBtnText ="Shop now"
              
            />
          
      </Container>
      
      
    )
  }

  export default Home
  const Container = styled.div`
      height : 100vh;
      `