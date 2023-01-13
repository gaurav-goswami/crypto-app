import React from 'react';
import '../css/ErrorPage.css';
import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <Text color={'ButtonShadow'}>404 Page Not Found</Text>
      <Button><Link to = '/'>Go Home</Link></Button>
    </div>

  )
}

export default Error
