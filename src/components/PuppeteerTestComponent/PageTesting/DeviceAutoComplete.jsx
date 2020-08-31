import React from 'react';
import AutoSuggest from 'react-autosuggest';
// import styles from '.AutoComplete.module.scss'; update styles later
import { setDeviceName } from '../../../context/actions/puppeteerTestCaseActions';
import devices from './devices';

/*
 * after setting this up add a device field to the puppeteer reducer & context
 */

const DeviceAutoComplete = ({ statement, staementId, deviceName, dispatchToPuppeteerTestCase }) => {
  const handleChangeValue = (e, { newValue }) => {
    dispatchToPuppeteerTestCase(updateAssertion(updatedAssertion));
  };

  const inputProps = {
    placeholder: 'iPhone 8',
    value: '',
    onChange: handleChangeValue,
  };

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : devices.filter((device) => device.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    dispatchToPuppeteerTestCase(updateAssertion(updatedAssertion));
  };

  const onSuggestionsClearRequested = () => {
    if (statementType === 'action') {
      updatedAction.suggestions = [];
      dispatchToTestCase(updateAction(updatedAction));
    } else {
      updatedAssertion.suggestions = [];
      dispatchToTestCase(updateAssertion(updatedAssertion));
    }
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  return (
    <AutoSuggest
      // theme={styles}
      suggestions={statement.suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default DeviceAutoComplete;
