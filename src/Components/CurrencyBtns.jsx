import React from 'react';
import { Flex , HStack, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {getCurrencyType} from '../redux/actions/actions'


const CurrencyBtns = () => {

  const dispatch = useDispatch();
  
  const handleClick = (data) => {
    dispatch(getCurrencyType(data));
  }

  return (
    <>
        <Flex>
            <HStack margin={'4rem auto 0'}>
                <Button onClick = {() => handleClick('usd')} size={'sm'}>&#36; usd</Button>
                <Button onClick = {() => handleClick('inr')} size={'sm'}>&#8377; inr</Button>
                <Button onClick = {() => handleClick('eur')} size={'sm'}>&#8364; euro</Button>
                <Button onClick = {() => handleClick('jpy')} size={'sm'}>&#165; jpy</Button>
                <Button onClick = {() => handleClick('gbp')} size={'sm'}>&#163; gbp</Button>
            </HStack>
        </Flex>
    </>
  )
}

export default CurrencyBtns
