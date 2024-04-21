import React from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const AuthForm = ({ type }) => {
  const isLogin = type === 'login';
  return (
    <FormControl>
      <FormLabel>{isLogin ? 'Email' : 'Username'}</FormLabel>
      <Input type={isLogin ? 'email' : 'text'} />
      <FormLabel>Password</FormLabel>
      <Input type='password' />
      <Button mt={4} colorScheme='teal' type='submit'>{isLogin ? 'Login' : 'Register'}</Button>
    </FormControl>
  );
};

export default AuthForm;