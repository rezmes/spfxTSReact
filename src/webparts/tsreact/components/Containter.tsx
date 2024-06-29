import * as React from "react"
import { IContainerProps } from "./IContainerProps";

export const Container = (props: IContainerProps)=> {
  return(
    <div style={props.styles}>
      Text content goes here
      </div>
  )
}
