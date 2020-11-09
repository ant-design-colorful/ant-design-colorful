/**
 * desc: 多彩的颜色。
 */

import React from 'react';
import { Pagination } from 'antd';
import './color.less';
import './demo.less';

const App = () => {
  const [current, setCurrent] = React.useState(1);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  return (
    <>
      <Pagination
        size="small"
        className="antd-colorful pagination-colorful"
        defaultCurrent={1}
        current={current}
        onChange={onChange}
        total={70}
        showSizeChanger={false}
      />
      <Pagination
        className="antd-colorful pagination-colorful"
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
