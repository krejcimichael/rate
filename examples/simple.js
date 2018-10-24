/* eslint no-console: 0 */
import Rate from 'cc-rate';
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/index.less';

function onChange(v) {
  console.log('selected star', v);
}

ReactDOM.render(
  <div style={{ margin: 100 }}>
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 40 }}
      allowHalf
      allowClear={false}
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 50, marginTop: 24 }}
      allowHalf
      character={new Array("*", "$")}
    />
    <br />
    <Rate
      defaultValue={2.5}
      onChange={onChange}
      style={{ fontSize: 50, marginTop: 24 }}
      allowHalf
      character={new Array(<i className="anticon anticon-star" />)}
    />
    <br />
    <Rate
      defaultValue={2}
      onChange={onChange}
      style={{ fontSize: 50, marginTop: 24 }}
      character={new Array(<i className="anticon anticon-star" />)}
    />
    <br />
    {/* <Rate
      defaultValue={1}
      onChange={onChange}
      count={4}
      style={{ fontSize: 50, marginTop: 24 }}
      character={new Array(<FontAwesomeIcon icon={faFrown} />, <FontAwesomeIcon icon={faMeh} />, <FontAwesomeIcon icon={faSmile} />, <FontAwesomeIcon icon={faGrin} />)}
    />
    <br />
    <Rate
      defaultValue={2}
      onChange={onChange}
      count={4}
      style={{ fontSize: 50, marginTop: 24 }}
      character={new Array(<FontAwesomeIcon icon={faFrown} />, <FontAwesomeIcon icon={faMeh} />, <FontAwesomeIcon icon={faSmile} />, <FontAwesomeIcon icon={faGrin} />)}
    />
    <br />
    <Rate
      defaultValue={3}
      onChange={onChange}
      count={4}
      style={{ fontSize: 50, marginTop: 24 }}
      character={new Array(<FontAwesomeIcon icon={faFrown} />, <FontAwesomeIcon icon={faMeh} />, <FontAwesomeIcon icon={faSmile} />, <FontAwesomeIcon icon={faGrin} />)}
    />
    <br />
    <Rate
      defaultValue={4}
      onChange={onChange}
      count={4}
      style={{ fontSize: 50, marginTop: 24 }}
      character={new Array(<FontAwesomeIcon icon={faFrown} />, <FontAwesomeIcon icon={faMeh} />, <FontAwesomeIcon icon={faSmile} />, <FontAwesomeIcon icon={faGrin} />)}
    /> */}
  </div>
, document.getElementById('__react-content'));
