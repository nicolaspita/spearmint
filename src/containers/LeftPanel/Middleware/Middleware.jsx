import React, { useContext } from 'react';
import styles from '../Middleware/Middleware.module.scss';
import { GlobalContext } from '../../../context/globalReducer';
import {
  deleteMiddleware,
  updateMiddleware,
  updateMiddlewaresFilePath,
} from '../../../context/reduxTestCaseActions';
import { Draggable } from 'react-beautiful-dnd';
import ToolTip from '../ToolTip/ToolTip';
const questionIcon = require('../../../assets/images/help-circle.png');
const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');

const Middleware = ({ middleware, index, dispatchToReduxTestCase }) => {
  const [{ filePathMap }, _] = useContext(GlobalContext);

  const handleChangeMiddlewareFields = (e, field) => {
    let updatedMiddleware = { ...middleware };
    updatedMiddleware[field] = e.target.value;
    dispatchToReduxTestCase(updateMiddleware(updatedMiddleware));
  };

  const handleClickDeleteMiddleware = e => {
    dispatchToReduxTestCase(deleteMiddleware(middleware.id));
  };

  const handleChangeMiddlewaresFileName = e => {
    const middlewaresFileName = e.target.value;
    const filePath = filePathMap[middlewaresFileName] || '';
    dispatchToReduxTestCase(updateMiddlewaresFilePath(middlewaresFileName, filePath));
  };

  return (
    <Draggable draggableId={middleware.id.toString()} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id={styles.middleware}
        >
          <img
            src={closeIcon}
            id={styles.close}
            alt='close'
            onClick={handleClickDeleteMiddleware}
          />

          <div id={styles.middlewareHeader}>
            <img src={dragIcon} alt='drag' />
            <h3>Middleware</h3>
          </div>

          <div id={styles.eventTypeFlexBox}>
            <div id={styles.middlewareBox}>
              <label htmlFor='typesFile'>Import Middleware From</label>
              <input
                type='text'
                id={styles.renderInputBox}
                placeholder='File Name'
                value={middleware.middlewaresFile}
                onChange={handleChangeMiddlewaresFileName}
              />
            </div>
          </div>

          <div >
              <div id={styles.dropdownFlex}>
                <div id={styles.middlewareDrop}>
                <label htmlFor='typesFile'>Query Value</label>
                  <select
                    id='queryValue'
                    onChange={e => handleChangeMiddlewareFields(e, 'queryValue')}
                  >
                    {' '}
                    <option value='' />
                    <option value='passes_non_functional_arguments'>
                      passes_non_functional_arguments
                    </option>
                    <option value='calls_the_function'>calls_the_function</option>
                    <option value='passes_functional_arguments'>passes_functional_arguments</option>
                  </select>
                </div>

                <div id={styles.middlewareDrop}>
                <label htmlFor='typesFile'>Query Variant</label>
                  <select
                    id='queryVariant'
                    onChange={e => handleChangeMiddlewareFields(e, 'queryVariant')}
                  >
                    <option value='' />
                    <option value='toBeCalled'>toBeCalled</option>
                    <option value='toHaveBeenCalled'>toHaveBeenCalled</option>
                    <option value='toHaveBeenCalledWith'>toHaveBeenCalledWith</option>
                    <option value='toHaveBeenLastCalledWith'>toHaveBeenLastCalledWith</option>
                  </select>
                </div>

                <div id={styles.middlewareDrop}>
                <label htmlFor='typesFile'>Query Selector</label>
                  <select
                    id='querySelector'
                    onChange={e => handleChangeMiddlewareFields(e, 'querySelector')}
                  >
                    <option value='' />
                    <option value='next'>next</option>
                    <option value='function'>function</option>
                    <option value='store.Dispatch'>store.Dispatch</option>
                    <option value='store.GetState'>store.GetState</option>
                  </select>
                </div>
              </div>

                <div id={styles.middlewareBox}>
                <label htmlFor='typesFile'>Query Type</label>
                <input
                  id='queryType'
                  placeholder='eg. thunk'
                  onChange={e => handleChangeMiddlewareFields(e, 'queryType')}
                ></input>
                </div>
          </div>

        </div>
      )}
    </Draggable>
  );
};

export default Middleware;