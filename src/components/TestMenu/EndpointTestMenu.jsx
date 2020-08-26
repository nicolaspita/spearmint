import React, { useContext } from 'react';
import { GlobalContext } from '../../context/reducers/globalReducer';
import {
  openBrowserDocs,
  toggleRightPanel,
  updateFile,
  setFilePath,
} from '../../context/actions/globalActions';
import styles from './TestMenu.module.scss';
import Modal from '../Modals/Modal';
import { addEndpoint, createNewEndpointTest } from '../../context/actions/endpointTestCaseActions';
import useGenerateTest from '../../context/useGenerateTest';
import { EndpointTestCaseContext } from '../../context/reducers/endpointTestCaseReducer';
import useToggleModal from './testMenuHooks';

// child component of EndPointTest menu. has NewTest and Endpoint buttons
const EndpointTestMenu = () => {
  const [{ endpointStatements, endpointTestStatement }, dispatchToEndpointTestCase] = useContext(
    EndpointTestCaseContext
  );
  const [{ projectFilePath, file, exportBool }, dispatchToGlobal] = useContext(GlobalContext);
  const { title, isModalOpen, openModal, openScriptModal, closeModal } = useToggleModal('endpoint');
  const generateTest = useGenerateTest('endpoint', projectFilePath);

  // Endpoint testing docs url
  const endpointUrl = 'https://www.npmjs.com/package/supertest';

  const handleAddEndpoint = (e) => {
    dispatchToEndpointTestCase(addEndpoint());
  };

  const openDocs = () => {
    dispatchToGlobal(openBrowserDocs(endpointUrl));
  };

  const fileHandle = () => {
    dispatchToGlobal(updateFile(generateTest({ endpointTestStatement, endpointStatements })));
    dispatchToGlobal(toggleRightPanel('codeEditorView'));
    dispatchToGlobal(setFilePath(''));
  };

  if (!file && exportBool) {
    dispatchToGlobal(updateFile(generateTest({ endpointTestStatement, endpointStatements })));
  }

  return (
    <div id='test'>
      <div id={styles.testMenu}>
        <div id={styles.left}>
          <button onClick={openModal}>New Test +</button>
          <button id={styles.preview} onClick={fileHandle}>
            Preview
          </button>
          <button id={styles.example} onClick={openScriptModal}>
            Run Test
          </button>
          <button id={styles.example} onClick={openDocs}>
            Need Help?
          </button>
          <Modal
            // passing methods down as props to be used when TestModal is opened
            title={title}
            dispatchToMockData={null}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            dispatchTestCase={title === 'New Test' ? dispatchToEndpointTestCase : null}
            createTest={title === 'New Test' ? createNewEndpointTest : null}
          />
        </div>
        <div id={styles.right}>
          <button data-testid='endPointButton' onClick={handleAddEndpoint}>
            Endpoint
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndpointTestMenu;
