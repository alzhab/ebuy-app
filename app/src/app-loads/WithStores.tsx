import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import {
  authStore,
  byCategoryStore,
  cartStore,
  favoritesStore,
  homeStore,
  loadingStore,
  modalStore,
  noticeMessageStore,
  productStore,
  profileStore,
  searchStore,
} from '@stores'

const stores = {
  loadingStore,
  noticeMessageStore,
  modalStore,
  authStore,
  profileStore,
  homeStore,
  productStore,
  byCategoryStore,
  favoritesStore,
  searchStore,
  cartStore,
}

class WithStores extends Component {
  render() {
    return <Provider {...stores}>{this.props.children}</Provider>
  }
}

export default WithStores
