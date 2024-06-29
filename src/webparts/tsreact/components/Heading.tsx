import * as React from "react"
import { IHeadingProps } from "./IHeadingProps"

export const Heading = (props: IHeadingProps) => {
  return <h2>{props.children}</h2>
}
