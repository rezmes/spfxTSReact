import * as React from "react"
import { IButtonProps } from "./IButtonProps"

export const Button = (props: IButtonProps) => {
  return <button onClick={(event)=> props.handleClick(event, 1)}>Click</button>
}
