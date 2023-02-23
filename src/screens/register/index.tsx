import React from 'react';
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
import { IRegister } from '../../types/types';

const schema = yup.object({
  name: yup.string().min(3).max(50).required('Campo Obrigatorio'),
  email: yup.string().email().max(50).required('Campo Obrigatorio'),
  password: yup.string().min(8).max(20).required('Campo Obrigatior'),
}).required();

const Register: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleTouch = () => {
    console.log('touch');
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IRegister>({
    resolver: yupResolver(schema)
  });

  return(
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <FuncInput
            autoCorrect={false}
            icon='edit'
            type='text'
            placeholder='Digite seu Nome'
            onChange={onChange}
            value={value}
            Error={errors?.name}
          />
        )}
        name='name'
      />
      <Controller
        control={control}
        render={({ field: { onChange, value }}) => (
          <FuncInput
            autoCorrect={false}
            icon='email'
            type='email'
            placeholder='Digite seu E-mail'
            onChange={onChange}
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
            onChange={onChange}
            value={value}
            Error={errors?.password}
          />
        )}
        name='password'
      />
      <Btn
        onPress={() => navigation.navigate('SingIn')}
      >
        <Text>Já possui Cadastro ?</Text>
      </Btn>
      <Button
        text='Cadastrar'
        func={ handleTouch }
      />
    </Container>
  )
}

export default Register;
