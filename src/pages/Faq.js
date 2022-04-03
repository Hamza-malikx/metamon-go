import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import Faq from 'react-faq-component';

import { FaqList } from '../components';

const data = {
  rows: [
    {
      title: 'How do I mint a Metamon?',
      content:
        ' To mint any NFT from the play-to-earn game, you need to head to our website and you will be directed accordingly from there.',
    },
    {
      title: 'When is the release date?',
      content: 'The Metamon game will launch in Q2 2022.',
    },
    {
      title: 'How do I earn on the game?',
      content:
        'To earn you have to win battles against other players. You can also earn by owning gyms and hosting tournaments to earn through entrance fees.',
    },
    {
      title: 'How many Metanons are available in the game?',
      content: '10.000 to Mint and 40.000 to catch.',
    },
    {
      title: 'What is the difference between a normal and a legendary Metamon?',
      content:
        'Legandary Metamons will earn money every day. Even if you don’t stake them.',
    },
    {
      title: 'How many Metamons can I own?',
      content: 'Fifty Metamons can be purchased per address.',
    },
    {
      title: 'Which Ethereum Wallet can I use for the mint?',
      content: 'We support Metamask.',
    },
    {
      title: 'How do I sell my NFT’s?',
      content: 'All collections of Metamongo will be listed on Opensea.',
    },
    {
      title: 'Where can I see the Metamons I’ve purchased?',
      content: 'You can see it on Metamask or your Opensea profile.',
    },
    {
      title: 'How much will be the resale royalties?',
      content: '5.8% royalty will be applicable on the resales.',
    },
    {
      title: 'How can I contact the team?',
      content: 'The best way to contact the team is through Discord or Twitter',
    },
    {
      title: 'What is the value of 1 Metamon?',
      content: 'Mintprice will be 0.20 ETH.',
    },
    {
      title: 'What is the value of 1 Trainer?',
      content: 'Mintprice will be 0.25 ETH',
    },
    {
      title: 'What is the value of 1 Metaball?',
      content: 'Mintprice will be 0.1 ETH',
    },
    {
      title: 'What is the value of 1 Land?',
      content: 'Mintprice will be 0.45 ETH',
    },
  ],
};

const config = {
  animate: true,
};

export default function FAQ() {
  const styles = {
    bgColor: '#0f1111',
    rowTitleColor: '#fff',
    rowContentColor: '#fff',
    rowTitleTextSize: 'large',
  };
  return (
    <Box bg="bg3" id="faq" className="jumptarget" position="relative">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py="30"
        pb="40"
        maxW="1140px"
        mx="auto"
      >
        <Heading
          color="white"
          textTransform="uppercase"
          mb="20px"
          fontSize="6xl"
          fontWeight="bold"
          textAlign="center"
          position="relative"
          zIndex="4"
          className="story"
        >
          FAQs
        </Heading>
        <Box w="100%" px={{ base: '20px', md: 0 }}>
          <FaqList faq={data} />
        </Box>
      </Flex>
      <Image
        right="50px"
        bottom="-115px"
        position="absolute"
        // src={`${process.env.PUBLIC_URL}/p598.png`}
        display={{ base: 'none', md: 'block' }}
      />
    </Box>
  );
}
