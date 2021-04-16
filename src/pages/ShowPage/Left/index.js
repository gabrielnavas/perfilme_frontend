import React from 'react'

import './styles.css'

const Left = () =>
  <div className='left'>
    <div className='left__container'>
      <div className='perfil__photo'>
        <a href="https://github.com/gabrielnavas">
          <img alt='photo_avatar' src='https://avatars.githubusercontent.com/u/24739714?s=460&u=d258d5d7f94a9d952fb984a82ef8b9cc8e370680&v=4' /> 
        </a>
      </div>
  
      <div className='perfil__infos'>
        <span className='perfil__name'>Gabriel Navas</span>
        <span className='perfil__description'>Hello dear, I'm Gabriel and I love programming so much. </span>
      </div>
    </div>
  </div>

export default Left