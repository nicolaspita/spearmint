import React, { useContext } from 'react';
import styles from './Render.module.scss';
import { GlobalContext } from '../../../context/globalReducer';
import { TestCaseContext } from '../../../context/testCaseReducer';

import {
  deleteRender,
  updateRenderComponent,
  addRenderProp,
} from '../../../context/testCaseActions';
import RenderProp from './RenderProp';

const plusIcon = require('../../../assets/images/plus.png');
const closeIcon = require('../../../assets/images/close.png');
const dragIcon = require('../../../assets/images/drag-vertical.png');

const FirstRender = ({ render }) => {
  const [{ filePathMap }, _] = useContext(GlobalContext);
  const [{ statements }, dispatchToTestCase] = useContext(TestCaseContext);

  const handleChangeComponentName = e => {
    const componentName = e.target.value;
    dispatchToTestCase(updateRenderComponent(componentName, filePathMap[componentName]));
  };

  const handleToggleProps = () => {
    dispatchToTestCase(addRenderProp(render.id));
  };

  const handleClickAddProp = () => {
    dispatchToTestCase(addRenderProp(render.id));
  };

  const handleClickDeleteRender = e => {
    dispatchToTestCase(deleteRender(render.id));
  };

  const propsJSX = render.props.map(prop => {
    return (
      <RenderProp
        key={prop.id}
        renderId={render.id}
        propId={prop.id}
        propKey={prop.propKey}
        propValue={prop.propValue}
        dispatchToTestCase={dispatchToTestCase}
      />
    );
  });

  return (
    <section id={styles.render}>
      {render.id !== 0 ? (
        <img src={closeIcon} id={styles.closeBtn} alt='close' onClick={handleClickDeleteRender} />
      ) : (
        <p />
      )}
      <div id={styles.renderHeader}>
        {render.id !== 0 ? <img src={dragIcon} alt='drag' /> : <p />}
        <h3>{render.id === 0 ? 'Render' : 'Rerender'}</h3>
      </div>
      <div id={styles.renderBody}>
        <div>
          <label htmlFor='renderInputBox'>Component Name</label>
          <input
            type='text'
            id={styles.renderInputBox}
            value={statements[0].componentName}
            onChange={handleChangeComponentName}
          />
        </div>
        <div id={styles.renderCheckbox}>
          <input
            type='checkbox'
            id='render-checkbox'
            disabled={propsJSX.length}
            onClick={handleToggleProps}
          />
          <label htmlFor='render-checkbox'>Do you pass props ? </label>
        </div>
      </div>
      {propsJSX.length !== 0 && (
        <div>
          <div id={styles.renderProp}>
            <label htmlFor='prop-key' id={styles.propKeyLabel}>
              Prop key
            </label>
            <label htmlFor='prop-value' id={styles.propValLabel}>
              Prop value
            </label>
          </div>
          <hr />
          {propsJSX}
          <div id={styles.props}>
            <button id={styles.addPropBtn} onClick={handleClickAddProp}>
              <img src={plusIcon} alt='add' />
              Add Prop
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default FirstRender;
