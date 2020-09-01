import React, { useContext } from 'react';
import styles from './PageTesting.module.scss';
import { deletePuppeteerTest } from '../../../context/actions/puppeteerTestCaseActions';
import { PuppeteerTestCaseContext } from '../../../context/reducers/puppeteerTestCaseReducer';
import ToolTip from '../../ToolTip/ToolTip';
import PageAction from './PageAction';

const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');
const questionIcon = require('../../../assets/images/help-circle.png');

const PageTesting = ({ statement, pageTesting, index }) => {
  const [, dispatchToPuppeteerTestCase] = useContext(PuppeteerTestCaseContext);

  // const handleChangePageTestingFields = (e, field) => {
  //   dispatchToPuppeteerTestCase();
  // };

  const handleClickDeleteFormTesting = (e) => {
    dispatchToPuppeteerTestCase(deletePuppeteerTest(pageTesting.id));
  };

  // const addActionClick = (e) => {
  //   dispatchToPuppeteerTestCase(addAction());
  // };

  return (
    <div id={styles.modal}>
      <img src={closeIcon} id={styles.close} alt='close' onClick={handleClickDeleteFormTesting} />

      <div id={styles.header}>
        <img src={dragIcon} alt='drag' />
        <h3>Page Interaction</h3>
      </div>
      <span>
        <div id={styles.description}>
          <label htmlFor='test-type'>Test</label>
          <input type='text' placeholder='Brief description of what you are testing' />
        </div>
      </span>
      <div>
        <PageAction statement={statement} />
      </div>
      <div id={styles.buttonContainer}>
        <button id={styles.actionButton}>
          <i className='fas fa-plus'></i>
          Action
        </button>
      </div>
    </div>
  );
};

export default PageTesting;
