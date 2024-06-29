import * as React from "react"
import { IInputProps } from "./IInputProps"

export const Input =({value, handleChange}: IInputProps) => {
  return <input type="text" value={value} onChange={handleChange}/>
}
