import React, { useContext } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from '../context/ThemeContext'

const Switches = () => {

  const { isBoxed, toggleBoxed } = useContext(ThemeContext);

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={isBoxed} onChange={toggleBoxed} name="borderSwitch" />}
        label="Add Box"
      />
    </FormGroup>
  );
}

export default Switches;