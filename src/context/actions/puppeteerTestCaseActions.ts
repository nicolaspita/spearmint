import { PuppeteerStatements } from '../../utils/puppeteerTypes';
import { act } from '@testing-library/react';

export const actionTypes = {
  TOGGLE_PUPPETEER: 'TOGGLE_PUPPETEER',
  CREATE_NEW_PUPPETEER_TEST: 'CREATE_NEW_PUPPETEER_TEST',
  DELETE_PUPPETEER_TEST: 'DELETE_PUPPETEER_TEST',
  ADD_PUPPETEER_PAINT_TIMING: 'ADD_PUPPETEER_PAINT_TIMING',
  ADD_PUPPETEER_PAGE_TESTING: 'ADD_PUPPETEER_PAGE_TESTING',
  SET_DEVICE_NAME: 'SET_DEVICE_NAME',
  SET_HEADLESS_MODE: 'SET_HEADLESS_MODE',
  ADD_ACTION: 'ADD_ACTION',
  ADD_BROWSER_OPTIONS: 'ADD_BROWSER_OPTIONS',
  UPDATE_PAINT_TIMING: 'UPDATE_PAINT_TIMING',
  DELETE_BROWSER_OPTION: 'DELETE_BROWSER_OPTION',
  UPDATE_BROWSER_OPTION: 'UPDATE_BROWSER_OPTION',
  UPDATE_STATEMENTS_ORDER: 'UPDATE_STATEMENTS_ORDER',
  OPEN_INFO_MODAL: 'OPEN_INFO_MODAL',
  CLOSE_INFO_MODAL: 'CLOSE_INFO_MODAL',
};

export const togglePuppeteer = () => ({
  type: actionTypes.TOGGLE_PUPPETEER,
});

export const createNewPuppeteerTest = () => ({
  type: actionTypes.CREATE_NEW_PUPPETEER_TEST,
});

export const deletePuppeteerTest = (id: number) => ({
  type: actionTypes.DELETE_PUPPETEER_TEST,
  id,
});

export const addPuppeteerPaintTiming = () => ({
  type: actionTypes.ADD_PUPPETEER_PAINT_TIMING,
});

export const addPuppeteerPageTesting = () => ({
  type: actionTypes.ADD_PUPPETEER_PAGE_TESTING,
});

export const setDeviceName = (value: string) => ({
  type: actionTypes.SET_DEVICE_NAME,
  value,
});

export const setHeadlessMode = (value: boolean) => ({
  type: actionTypes.SET_HEADLESS_MODE,
  value,
});

export const addAction = (index: number) => ({
  type: actionTypes.ADD_ACTION,
  index,
});

// add logic to handle updating Action
// export const updateAction = ()

export const addBrowserOption = (id: number) => ({
  type: actionTypes.ADD_BROWSER_OPTIONS,
  id,
});

export const deleteBrowserOption = (id: number, optionId: number) => ({
  type: actionTypes.DELETE_BROWSER_OPTION,
  id,
  optionId,
});

export const updatePaintTiming = (id: number, field: string, value: string) => ({
  type: actionTypes.UPDATE_PAINT_TIMING,
  id,
  field,
  value,
});

export const updateBrowserOption = (
  id: number,
  field: string,
  value: string,
  optionId: number
) => ({
  type: actionTypes.UPDATE_BROWSER_OPTION,
  id,
  field,
  value,
  optionId,
});

export const updateStatementsOrder = (draggableStatements: Array<PuppeteerStatements>) => ({
  type: actionTypes.UPDATE_STATEMENTS_ORDER,
  draggableStatements,
});

export const openInfoModal = () => {
  console.log('testCaseAction');
  return { type: actionTypes.OPEN_INFO_MODAL };
};

export const closeInfoModal = () => {
  return { type: actionTypes.CLOSE_INFO_MODAL };
};
