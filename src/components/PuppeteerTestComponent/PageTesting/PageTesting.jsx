import React, { useContext } from 'react';
import styles from './PageTesting.module.scss';
import {
  updateTestDescription,
  deletePuppeteerTest,
  addAction,
} from '../../../context/actions/puppeteerTestCaseActions';
import { PuppeteerTestCaseContext } from '../../../context/reducers/puppeteerTestCaseReducer';
import PageAction from './PageAction';

const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');

const PageTesting = ({ pageTesting, index }) => {
  const [, dispatchToPuppeteerTestCase] = useContext(PuppeteerTestCaseContext);

  const handleClickDeleteFormTesting = (e) => {
    dispatchToPuppeteerTestCase(deletePuppeteerTest(pageTesting.id));
  };

  // need a function here to handle change to the test description
  const handleChangeTestDescription = (e, field) => {
    dispatchToPuppeteerTestCase(updateTestDescription(pageTesting.id, field, e.target.value));
  };

  const handleAddActionClick = () => {
    dispatchToPuppeteerTestCase(addAction(index));
    // ANOTHER ISSUE HERE TO CLEAN UP
  };

  console.log('in pageTesting', pageTesting);
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
          <input
            type='text'
            placeholder='Brief description of what you are testing'
            onChange={(e) => handleChangeTestDescription(e, 'test')}
          />
        </div>
      </span>
      {pageTesting.actions.map((action, i) => {
        return (
          <div>
            <PageAction pageAction={pageTesting} index={index} id={i} />
          </div>
        );
      })}
      <div id={styles.buttonContainer}>
        <button id={styles.actionButton} onClick={handleAddActionClick}>
          <i className='fas fa-plus'></i>
          Action
        </button>
      </div>
    </div>
  );
};

export default PageTesting;
