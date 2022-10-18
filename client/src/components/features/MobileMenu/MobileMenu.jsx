import React from 'react'
import CustomLink from '../Header/CustomLink/CustomLink'
import css from './MobileMenu.module.css'
import { routes } from '../../../router/router'
import Authenticated from '../Header/UserMenu/Authenticated'
import Anonymous from '../Header/UserMenu/Anonymous'
import { useIdentificationQuery } from '../../../api/apiSlice'

const MobileMenu = ({ closeMenu }) => {
  const { data: user, isLoading } = useIdentificationQuery();

  const UserMenu = user
    ? <Authenticated login={user.login} closeMobileMenu={closeMenu} />
    : isLoading
    ? null
    : <Anonymous />
  ;

  const separator = <div className={css.separator} />

  return (
    <div className={css.container}>
      <ul className={css.list}>
        { 
          routes.map( route =>
            <li key={route.caption} onClick={closeMenu}>
              <CustomLink path={route.path}>{route.caption}</CustomLink>
            </li>
          )
        }
      </ul>
      { separator }
      { UserMenu }
    </div>
  )
}

export default MobileMenu