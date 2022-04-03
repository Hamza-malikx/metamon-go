import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Roadmap() {
  const arrowStyle = {
    borderRightColor: '#2B6CB0',
  };
  const contentStyle = {
    background: '#2B6CB0',
    boxShadow: 'none',
  };
  const iconStyle = {
    background: '#2B6CB0',
    width: 30,
    height: 30,
    marginLeft: -14,
    boxShadow: 'none',
    top: 15,
  };
  return (
    <Box
      bg="#84a421"
      backgroundImage={`${process.env.PUBLIC_URL}/unun.jpg`}
      backgroundSize="cover"
      backgroundPosition={{ base: '100%', md: 'top' }}
      id="roadmap"
      py="60px"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        maxW="1140px"
        mx="auto"
        py="30px"
        className="jumptarget"
      >
        <Heading
          fontSize={{ base: '30px', md: '50px' }}
          textAlign="center"
          className="story"
          position="relative"
          zIndex="4"
          maxW="fit-content"
        >
          Milestones
        </Heading>
        <Text
          textAlign="center"
          color="#fff"
          fontSize={{ base: '18px', md: '22px' }}
          line-height={{ base: '24px', md: '32px' }}
          text-align="center"
          margin-bottom="40px"
          className="rarity-para"
        >
         We’ve reached multiple milestones for Metamon Go. When we reach a certain milestone, we move on to the next milestone.
        </Text>
        <Box className="timeline" w="100%">
          <Box className="time-container left">
            <Box className="time-content">
              <h2 className="milestones-title">Milestone 1</h2>
              <Text>
                Website Launch and Live giveaway - Q1 2022
              </Text>
            </Box>
          </Box>
          <Box className="time-container right two">
            <Box className="time-content">
              <h2 className="milestones-title">Milestone 2</h2>
              <Text>
                Preparation and development of the play-to-earn game in the
                metaverse - Q2 2022

              </Text>
            </Box>
          </Box>
          <Box className="time-container left two">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 3</h2>
              <Text>Development of the in-game token – Barol Token - Q2 2022
</Text>
            </Box>
          </Box>
          <Box className="time-container right three">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 4</h2>
              <Text>Metamon Play-to-earn Game 1.0 Launch - Q2 2022
</Text>
            </Box>
          </Box>
          <Box className="time-container left three">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 5</h2>
              <Text>
                Redistribution of trading fees to players in monthly in-game
                contest - Q3 2022

              </Text>
            </Box>
          </Box>
          <Box className="time-container right four">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 6</h2>
              <Text>Metamon Play-to-earn Game 2.0 Launch - Q4 2022</Text>
            </Box>
          </Box>
          {/* <Box className="time-container left four">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 7</h2>
              <Text>
                Over 1000 NFT giveaways to holders on upcoming collaborating
                projects.
              </Text>
            </Box>
          </Box>
          <Box className="time-container right five">
            <Box className="time-content">
              <h2 className="milestones-title">MILESTONE 8</h2>
              <Text>Formation of DAO for the Community.</Text>
            </Box>
          </Box> */}
        </Box>
      </Flex>
      <div className="metamonInner">
        <h2 className="others">Others</h2>
        <ul className="otherUl">
          <li>
            More features, upgrades, and releases will be included in Metamon’s
            Roadmap as our journey progresses.
          </li>
          <li>
            Metamon Play-to-earn Game will be available for play on Windows,
            Mac, and Android.
          </li>
          <li>
          Metamon Play-to-earn Game will be available for play on Windows, Ios and Android. somewhere at the bottom of the website with logos of windows mac and android

          </li>
        </ul>
      </div>
    </Box>
  );
}
