import { action, makeAutoObservable } from 'mobx'
import categoriesApi, { ICategory } from '../api/categories.api'
import { catchErrors } from '@utils'

class SearchStore {
  loading = false
  categories: ICategory[] = []
  value: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  @action search = () => {
    if (this.value) {
      this.setLoading(true)
      categoriesApi
        .search(this.value)
        .then(res => {
          this.setCategories(res)
        })
        .catch(catchErrors.storeCatchError)
        .finally(() => this.setLoading(false))
    }
  }

  @action clear = () => {
    this.setValue('')
    this.setCategories([])
    this.setLoading(false)
  }

  @action setLoading = (val: boolean): void => {
    this.loading = val
  }

  @action setCategories = (val: ICategory[]): void => {
    this.categories = val
  }

  @action setValue = (val: string): void => {
    this.value = val
  }
}

const searchStore = new SearchStore()
export default searchStore
