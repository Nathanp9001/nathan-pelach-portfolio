import { useState } from 'react';

import { NavBar } from '../nav-bar-view/nav-bar';
import { InfoView } from '../info-view/info-view';

export const MainView = () => {

  return (
    <div className='portfolio'>
      <NavBar />
      <InfoView />
    </div>
  )
}