import React from 'react';
import { useSelector } from 'react-redux';
import GrandSonBox from './GrandSonBox';

const Box = () => {
  let plus = useSelector((state) => state.plus);
  return (
    <div>
      This is plus numbers {plus}
      <GrandSonBox />
    </div>
  );
};

export default Box;
