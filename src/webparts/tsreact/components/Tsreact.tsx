import * as React from 'react';
import styles from './Tsreact.module.scss';
import { ITsreactProps } from './ITsreactProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Greet } from './Greet';
import { Person } from './Person';
import { PersonList } from './PersonList';
import { Status } from './Status';
import { Heading } from './Heading';
import { Button } from './Button';
import { Input } from './Input';
import { Container } from './Containter';

export default class Tsreact extends React.Component < ITsreactProps, {} > {
  public render(): React.ReactElement<ITsreactProps> {
    const personName ={
      first: 'Bruce',
      last: 'Wayne'
    }
    const nameList =
[{
       first: 'Bruce',
      last: 'Wayne'
},
{
  first: 'Clark',
 last: 'Kent'
},{
  first: 'Princess',
 last: 'Diana'
}]

    return(
      <div className = { styles.tsreact } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
{/* <Greet name={'Mohammad Reza Mesgari'} messageCount={10} isLoggedIn={false} />
<Person name={personName}/>
<PersonList names={nameList} />
<Status status={'error'} /> */}
<Heading>Placeholder text</Heading>
<Button handleClick={(event, id)=>{console.log('Button clicked', event, id)}}/>
  <Input value='' handleChange={event=>console.log(event)} />
  <Container styles={{border: '2px solid green', padding: '1rem'}}/>
      </div>
    </div>
  </div>
      </div >
    );
  }
}
