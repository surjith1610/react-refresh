import React from 'react'
import Button from './assets/Button'
import withClickTracking from './assets/ButtonWithClickTracking'

function HOC() {
    const ButtonWithClickTracking = withClickTracking(Button);
  return (
    <>
        <h1>Higher Order Component</h1>
        {/* <Button label="Click Me"/> */}
        <ButtonWithClickTracking label="Pay now" trackingInfo={{amounr:"1000", user: "jack"}}/>
        
    </>
  )
}

export default HOC