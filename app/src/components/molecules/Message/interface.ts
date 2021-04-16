import {NoticeTypeEnum} from '../../../stores/NoticeMessageStore';

export interface Props {
  text: string;
  show: boolean;
  type: NoticeTypeEnum
}
