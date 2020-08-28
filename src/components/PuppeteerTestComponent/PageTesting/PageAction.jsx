import React, { useContext } from 'react';
import AutoComplete from '../../AutoComplete/AutoComplete';
import AutoCompleteMockData from '../../AutoComplete/AutoCompleteMockData';
import styles from './PageAction.module.scss';
import ToolTip from '../../ToolTip/ToolTip';
import { PuppeteerTestCaseContext } from '../../../context/reducers/puppeteerTestCaseReducer';

const questionIcon = require('../../../assets/images/help-circle.png');
const closeIcon = require('../../../assets/images/close.png');

const PageAction = ({ statement }) => {
  //

  return (
    <div id={styles.action}>
      <img src={closeIcon} id={styles.close} alt='close' />
      <div id={styles.actionHeader}>
        <h3>On Page Load</h3>
      </div>
      <div id={styles.queryFlexBox}>
        <div id={styles.querySelector}>
          <label htmlFor='queryVariant' className={styles.queryLabel}>
            Query Selector
          </label>
          <div id={styles.dropdownFlex}>
            <select id='queryVariant'>
              <option value='' />
              <option value='getBy'>getBy</option>
              <option value='getAllBy'>getAllBy</option>
              <option value='queryBy'>queryBy</option>
              <option value='queryAllBy'>queryAllBy</option>
              <option value='findBy'>findBy</option>
              <option value='findAllBy'>findAllBy</option>
            </select>
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                {/* <ToolTip toolTipType={statement.queryVariant} /> */}
              </span>
            </span>
            <select id='querySelector'>
              <option value='' />
              <option value='LabelText'>LabelText</option>
              <option value='PlaceholderText'>PlaceholderText</option>
              <option value='Text'>Text</option>
              <option value='AltText'>AltText</option>
              <option value='Title'>Title</option>
              <option value='DisplayValue'>DisplayValue</option>
              <option value='Role'>Role</option>
              <option value='TestId'>TestId</option>
              {/* TextMatch Precision & Normalization will be added */}
            </select>
            <select id='actionType'>
              <option value='' />
              <option value='Click'>Click</option>
              <option value='Tap'>Tap</option>
              <option value='Type'>Type</option>
            </select>
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                {/* <ToolTip toolTipType={statement.querySelector} /> */}
              </span>
            </span>
          </div>
        </div>
        <div id={styles.query}>
          <label htmlFor='queryValue' className={styles.queryLabel}>
            Query
          </label>

          <input type='text' id='queryValue' />
        </div>
      </div>
    </div>
  );
};

export default PageAction;
