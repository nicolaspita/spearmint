import React, { useContext } from 'react';
import PaintTiming from '../PuppeteerTestComponent/PaintTiming/PaintTiming';
import FormTesting from '../PuppeteerTestComponent/PageTesting/FormTesting';
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
            return <FormTesting key={statement.id} formTesting={statement} index={i} />;
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default PuppeteerTestStatements;
