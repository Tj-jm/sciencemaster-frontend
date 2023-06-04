import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { toggleSidebar } from '../../slices/reducerSlices/uiSlice'
import { FaTimes } from 'react-icons/fa'
import  NavLinks  from './NavLinks'
import Logo from '../Logo'
const SmallSidebar = () => {
  const dispatch=useDispatch()
  const {showSidebar}=useSelector((state)=>state.ui)
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <aside className='smallsidebar'>
      <div
        className={
          showSidebar ? 
          'smallsidebar-sidebar-container  smallsidebar-show-sidebar' 
          : 'smallsidebar-sidebar-container'
        }
      >
        <div className='smallsidebar-content'>
          <button type='button' className='close-btn' onClick={handleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo className='nav-logo' />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  )
}

export default SmallSidebar