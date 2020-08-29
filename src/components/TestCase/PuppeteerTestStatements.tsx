import React, { useContext, useState } from 'react';
import PaintTiming from '../PuppeteerTestComponent/PaintTiming/PaintTiming';
import PageTesting from '../PuppeteerTestComponent/PageTesting/PageTesting';
import ToolTip from '../ToolTip/ToolTip';
import styles from '../PuppeteerTestComponent/PageTesting/PageTesting.module.scss';
import { PuppeteerTestCaseContext } from '../../context/reducers/puppeteerTestCaseReducer';
import { PuppeteerStatements } from '../../utils/puppeteerTypes';

const questionIcon = require('../../assets/images/help-circle.png');

const PuppeteerTestStatements = () => {
  const [{ puppeteerStatements }, dispatchToPuppeteerTestCase] = useContext(
    PuppeteerTestCaseContext
  );

  let testCount = 0;

  puppeteerStatements.forEach((statement: PuppeteerStatements, i: number) => {
    if (statement.type === 'pageTesting') testCount += 1;
  });

  // check out the puppeteerStatements and increment testCount accordingly
  console.log(puppeteerStatements, 'in PPTestStatements');

  return (
    <>
      <div id={styles.groupFlexbox}>
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
        <span>
          <div id={styles.inputFlexBox}>
            <label>Device</label>
            <input type='text' placeholder='eg iPhone X' />
          </div>
        </span>
      </div>
      {puppeteerStatements.map((statement: PuppeteerStatements, i: number) => {
        switch (statement.type) {
          case 'paintTiming':
            return <PaintTiming key={statement.id} paintTiming={statement} index={i} />;
          case 'pageTesting':
            testCount += 1;
            return <PageTesting key={statement.id} pageTesting={statement} index={i} />;
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default PuppeteerTestStatements;
