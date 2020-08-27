import React, { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styles from './PageTesting.module.scss';
import { deletePuppeteerTest } from '../../../context/actions/puppeteerTestCaseActions';
import { PuppeteerTestCaseContext } from '../../../context/reducers/puppeteerTestCaseReducer';
import ToolTip from '../../ToolTip/ToolTip';

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
            <label htmlFor='first-paint'>Headless Mode</label>
            <div id={styles.inputFlexBox}>
              <span>
                <input type='radio' />
                Yes
                <input type='radio' />
                No
                <label>Platform</label>
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
            <label htmlFor='first-contentful-paint'>First Contentful Paint</label>
            <div id={styles.inputFlexBox}>
              <input
                type='text'
                name='first-contentful-paint-it'
                placeholder='should have its first meaningful paint in less than 100 ms'
                // onChange={(e) => handleChangePaintTimingFields(e, 'FCPIt')}
              />
              <div id={styles.time}>
                <input
                  type='text'
                  name='first-contentful-paint-benchmark'
                  placeholder={100}
                  // onChange={(e) => handleChangePaintTimingFields(e, 'FCPtTime')}
                />
              </div>
              <span id={styles.hastooltip} role='tooltip'>
                <img src={questionIcon} alt='help' />
                <span id={styles.tooltip}>
                  <ToolTip toolTipType={'FCPTarget'} />
                </span>
              </span>
            </div>
          </div>
          <div id={styles.groupFlexbox}>
            <label htmlFor='largest-contentful-paint'>Largest Contentful Paint</label>
            <div id={styles.inputFlexBox}>
              <input
                type='text'
                name='largest-contentful-paint-it'
                placeholder='should have its largest contentful paint in less than 250 ms'
                // onChange={(e) => handleChangePaintTimingFields(e, 'LCPIt')}
              />
              <div id={styles.time}>
                <input
                  type='text'
                  name='largest-contentful-paint-benchmark'
                  placeholder={250}
                  // onChange={(e) => handleChangePaintTimingFields(e, 'LCPTime')}
                />
              </div>
              <span id={styles.hastooltip} role='tooltip'>
                <img src={questionIcon} alt='help' />
                <span id={styles.tooltip}>
                  <ToolTip toolTipType={'LCPTarget'} />
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default FormTesting;
