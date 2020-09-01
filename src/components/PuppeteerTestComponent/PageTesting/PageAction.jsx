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
    <div id={styles.actionHeader}>
      <div id={styles.query}>
        <span>
          <label htmlFor='queryVariant' className={styles.queryLabel}>
            Element Name
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                <ToolTip toolTipType='elementName' />
              </span>
            </span>
            <input type='text' placeholder='e.g. username-input' />
          </label>
        </span>
        <span>
          <label htmlFor='queryValue' className={styles.queryLabel}>
            Page Input
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                <ToolTip toolTipType='pageInput' />
              </span>
            </span>
            <input type='text' id='queryValue' placeholder='e.g. username' />
          </label>
        </span>
      </div>
      <div id={styles.query}>
        <div id={styles.dropdownFlex}>
          <label htmlFor='queryVariant' className={styles.queryLabel}>
            Action Type
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                <ToolTip toolTipType='actionType' />
              </span>
            </span>
          </label>
          <span>
            <select id='actionType'>
              <option value='' />
              <option value='Click'>Click</option>
              <option value='Tap'>Tap</option>
              <option value='Type'>Type</option>
            </select>
          </span>
        </div>
        <img src={closeIcon} id={styles.close} alt='close' />
      </div>
    </div>
  );
};

export default PageAction;
