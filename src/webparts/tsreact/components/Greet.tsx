import * as React from 'react';
import { IGreetProps } from './IGreetProps';
export const Greet = (props: IGreetProps) => {
  return (
    <div><h2>{props.isLoggedIn ? `Welcome {props.name}! You have {props.messageCount} unread messages.` : ` Who are you?`}  </h2></div>
  )
}
