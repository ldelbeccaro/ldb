import React from 'react'
import Header from '../components/header'
import Info from '../components/info'
import Items from '../components/items'

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      item: 0,
    }

    this.onClickItem = this.onClickItem.bind(this)
    this.onClickClose = this.onClickClose.bind(this)
  }

  onClickItem(itemIdx) {
    this.setState({item: itemIdx})
  }

  onClickClose() {
    // set to default
    this.setState({item: 0})
  }

  render() {
    const items = this.props.data.allExperienceJson.edges.map((item, idx) => {
      const indexedItem = item.node
      indexedItem.idx = idx
      return indexedItem
    })
    console.log(items)
    return (
      <div>
        <Header />
        <Info
          item={items[this.state.item]}
          social={this.state.item === 0}
        />
        <Items
          items={items}
          item={items[this.state.item]}
          onClickItem={this.onClickItem}
          onClickClose={this.onClickClose}
        />
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
  query ItemData {
    allExperienceJson {
      edges {
        node {
          id
          type
          header
          subheader
          content
        }
      }
    }
  }
`
