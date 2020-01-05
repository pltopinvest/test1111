import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default props => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Typography>
        <NavLink to={{pathname:props.link1Route}}>
          {props.link1} 
        </NavLink>
        <NavLink to={{pathname:props.link2Route}}>
          {props.link2} 
        </NavLink>
      </Typography>
    </Box>
  )
};