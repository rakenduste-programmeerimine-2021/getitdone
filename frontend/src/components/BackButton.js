import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Fab from '@mui/material/Fab';
import React from "react";
import { useNavigate } from "react-router-dom";


function BackButton() {
  const navigate = useNavigate();
  return (
    <>
      <Fab onClick={() => navigate(-1)} sx={{ width: '45px', height: '45px' }} color="primary" aria-label="back" >
        <ArrowBackIosNewIcon />
      </Fab>
    </>
  );
};

export default BackButton