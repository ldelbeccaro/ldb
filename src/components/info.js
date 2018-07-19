import React from 'react'

import '../styles/info.styl'

const Info = ({item, social}) => (
  <div className='info'>
    <div className={`type ${item.idx === 0 ? `slide-down` : `slide-up`}`}>
      {item.frontmatter.type}
    </div>
    <div className={`header ${item.idx === 0 ? `slide-down` : `slide-up`}`}>
      {item.frontmatter.title}
    </div>
    <div className={`header ${item.idx === 0 ? `slide-down` : `slide-up`}`}>
      {item.frontmatter.company}
    </div>
    <div className={`divider ${item.idx === 0 ? `slide-down` : `slide-up`}`}></div>
    <div
      className={`content ${item.idx === 0 ? `slide-down` : `slide-up`}`}
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  </div>
)

export default Info
