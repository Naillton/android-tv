import React, { useContext } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  Btn,
  Text
} from './styles';
import Button from '../../components/button';
import FuncInput from '../../components/input';
import { RootStackParamList } from '../../routes/types';
import { ILogin, ILoginContext } from '../../types/types';
import MyContext from '../../context/MyContext';

const schema = yup.object({
  email: yup.string().email().max(50).required('Campo Obrigatorio'),
  password: yup.string().min(8).max(20).required('Campo Obrigatorio'),
}).required();

const SigIn: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {
    failedTryLogin,
    setFailedTryLogin,
    setIsLogged
  } = useContext(MyContext) as ILoginContext;

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>({
    resolver: yupResolver(schema)
  });

  const handleLogin = (data: ILogin) => {
    try {
      setIsLogged(true)
      setFailedTryLogin(false)
    } catch (e) {
      setIsLogged(false)
      setFailedTryLogin(true)
    }
  }

  return(
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <FuncInput
            autoCorrect={false}
            icon='email'
            type='email'
            placeholder='Digite seu E-mail'
            onChangeText={onChange}
            value={value}
            Error={errors?.email}
          />
        )}
        name='email'
      />
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <FuncInput
            autoCorrect={false}
            icon='eye-with-line'
            type='password'
            placeholder='Digite sua Senha'
            onChangeText={onChange}
            value={value}
            Error={errors?.password}
          />
        )}
        name='password'
      />
      <Btn
        onPress={() => navigation.navigate('SingUp')}
      >
        <Text>Ainda não tem Cadastro ?</Text>
      </Btn>
      {
        failedTryLogin
        ? (
          <Text>E-mail ou senha incorretos</Text>
        ) : null
      }
      <Button
        text='Login'
        func={ handleSubmit(handleLogin) }
      />
    </Container>
  )
}

export default SigIn;
