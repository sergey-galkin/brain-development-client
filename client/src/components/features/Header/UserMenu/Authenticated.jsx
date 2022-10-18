import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLogoutMutation } from '../../../../api/apiSlice';
import NavButton from '../../Buttons/NavButton/NavButton';
import CustomLink from '../CustomLink/CustomLink';

const Authenticated = ({ login, closeMobileMenu }) => {
  const [logout, {}] = useLogoutMutation();
  const isDesktop = useMediaQuery({minWidth: 768});

  return (
    <>
      <span onClick={closeMobileMenu}>
        <CustomLink path={'profile/' + login}>{login}</CustomLink>
      </span>
      {
        isDesktop && <div style={{'padding': '10px 0'}}>|</div>
      }
      <NavButton handleClick={() => logout()}>Выйти</NavButton>
    </>
  );
}

export default Authenticated;
