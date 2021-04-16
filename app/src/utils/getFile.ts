import {Platform} from 'react-native';

export const getFile = (file: {uri: string; type: string; name: string}) => {
  return {
    uri: Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
    type: file.type,
    name: file.name,
  };
};
