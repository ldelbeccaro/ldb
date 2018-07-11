import React from 'react'

const Items = ({items, item, onClickItem, onClickClose}) => (
  <div className='items'>
    {item.id !== 'default' &&
      <div className='selected-item'>
        {item.subheader}
        {item.logo}
        <div className='close' onClick={onClickClose}></div>
      </div>
    }
    {item.id === 'default' &&
      items.map(item => (
        <div
          key={item.id}
          className='item'
          onClick={() => onClickItem(item.idx)}
        >
          {item.subheader}
        </div>
      ))
    }
  </div>
)

export default Items
