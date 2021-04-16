import {action, makeAutoObservable} from 'mobx';

class ModalStore {
  modalProps = {
    show: false,
    children: () => null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action showModal = (children: () => any): void => {
    this.modalProps = {
      children,
      show: true,
    };
  };

  @action closeModal = (): void => {
    this.modalProps = {
      children: () => null,
      show: false,
    };
  };
}

const modalStore = new ModalStore();
export default modalStore;
