import noticeMessageStore, {NoticeTypeEnum} from '../stores/NoticeMessageStore';

const storeCatchError = (error: any, call?: () => void) => {
  if (error.response) {
    console.log('error: ', error);
    error = error.response.data;
  } else {
    error = {message: 'Something was wrong'};
  }

  if (call) {
    call();
  }

  noticeMessageStore.showMessage(error.message, NoticeTypeEnum.error);
};

export default {
  storeCatchError,
};
