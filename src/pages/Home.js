import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading, Input } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import Countdown from 'react-countdown';

import { CountCard } from '../components';

import lgVid from '../vids/Untitled.mp4';
import smVid from '../vids/360.mp4';
import sc from '../vids/9FF95661-04E1-403E-9FF3-B953EE2A5534.png';
export default function Home({ data, onConnect, address, onMint }) {
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  return (
    <>
      {/* <Box
        h={{ base: '100%', lg: '850px', xl: '690px' }}
        bg="black"
        position="relative"
        //  backgroundImage={`../assets/images/banner.png`}
        // backgroundImage={`${process.env.PUBLIC_URL}/wt.jpg`}
        backgroundPosition="center"
        backgroundSize="100% 100%"
        backgroundRepeat="no-repeat"
        className="fucl"
      >
        <Box
          maxW="1200px"
          mx="auto"
          position="relative"
          zIndex="5"
          // h="100vh"
          className="fucl1"
        ></Box>
      </Box> */}
      <div>
        {width > 460 ? (
          <video autoPlay muted loop>
            <source src={lgVid} type="video/mp4" />
          </video>
        ) : (
          <div>
            <img src={sc} alt="" style={{ width: '100%', height: '100%' }} />
          </div>
        )}
      </div>
    </>
  );
}
{
  /* <video autoPlay muted style={{ width: '100%' }}>
            <source src={smVid} type="video/mp4" />
          </video> */
}
