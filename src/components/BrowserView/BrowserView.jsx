import React, { useContext } from 'react';
import styles from './BrowserView.module.scss';
import { GlobalContext } from '../../context/reducers/globalReducer';

const BrowserView = () => {
  const [{ url }, dispatchToGlobal] = useContext(GlobalContext);

  // add functionality to set url to whatever the user inputs
  const changeUrl = dispatchToGlobal();

  // how to do this?

  return (
    <>
      <form action=''>
        <input type='text' />
        <input type='submit' />
      </form>
      <webview id={styles.browserView} src={url} />
    </>
  );
};

export default BrowserView;
