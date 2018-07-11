import React from 'react'
import SocialLinks from '../components/social-links'

const Info = ({item, social}) => (
  <div className='info'>
    <div className='type'>{item.type}</div>
    <h2>{item.header}</h2>
    <div className='subheader'>{item.subheader}</div>
    <div className='divider'></div>
    {item.content}
    {social &&
      <SocialLinks />
    }
  </div>
)

export default Info
