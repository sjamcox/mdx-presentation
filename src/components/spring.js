import React, { useState } from 'react';
import {useSpring, animated} from 'react-spring';

const Spring = () => {
  const [toggle, setToggle] = useState(true);
  const props = useSpring({
    fontSize: toggle ? 100 : 200,
    color: toggle ? 'yellow' : 'black',
    padding: toggle ? '0px' : '30px',
    backgroundColor: toggle ? 'black' : 'yellow',
    borderRadius: '20px'
  });
  return <animated.div style={props} onClick={() => setToggle(!toggle)}>react-spring</animated.div>
};

export default Spring;