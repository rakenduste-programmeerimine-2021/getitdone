import Button from '@mui/material/Button';
import produce from "immer";
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Context, initialState } from "../webapp";
import { endSessAuth } from './TEMP_auth';

function LogoutButton() {
  //TODO fix this after new auth
  const [state, setState] = useContext(Context);
  const navigate = useNavigate();

  const handleLogoutBtn = () => {
    setState(
      produce((draft) => {
        draft.auth.email = null
        draft.auth.id = null
        draft.auth.token = null
        draft.auth.name = null
        endSessAuth()
        setState(initialState)
        navigate('../')
      })
    );
  }

  return (
    <Button onClick={ handleLogoutBtn }>Log out</Button>
  );
}

export default LogoutButton;