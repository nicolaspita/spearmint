import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './PageTesting.module.scss';
import { deletePuppeteerTest } from '../../../context/actions/puppeteerTestCaseActions';
import { PuppeteerTestCaseContext } from '../../../context/reducers/puppeteerTestCaseReducer';
import ToolTip from '../../ToolTip/ToolTip';
import PageAction from './PageAction';

const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');
const questionIcon = require('../../../assets/images/help-circle.png');

const FormTesting = ({ formTesting, index }) => {
  const [, dispatchToPuppeteerTestCase] = useContext(PuppeteerTestCaseContext);

  // const handleFormSubmissionFields = (e, field) => {
  //   dispatchToPuppeteerTestCase();
  // };

  const handleClickDeleteFormTesting = (e) => {
    dispatchToPuppeteerTestCase(deletePuppeteerTest());
  };

  return (
    <Draggable draggableId={formTesting.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id={styles.modal}
        >
          <img
            src={closeIcon}
            id={styles.close}
            alt='close'
            onClick={handleClickDeleteFormTesting}
          />

          <div id={styles.header}>
            <img src={dragIcon} alt='drag' />
            <h3>Page Interaction</h3>
          </div>

          <div id={styles.groupFlexbox}>
            <div id={styles.inputFlexBox}>
              <label htmlFor='first-paint'>Headless Mode</label>
              <span id={styles.hastooltip} role='tooltip'>
                <img src={questionIcon} alt='help' />
                <span id={styles.tooltip}>
                  <ToolTip toolTipType={'FPTarget'} />
                </span>
              </span>
              <span>
                <input type='radio' />
                <label htmlFor='headless-mode'>Yes</label>
                <input type='radio' />
                <label htmlFor='headless-mode'>No</label>
              </span>
            </div>
            <div id={styles.inputFlexBox}>
              <span>
                <label>Device</label>
                <input type='text' />
              </span>
              <div id={styles.time}></div>
              <span id={styles.hastooltip} role='tooltip'>
                <img src={questionIcon} alt='help' />
                <span id={styles.tooltip}>
                  <ToolTip toolTipType={'FPTarget'} />
                </span>
              </span>
            </div>
          </div>
          <div id={styles.groupFlexbox}>
            <div id={styles.inputFlexBox}>
              <span>
                <label>Test Description</label>
                <input type='text' placeholder='test description'></input>
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
      )}
    </Draggable>
  );
};

export default FormTesting;
