import React from 'react'

import '../styles/items.styl'

const Items = ({items, selectedItem, prevItem, onClickItem, onClickClose}) => (
  <div className='items'>
    {items.slice(1).map(item => {
      const selected = selectedItem === item.idx
      const nonselected = selectedItem && selectedItem !== 0
      const unselected = selectedItem === 0 && prevItem === item.idx
      const prevNonselected = selectedItem === 0 && prevItem !== item.idx

      let selectedClassName = ``
      if (selected) {
        selectedClassName = `selected-item zoom-in`
      } else if (nonselected) {
        selectedClassName = `zoom-out`
      } else if (unselected) {
        selectedClassName = `zoom-back-out`
      } else if (prevNonselected) {
        selectedClassName = `zoom-back-in`
      }

      return (
        <div className='item-container' key={item.id}>
          <div
            className={`item ${selectedClassName}`}
            onClick={() => onClickItem(item.idx)}
          >
            <img className={`item-logo ${item.frontmatter.logo.name}`} src={item.frontmatter.logo.publicURL} />
          </div>
          {selectedItem === item.idx &&
            <div className='close' onClick={onClickClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
          }
        </div>
      )
    })}
  </div>
)

export default Items
