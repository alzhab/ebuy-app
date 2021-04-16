import {ReactElement} from 'react';

export interface InputContainerProps {
  label: string;
  help?: string;
  error?: string;
  children?: any;
  valid?: boolean;
}
