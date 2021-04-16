// @ts-ignore
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
} from 'react-native-image-picker/src/types';

export const getOptions = (title = 'Select Image'): any => {
  return {
    storageOptions: {
      skipBackup: true,
      path: 'images',
      quality: 1,
    },
  };
};

export const pickImage = (
  storage: 'camera' | 'library',
  cb: (data: {uri: string; name: string; type: string}) => void,
) => {
  const func = storage === 'camera' ? launchCamera : launchImageLibrary;

  func({mediaType: 'photo'}, (response: ImagePickerResponse) => {
    if (response.uri && response.type && response.fileName) {
      cb({uri: response.uri, type: response.type, name: response.fileName});
    }
  });
};
