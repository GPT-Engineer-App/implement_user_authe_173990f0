import React from 'react';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box p={4}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' />
        <FormLabel>Password</FormLabel>
        <Input type='password' />
        <Button mt={4} colorScheme='teal' type='submit'>Login</Button>
      </FormControl>
    </Box>
  );
};

export default Login;