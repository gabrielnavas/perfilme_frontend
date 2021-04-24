import React from 'react'
import Wrapper from '../../components/Wrapper'

import Left from './Left'
import Right from './Right'

const ShowPage = (props) => {
  // set state in params... https://stackoverflow.com/questions/63685178/how-to-sync-react-router-params-with-state
  console.log(props.location.state);


  return (
    <Wrapper>
      <Left />
      <Right />
    </Wrapper>
  )
}
export default ShowPage