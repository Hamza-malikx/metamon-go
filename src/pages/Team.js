import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import TeamCard from '../components/TeamCard';

export default function About() {
  return (
    <Box bg="yellow" id="team" className="jumptarget">
      <Flex
        flexDirection="column"
        alignItems="center"
        pb="30px"
        px={{ base: '20px', md: 0 }}
      >
        <Flex
          maxW="1140px"
          mx="auto"
          justifyContent="flex-start"
          flexDirection="column"
          alignItems="center"
        >
          <Heading
            color="black"
            fontSize={{ base: '30px', md: '50px' }}
            fontWeight="bold"
            mt="-10px"
            textAlign="center"
            className="story white"
            zIndex="4"
            position="relative"
          >
            Meet the movers and shakers behind
            <br /> The Metamon 
          </Heading>
          <Text
            fontSize={{ base: '18px', md: '22px' }}
            color="#4a4a4a"
            my="30px"
            textAlign="center"
          >
            The Metamon Go gang was established by a squad that are devoted to NFTs. 
            <br /> These highly experienced crew created the marvelous world of Metamons.
          </Text>
          <Flex
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
          >
            <TeamCard
              name="Baroly 'N Linam"
              image="bb1.png"
              position="Founder/Marketing"
              text=""
            />
            <TeamCard
              name="Ratzoi Stone"
              image="bb2.png"
              position="Project Manager"
              text=""
            />
            <TeamCard
              className="chimg"
              name="Stacy Gwen"
              image="bb3.png"
              position="Lead Developer"
              text=""
            />
          </Flex>
          <Flex
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
          >
            <TeamCard
              name="Ken Sugimori"
              image="bb4.png"
              position="Coding Freak"
              text=""
            />
            <TeamCard
              name="Lulu Amed"
              image="bb5.png"
              position="Web Developer"
              text=""
            />
            <TeamCard
              name="Arash BJ"
              image="bb6.png"
              position="Social Media Master"
              text=""
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
