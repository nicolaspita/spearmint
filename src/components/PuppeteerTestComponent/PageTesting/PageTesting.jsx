import React, { useContext } from 'react';
import styles from './PageTesting.module.scss';
import { deletePuppeteerTest } from '../../../context/actions/puppeteerTestCaseActions';
import { PuppeteerTestCaseContext } from '../../../context/reducers/puppeteerTestCaseReducer';
import ToolTip from '../../ToolTip/ToolTip';
import PageAction from './PageAction';

const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');
const questionIcon = require('../../../assets/images/help-circle.png');

const FormTesting = ({ pageTesting, index }) => {
  const [, dispatchToPuppeteerTestCase] = useContext(PuppeteerTestCaseContext);

  // const handleChangePageTestingFields = (e, field) => {
  //   dispatchToPuppeteerTestCase();
  // };

  const handleClickDeleteFormTesting = (e) => {
    dispatchToPuppeteerTestCase(deletePuppeteerTest(pageTesting.id));
  };

  return (
    <div id={styles.modal}>
      <img src={closeIcon} id={styles.close} alt='close' onClick={handleClickDeleteFormTesting} />

      <div id={styles.header}>
        <img src={dragIcon} alt='drag' />
        <h3>Page Interaction</h3>
      </div>

      <div id={styles.groupFlexbox}>
        <div id={styles.inputFlexBox}>
          <span>
            <label>Test Description</label>
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                <ToolTip toolTipType={'FPTarget'} />
              </span>
            </span>
            <span>
              <input type='text' placeholder='From data sent correctly' />
            </span>
          </span>
        </div>
      </div>
      {/* Divider to see space between divs with ease */}
      <div id={styles.groupFlexbox}>
        <PageAction />
      </div>
      <button>
        <i className='fas fa-plus'></i>
        Action
      </button>
    </div>
  );
};

export default FormTesting;
