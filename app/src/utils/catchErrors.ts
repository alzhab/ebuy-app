import noticeMessageStore, {
  NoticeTypeEnum,
} from '../stores/NoticeMessageStore'

const storeCatchError = (error: any, call?: () => void) => {
  console.log(JSON.stringify(error, null, 2))
  if (error.response) {
    console.log('error: ', JSON.stringify(error, null, 2))
    error = error.response.data
  } else {
    error = { message: 'Something was wrong' }
  }

  if (call) {
    call()
  }

  noticeMessageStore.showMessage(
    error?.message || 'Something went wrong',
    NoticeTypeEnum.error,
  )
}

export default {
  storeCatchError,
}
