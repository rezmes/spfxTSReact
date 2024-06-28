import * as React from 'react'
import {IPersonProps} from './IGreetProps'

export const Person = (props: IPersonProps) => {
  return <div>{props.name.first}<br/>{props.name.last}</div>
}
