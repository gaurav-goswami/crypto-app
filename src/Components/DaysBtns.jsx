import React from 'react';
import { Flex , HStack, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {getDays} from '../redux/actions/actions'


const DaysBtns = () => {

  const dispatch = useDispatch();
  
  const handleClick = (data) => {
    dispatch(getDays(data));
  }

  return (
    <>
        <Flex>
            <HStack margin={'4rem auto 0'}>
                <Button onClick = {() => handleClick(1)} size={'sm'}>1d</Button>
                <Button onClick = {() => handleClick(7)} size={'sm'}>7d</Button>
                <Button onClick = {() => handleClick(15)} size={'sm'}>15d</Button>
                <Button onClick = {() => handleClick(30)} size={'sm'}>30d</Button>
                <Button onClick = {() => handleClick(60)} size={'sm'}>60d</Button>
                <Button onClick = {() => handleClick(120)} size={'sm'}>120d</Button>
                <Button onClick = {() => handleClick(365)} size={'sm'}>365d</Button>
            </HStack>
        </Flex>
    </>
  )
}

export default DaysBtns
