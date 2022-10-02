import React from 'react';
import { Box, Toolbar } from '@mui/material'
import PropagateData from '../PropagateData';
import data from '../../data/db.json';

function WebDev() {
  return (
    <div className='WebDev'>
      <Toolbar sx={{ minHeight: '20px !important' }} />
      <Box sx={{ width: "100%" }}>
        {PropagateData(data.webs)}
      </Box>
    </div>
  );
}

export default WebDev;