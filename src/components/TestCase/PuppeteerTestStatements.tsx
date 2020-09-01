import React, { useContext, useState } from 'react';
import PaintTiming from '../PuppeteerTestComponent/PaintTiming/PaintTiming';
import PageTesting from '../PuppeteerTestComponent/PageTesting/PageTesting';
import ToolTip from '../ToolTip/ToolTip';
import styles from '../PuppeteerTestComponent/PageTesting/PageTesting.module.scss';
import { PuppeteerTestCaseContext } from '../../context/reducers/puppeteerTestCaseReducer';
import { setDeviceName, setHeadlessMode } from '../../context/actions/puppeteerTestCaseActions';
import { PuppeteerStatements } from '../../utils/puppeteerTypes';

const questionIcon = require('../../assets/images/help-circle.png');

const PuppeteerTestStatements = () => {
  const [{ puppeteerStatements }, dispatchToPuppeteerTestCase] = useContext(
    PuppeteerTestCaseContext
  );

  const handleDeviceSelect = (e) => {
    const deviceName = e.target.value;
    dispatchToPuppeteerTestCase(setDeviceName(deviceName));
  };

  const handleHeadlessMode = (e) => {
    const headlessMode = e.target.value;
    dispatchToPuppeteerTestCase(setHeadlessMode(headlessMode));
  };

  // check out the puppeteerStatements and increment testCount accordingly

  return (
    <>
      <div id={styles.menuFlexbox}>
        <div id={styles.specsFlexbox}>
          <label htmlFor='headless-mode'>
            Headless Mode
            <span id={styles.hastooltip} role='tooltip'>
              <img src={questionIcon} alt='help' />
              <span id={styles.tooltip}>
                <ToolTip toolTipType={'HeadlessMode'} />
              </span>
            </span>
          </label>
          <span>
            <input name='headless-radio' type='radio' onClick={handleHeadlessMode} value='On' />
            <label htmlFor='headless-mode'>On</label>
            <input name='headless-radio' type='radio' onClick={handleHeadlessMode} value='Off' />
            <label htmlFor='headless-mode'>Off</label>
          </span>
        </div>
        <span>
          <div id={styles.devicesFlexbox}>
            <label htmlFor='deviceName'>
              Device
              <span id={styles.hastooltip} role='tooltip'>
                <img src={questionIcon} alt='help' />
                <span id={styles.tooltip}>
                  <ToolTip toolTipType={'Device'} />
                </span>
              </span>
            </label>
            <select id='deviceName' onChange={handleDeviceSelect}>
              <option value='' />
              <option value='iPhone 6'>iPhone 6</option>
              <option value='iPhone 6 Plus'>iPhone 6 Plus</option>
              <option value='iPhone 7'>iPhone 7</option>
              <option value='iPhone 7 Plus'>iPhone 7 Plus</option>
              <option value='iPhone 8'>iPhone 8</option>
              <option value='iPhone 8 Plus'>iPhone 8 Plus</option>
              <option value='iPhone X'>iPhone X/XS</option>
              <option value='iPhone SE'>iPhone SE</option>
              <option value='iPhone XR'>iPhone XR</option>
              <option value='iPad'>iPad</option>
              <option value='iPad Pro'>iPad Pro</option>
              <option value='Pixel 2'>Pixel 2</option>
              <option value='Pixel 2 XL'>Pixel 2 XL</option>
              <option value='Galaxy S III'>Galaxy S III</option>
              <option value='Galaxy S5'>Galaxy S5</option>
              <option value='Galaxy Note 3'>Galaxy Note 3</option>
            </select>
          </div>
        </span>
      </div>
      {puppeteerStatements.map((statement: PuppeteerStatements, i: number) => {
        switch (statement.type) {
          case 'paintTiming':
            return <PaintTiming key={statement.id} paintTiming={statement} index={i} />;
          case 'pageTesting':
            console.log(i);
            return (
              <PageTesting
                key={statement.id}
                pageTesting={statement}
                index={i}
                dispatchToPuppeteerTestCase={dispatchToPuppeteerTestCase}
              />
            );
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default PuppeteerTestStatements;
