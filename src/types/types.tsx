import {
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export interface IButton {
  func: () => void;
  text: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  password: string;
}

export interface IProvider {
  children: any;
}

export interface TextInputProps extends RNTextInputProps {
  icon?: keyof typeof Entypo.glyphMap;
  type: string;
  Error: any;
}

export interface ILoginContext {
  isLogged: boolean;
  failedTryLogin: boolean;
  setFailedTryLogin: (arg: boolean) => void;
  setIsLogged: (arg: boolean) => void;
}
