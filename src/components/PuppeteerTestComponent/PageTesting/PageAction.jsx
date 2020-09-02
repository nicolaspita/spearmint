import React, { useContext } from 'react';
import { updatePageTest, deleteAction } from '../../../context/actions/puppeteerTestCaseActions';
import { PuppeteerTestCaseContext } from '../../../context/reducers/puppeteerTestCaseReducer';
import ToolTip from '../../ToolTip/ToolTip';
import styles from './PageAction.module.scss';

const questionIcon = require('../../../assets/images/help-circle.png');
const closeIcon = require('../../../assets/images/close.png');

const PageAction = ({ pageAction, index, key }) => {
  const [, dispatchToPuppeteerTestCase] = useContext(PuppeteerTestCaseContext);

  console.log('in pageAction index', index);

  const handleChangePageTestFields = (e, id, field) => {
    dispatchToPuppeteerTestCase(updatePageTest(field, pageAction.id, e.target.value));
  };

  const handleDeleteAction = (id) => {
    dispatchToPuppeteerTestCase(deleteAction(index));
  };

  return (
    <div id={styles.actionHeader}>
      <div id={styles.query}>
        <span>
          <label htmlFor='queryVariant' className={styles.queryLabel}>
            Element Name
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                <ToolTip toolTipType={'ElementName'} />
              </span>
            </span>
            <input
              type='text'
              placeholder='e.g. username-input'
              onChange={(e) => handleChangePageTestFields(e, 'element')}
            />
          </label>
        </span>
        <span>
          <label htmlFor='queryValue' className={styles.queryLabel}>
            Page Input
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                <ToolTip toolTipType={'PageInput'} />
              </span>
            </span>
            <input
              type='text'
              id='queryValue'
              placeholder='e.g. username'
              onChange={(e) => handleChangePageTestFields(e, 'input')}
            />
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
                <ToolTip toolTipType={'ActionType'} />
              </span>
            </span>
          </label>
          <span>
            <select id='actionType' onChange={(e) => handleChangePageTestFields(e, 'action')}>
              <option value='' />
              <option value='Click'>Click</option>
              <option value='Tap'>Tap</option>
              <option value='Type'>Type</option>
            </select>
          </span>
        </div>
        <img src={closeIcon} id={styles.close} alt='close' onClick={handleDeleteAction} />
      </div>
    </div>
  );
};

export default PageAction;
