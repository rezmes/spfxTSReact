import * as React from "react"
import { IStatusProps } from "./IStatusProps"

export const Status = (props: IStatusProps) => {
  let message
  if(props.status==='loading'){
message= 'Loading...'}
else if(props.status==='success'){
message= 'Data fetched successfully!'}
else if (props.status === 'error')
  {message='Error fetching data'}
  return (

      <h2>{message}</h2>


  )
}
