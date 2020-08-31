import React, { useContext } from 'react';
import styles from './Endpoint.module.scss';
import stylez from '../ReactTestComponent/Assertion/Assertion.module.scss';
import { EndpointTestCaseContext } from '../../context/reducers/endpointTestCaseReducer';
import { deleteAssertion, updateAssertion } from '../../context/actions/endpointTestCaseActions';
import { GlobalContext } from '../../context/reducers/globalReducer';
import { openBrowserDocs } from '../../context/actions/globalActions';

const EndpointAssertion = ({ assertion, index, id }) => {
  const [, dispatchToEndpointTestCase] = useContext(EndpointTestCaseContext);
  const [, dispatchToGlobal] = useContext(GlobalContext);
  const jestMatchers = [
    '',
    'to Be',
    'to Equal (object)',
    'to Have Been Called',
    'to Have Been Called Times (number)',
    'to Have Been Called With (arg1,...)',
    'to Have Been Last Called With (arg1,...)',
    'to Have Been Nth Called With (nth call, arg1,...)',
    'to Have Length (number)',
    'to Have Property (keyPath, value[optional])',
    'to Be Close To (number, number of digits[optional])',
    'to Be Defined',
    'to Be Undefined',
    'to Be Falsy',
    'to Be Truthy',
    'to Be NaN',
    'to Be Greater Than (number)',
    'to Be Greater Than Or Equal (number)',
    'to Be Less Than (number)',
    'to Be Less Than Or Equal (number)',
    'to Be Instance Of (Class)',
    'to Contain (item in an array)',
    'to Contain Equal (an object in an array)',
    'to Match (regexp or string)',
    'to Match Object (object)',
    'to Srict Equal (object)',
    'to Throw (error[optional])',
  ];

  //for mock fuctions only:
  //   'to Have Returned',
  //   'to Have Returned __ Times (number)',
  //   'to Have Last Returned With',
  // ];

  const questionIcon = require('../../assets/images/help-circle.png');
  const closeIcon = require('../../assets/images/close.png');
  const jestURL = 'https://jestjs.io/docs/en/expect';

  const handleClickDeleteAssertion = () => {
    dispatchToEndpointTestCase(deleteAssertion(index, id));
  };

  const handleChangeUpdateAssertion = (e, field) => {
    const updatedAssertion =
      field === 'not'
        ? { ...assertion, [field]: !assertion[field] }
        : { ...assertion, [field]: e.target.value };
    dispatchToEndpointTestCase(updateAssertion(index, id, updatedAssertion));
  };

  const handleClickTooltip = () => {
    dispatchToGlobal(openBrowserDocs(jestURL));
  };

  return (
    <div id={styles.groupFlexboxAssertion}>
      <div id={styles.labelInput}>
        <label htmlFor='requestBody'>Expect Response</label>
        <div id={styles.inputFlexBox}>
          <input
            type='text'
            list='responseProperties'
            value={assertion.expectedResponse}
            onChange={(e) => handleChangeUpdateAssertion(e, 'expectedResponse')}
          />
          <datalist id='responseProperties'>
            <option value='Headers'></option>
            <option value='Status'></option>
            <option value='Body'></option>
            <option value='Message'></option>
            <option value='Length'></option>
          </datalist>
        </div>
      </div>
      <div id={styles.dropdownWrapper}>
        <div id={styles.endMatcherLabel}>
          <div>
            <label htmlFor='matcher'>Matcher</label>
          </div>
          <div id={styles.notDiv}>
            Not?
            <input type='checkbox' onChange={(e) => handleChangeUpdateAssertion(e, 'not')} />
          </div>
        </div>
        <div id={styles.dropdownFlex}>
          <select
            id='method'
            value={assertion.matcher}
            onChange={(e) => handleChangeUpdateAssertion(e, 'matcher')}
          >
            {jestMatchers.map((matcher) => (
              <option value={matcher}>{matcher}</option>
            ))}
          </select>{' '}
          <span id={stylez.hastooltip} role='tooltip'>
            <img src={questionIcon} alt='help' onClick={handleClickTooltip} />
            <span id={stylez.tooltip}>
              {/* <ToolTipMatcher toolTipType={statement.matcherType} /> */}
              Click me to find out more about Jest test matchers
            </span>
          </span>
        </div>
        {/* <div id={stylez.autoTool}>
      <input type='text' /> */}

        {/* </div> */}
      </div>
      <div id={styles.labelInput}>
        <label htmlFor='value'>Expected Value</label>
        <div id={styles.inputFlexBox}>
          <input
            type='text'
            name='value'
            placeholder='eg. 200'
            value={assertion.value}
            onChange={(e) => handleChangeUpdateAssertion(e, 'value')}
          />
        </div>
      </div>
      <img
        src={closeIcon}
        style={{ position: 'relative', top: '-15px' }}
        alt='close'
        onClick={handleClickDeleteAssertion}
      />
    </div>
  );
};

export default EndpointAssertion;
