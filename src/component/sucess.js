import React from 'react'
import {Header,Segment ,Button, Icon, Item, Message} from 'semantic-ui-react'
const SuccessMessage =()=>{
   return(
       <div className="App">
    <Message  success
    header="Sucess!"
    content="Your Order and Payment has been accepted"
    icon="star outline"
    />
    </div>
   )
}
export default SuccessMessage;