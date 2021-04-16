import React from 'react'

import './styles.css'

const SocialLink = ({linkUrl, imgUrl}) => (
  <div className='social_link'>
    <a href={linkUrl}>
      <img alt='' src={imgUrl} style={{width: '100px'}} />
    </a>
  </div>
)


const Right = () => {
  return (
    <div className='right'>
      <span className='title'>My social links</span>
      <div className='right__container'>
        <SocialLink 
          linkUrl="https://github.com/gabrielnavas" 
          imgUrl='https://github.githubassets.com/images/modules/logos_page/Octocat.png' 
        />

        <SocialLink 
          linkUrl="https://www.linkedin.com/in/gabriel-navas-3706a8144/" 
          imgUrl='https://image.flaticon.com/icons/png/512/174/174857.png' 
        />
        
        <SocialLink 
          linkUrl="https://twitter.com/gabrnavas" 
          imgUrl='https://image.flaticon.com/icons/png/512/124/124021.png' 
        />

        <SocialLink 
          linkUrl="https://www.instagram.com/gabrnavas/" 
          imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png' 
        />

        <SocialLink 
          linkUrl="https://www.hackerrank.com/gabrielnavas" 
          imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Hackerrank_meaningful_logo.svg/1200px-Hackerrank_meaningful_logo.svg.png' 
        />

        <SocialLink 
          linkUrl="https://www.urionlinejudge.com.br/judge/pt/profile/167302" 
          imgUrl='https://3.bp.blogspot.com/-YNs00L9J-8U/WK5HOc0eLjI/AAAAAAAAAC0/H3fsvz_tpaA0QRMNuxT5DLtOije3Qs8DACLcB/s1600/uri.png' 
        />

        <SocialLink 
          linkUrl="https://www.codewars.com/users/gabrielnavas" 
          imgUrl='https://camo.githubusercontent.com/5334ac63cec7844521712c1f88727711dc1dc6a8b2a6ea85612408869f8dfef9/687474703a2f2f7777772e736f66746c61622e6e7475612e67722f7e6e69636b69652f696d616765732f6c6f676f2f636f6465776172732e706e67' 
        />
      </div>
    </div>
  )
}

export default Right