import * as React from "react"
import { IPersonListProps } from "./IPersonListProps"

export const PersonList = (props:IPersonListProps) => {
  return (
    <div>
{props.names.map(name => {
  return <h2 key={name.first}>{name.first} {name.last}</h2>})}
    </div>
  )
}
