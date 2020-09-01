import { createContext } from 'react';
import { PuppeteerTestCaseState, PuppeteerAction, Action } from '../../utils/puppeteerTypes';
import { create } from 'react-test-renderer';
//import { actionTypes } from '../actions/puppeteerTestCaseActions';
export const PuppeteerTestCaseContext = createContext<any>(null);

export const puppeteerTestCaseState = {
  puppeteerStatements: [],
  statementId: 0,
  deviceName: '',
  headlessMode: true,
  modalOpen: false,
};

const createPuppeteerPaintTiming = (statementId: number) => ({
  id: statementId,
  type: 'paintTiming',
  url: '',
  describe: '',
  test: '',
  browserOptions: [],
  firstPaintIt: '',
  firstPaintTime: null,
  FCPIt: '',
  FCPtTime: null,
  LCPIt: '',
  LCPTime: null,
  hasBrowserOption: false,
  browserOptionId: 0,
});

const createBrowserOption = (browserOptionId: number) => ({
  id: browserOptionId,
  optionKey: '',
  optionValue: '',
});

const createPuppeteerPageTest = (statementId: number) => ({
  id: statementId,
  type: 'pageTesting',
  url: '',
  describe: '',
  test: '',
  browserOptions: [],
  firstPaintIt: '',
  firstPaintTime: null,
  FCPIt: '',
  FCPtTime: null,
  LCPIt: '',
  LCPTime: null,
  hasBrowserOption: false,
  browserOptionId: 0,
  actions: [],
  actionId: 0,
});

const createNewAction = (actionId: number) => ({
  id: 0,
  element: '',
  action: '',
  input: '',
});
export const puppeteerTestCaseReducer = (
  state: PuppeteerTestCaseState,
  action: PuppeteerAction
) => {
  Object.freeze(state);
  let puppeteerStatements = [...state.puppeteerStatements];
  console.log('in reducer', state);
  console.log('in reducer puppStatements', puppeteerStatements);

  switch (action.type) {
    case 'DELETE_PUPPETEER_TEST':
      // look for type of statement
      puppeteerStatements = puppeteerStatements.filter((statement) => statement.id !== action.id);
      return {
        ...state,
        puppeteerStatements,
      };

    case 'ADD_PUPPETEER_PAINT_TIMING': {
      const newPuppeteerPaintTiming = createPuppeteerPaintTiming(state.statementId);
      return {
        ...state,
        puppeteerStatements: [...puppeteerStatements, newPuppeteerPaintTiming],
        statementId: state.statementId + 1,
      };
    }

    case 'CREATE_NEW_PUPPETEER_TEST':
      return {
        puppeteerStatements: [
          {
            id: 0,
            type: '',
            describe: '',
            test: '',
            url: '',
            browserOptions: [],
            firstPaintIt: '',
            firstPaintTime: null,
            FCPIt: '',
            FCPtTime: null,
            LCPIt: '',
            LCPTime: null,
            hasBrowserOption: false,
            browserOptionId: 0,
            actions: [],
          },
        ],
        statementId: 0,
        deviceName: '',
        headlessMode: true,
        modalOpen: false,
      };

    case 'SET_DEVICE_NAME': {
      const device = action.value;
      return {
        ...state,
        deviceName: device,
      };
    }

    case 'SET_HEADLESS_MODE': {
      const headlessValue = action.value;
      let headless;
      if (headlessValue === 'On') headless = true;
      else {
        headless = false;
      }
      return {
        ...state,
        headlessMode: headless,
      };
    }

    case 'ADD_PUPPETEER_PAGE_TESTING': {
      const newPuppeteerPageTest = createPuppeteerPageTest(state.statementId);
      return {
        ...state,
        puppeteerStatements: [...puppeteerStatements, newPuppeteerPageTest],
        statementId: state.statementId + 1,
      };
    }

    case 'ADD_ACTION': {
      const newAction = createNewAction(action.index);
      puppeteerStatements = puppeteerStatements.map((statement) => {
        if (statement.id === action.index) {
          newAction.id = statement.actionId;
          statement.actions.push(newAction);
          statement.actionId += 1;
        }
        return statement;
      });
      return {
        ...state,
        puppeteerStatements,
      };
    }

    case 'DELETE_ACTION': {
      puppeteerStatements = puppeteerStatements.map((statement) => {
        // if (statement.id === action.index) {

        // }
        return statement;
      });
      return {
        ...state,
      };
    }

    case 'UPDATE_PAGE_TEST': {
      puppeteerStatements = puppeteerStatements.map((statement) => {
        if (statement.id === action.id) {
          // this needs more logic to find the appropriate action, then replace the field
          statement[action.field] = action.value;
        }
        return statement;
      });
      return {
        ...state,
        puppeteerStatements,
      };
    }

    case 'UPDATE_TEST_DESCRIPTION': {
      puppeteerStatements = puppeteerStatements.map((statement) => {
        if (statement.id === action.id) {
          statement[action.field] = action.value;
        }
        return statement;
      });
      return {
        ...state,
        puppeteerStatements,
      };
    }

    case 'DELETE_BROWSER_OPTION':
      puppeteerStatements = puppeteerStatements.map((statement) => {
        if (statement.id === action.id) {
          const newBrowserOptions = statement.browserOptions.filter(
            (option) => option.id !== action.optionId
          );
          if (newBrowserOptions.length === 0) {
            return {
              ...statement,
              browserOptions: newBrowserOptions,
              hasBrowserOption: false,
            };
          }
          return {
            ...statement,
            browserOptions: newBrowserOptions,
          };
        }
        return statement;
      });
      return {
        ...state,
        puppeteerStatements,
      };

    case 'UPDATE_PAINT_TIMING':
      puppeteerStatements = puppeteerStatements.map((statement) => {
        if (statement.id === action.id) {
          statement[action.field] = action.value;
        }
        return statement;
      });
      return {
        ...state,
        puppeteerStatements,
      };

    case 'ADD_BROWSER_OPTIONS':
      puppeteerStatements = puppeteerStatements.map((statement) => {
        if (statement.id === action.id) {
          const newBrowserOption = createBrowserOption(statement.browserOptionId);
          return {
            ...statement,
            hasBrowserOption: true,
            browserOptions: [...statement.browserOptions, newBrowserOption],
            browserOptionId: statement.browserOptionId + 1,
          };
        }
        return statement;
      });
      return {
        ...state,
        puppeteerStatements,
      };

    case 'UPDATE_BROWSER_OPTION':
      puppeteerStatements = puppeteerStatements.map((statement) => {
        if (statement.id === action.id) {
          statement.browserOptions.map((option) => {
            if (option.id === action.optionId) {
              option[action.field] = action.value;
            }
            return option;
          });
        }
        return statement;
      });
      return {
        ...state,
        puppeteerStatements,
      };

    case 'UPDATE_STATEMENTS_ORDER':
      return {
        ...state,
        puppeteerStatements: [...action.draggableStatements],
      };
    case 'OPEN_INFO_MODAL':
      return {
        ...state,
        modalOpen: true,
      };
    case 'CLOSE_INFO_MODAL':
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};
