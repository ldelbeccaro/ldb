import React from 'react'
import Header from '../components/header'
import Info from '../components/info'
import Items from '../components/items'

import '../styles/page.styl'

class IndexPage extends React.Component {
  constructor() {
    super()

    this.state = {
      item: 0,
      prevItem: 0,
    }

    this.onClickItem = this.onClickItem.bind(this)
    this.onClickClose = this.onClickClose.bind(this)
  }

  componentDidMount() {
    window.mixpanel.track('Page Viewed')
  }

  onClickItem(itemIdx) {
    window.scrollTo(0, 0)
    this.setState({item: itemIdx, prevItem: 0})

    if (typeof window !== `undefined`) {
      const item = this.props.data.allMarkdownRemark.edges[itemIdx].node.frontmatter
      window.mixpanel.track('Item Clicked', {
        'Item Index': itemIdx,
        'Item Title': item.title,
        'Item Company': item.company,
        'Item Type': item.type,
      })
    }
  }

  onClickClose() {
    window.scrollTo(0, 0)
    // set item to default
    this.setState(state => ({prevItem: state.item, item: 0}))
  }

  render() {
    const items = this.props.data.allMarkdownRemark.edges.map((item, idx) => {
      const indexedItem = item.node
      indexedItem.idx = idx
      return indexedItem
    })
    return (
      <div className='page'>
        <div className='info-section'>
          <Header />
          <Info item={items[this.state.item]} />
        </div>
        <Items
          items={items}
          selectedItem={this.state.item}
          prevItem={this.state.prevItem}
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
    allMarkdownRemark(sort: {fields: [frontmatter___end], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            type
            title
            company
            logo {
              publicURL
              name
            }
          }
          html
        }
      }
    }
  }
`
