import React from 'react';
import { useSelector } from 'react-redux';

const GrandSonBox = () => {
  let minus = useSelector((state) => state.minus);
  return <div>This is minus numbers {minus}</div>;
};

export default GrandSonBox;
