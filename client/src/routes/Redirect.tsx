import { useEffect } from 'react';
import { To, useNavigate } from 'react-router-dom';

function Redirect(props: { to: To }) {
  let navigate = useNavigate();
  useEffect(() => navigate('login'));
  return null;
}

export default Redirect;
