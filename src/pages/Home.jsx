import React from 'react';
import '../css/Home.css';
import bitcoin from '../assets/bitcoinImage.png';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <>
        <div className="home-details">

          <motion.div className='bitcoin'
            animate={{ 
              translateY : '20px'
            }}

             transition = {{ 
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            <Image src={bitcoin}/>
          </motion.div>
            <Button pos={'relative'} bottom = {'10'} m={'auto'}>
              <Link to = '/cryptocurrencies'>En-Crypto</Link>
            </Button>

        </div>
    </>
  )
}

export default Home
