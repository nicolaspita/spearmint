import React, { useContext } from 'react';
import PaintTiming from '../PuppeteerTestComponent/PaintTiming/PaintTiming';
import PageTesting from '../PuppeteerTestComponent/PageTesting/PageTesting';
import { PuppeteerTestCaseContext } from '../../context/reducers/puppeteerTestCaseReducer';
import { PuppeteerStatements } from '../../utils/puppeteerTypes';

const PuppeteerTestStatements = () => {
  const [{ puppeteerStatements }] = useContext(PuppeteerTestCaseContext);

  return (
    <>
      {puppeteerStatements.map((statement: PuppeteerStatements, i: number) => {
        switch (statement.type) {
          case 'paintTiming':
            return <PaintTiming key={statement.id} paintTiming={statement} index={i} />;
          case 'formTesting':
            return <PageTesting key={statement.id} formTesting={statement} index={i} />;
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default PuppeteerTestStatements;
