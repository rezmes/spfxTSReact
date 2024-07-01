import * as React from 'react';
import styles from './Tsreact.module.scss';
import { ITsreactProps } from './ITsreactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { User } from './User';



export default class Tsreact extends React.Component < ITsreactProps, {} > {
  public render(): React.ReactElement<ITsreactProps> {
    return(
      <div className = { styles.tsreact } >
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>

        <User />

      </div>
    </div>
  </div>
      </div >
    );
  }
}
