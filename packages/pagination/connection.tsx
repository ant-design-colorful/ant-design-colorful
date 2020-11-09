/**
 * desc: 页数连续展示。
 */

import React from 'react';
import { Pagination } from 'antd';
import './connection.less';

const App = () => {
  const [current, setCurrent] = React.useState(1);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  return (
    <>
      <Pagination
        className="antd-colorful pagination-connection"
        defaultCurrent={1}
        total={100}
        current={current}
        onChange={onChange}
        showSizeChanger={false}
      />
      <Pagination
        className="antd-colorful pagination-connection color-purple"
        defaultCurrent={1}
        total={100}
        current={current}
        onChange={onChange}
        showSizeChanger={false}
      />
      <Pagination
        className="antd-colorful pagination-connection color-magenta"
        defaultCurrent={1}
        total={100}
        current={current}
        onChange={onChange}
        showSizeChanger={false}
      />
      <Pagination
        className="antd-colorful pagination-connection color-green"
        defaultCurrent={1}
        total={100}
        current={current}
        onChange={onChange}
        showSizeChanger={false}
      />
    </>
  );
};

export default App;
