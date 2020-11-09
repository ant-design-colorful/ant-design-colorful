/**
 * desc: 填充背景颜色。
 */

import React from 'react';
import { Pagination } from 'antd';
import './solid.less';

const App = () => {
  const [current, setCurrent] = React.useState(1);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  return (
    <>
      <Pagination
        size="small"
        className="antd-colorful pagination-solid"
        defaultCurrent={1}
        current={current}
        onChange={onChange}
        total={70}
        showSizeChanger={false}
      />
      <Pagination
        size="small"
        className="antd-colorful pagination-solid color-warning"
        defaultCurrent={1}
        current={current}
        onChange={onChange}
        total={70}
        showSizeChanger={false}
      />
      <Pagination
        size="small"
        className="antd-colorful pagination-solid color-danger"
        defaultCurrent={1}
        current={current}
        onChange={onChange}
        total={70}
        showSizeChanger={false}
      />
    </>
  );
};

export default App;
