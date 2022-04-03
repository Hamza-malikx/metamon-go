import { Box, Heading, Image, Text, Flex, Grid } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/unnamed.jpg';

const { PUBLIC_URL } = process.env;

const images = new Array(18).fill().map((_, i) => i);
export default function Gallery() {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          pauseOnHover: false,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          pauseOnHover: false,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 5000,
          pauseOnHover: false,
          cssEase: 'linear',
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  const reverse = {
    ...settings,
    rtl: true,
  };
  return (
    <Box id="gallery">
      <Box className="jumptarget" bg="bg">
        <Flex
          backgroundImage={{ base: '', md: `${process.env.PUBLIC_URL}/b.jpg` }}
          backgroundRepeat="no-repeat"
          backgroundPosition="right bottom"
          mx="auto"
          flexDirection="column"
          alignItems="center"
          py="0px"
          id="about"
          // px={{ base: '20px', md: 0 }}
          className=" "
        >
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            className="metamonInner "
          >
            {/* This is from About Us Image */}
            {/* <Box
              display={'flex'}
              flexDirection={`Column`}
              alignItems={'center'}
              justifyContent={'center'}
              position="relative"
              mb={{ base: '30px', md: 0 }}
            >
              <Image
                className="lftlft"
                // src={`${process.env.PUBLIC_URL}/g3.jpg`}
                src={img1}
              />
            </Box> */}
            <Box ml={{ base: 0, md: '0px' }}>
              <Heading color="yellow" fontFamily="fancy">
                Welcome To
              </Heading>
              <Heading
                color="white"
                mb="20px"
                fontSize={{ base: '30px', md: '45px' }}
                position="relative"
                className="story"
                zIndex="4"
              >
                Metamon:
                <br /> ABOUT US
                {/* <br /> in the Metaverse */}
              </Heading>
              <Text
                mb="40px"
                // maxW="700px"
                minW="300px"
                mx="auto"
                textAlign="justify"
                // px={{ base: '10px', md: 0 }}
                color="white"
                fontSize="17px"
                lineHeight="26px"
              >
                Jarga Media is an international gaming and entertainment group,
                powered by building creativity and incubating innovation. They
                are home to an expansive group of professionals and
                industry-leading experts across all avenues from interactive
                entertainment, software, and application, to game development,
                cybersecurity, VFX, art, and animation.
                <p>
                  Jarga Media has worked with the likes of Activision, Blizzard,
                  Disney and Ubisoft, and now, we're excited to add Metamon to
                  the list.
                </p>
                <p>
                  Metamon is a top-tier battle and tournament game. An online
                  blockchain game that is set in a virtual country – Metamongo,
                  where players skillfully use in-game characters called
                  “Metamons” to battle each other and win prizes or real money
                  in Ethereum. The play-to-earn game allows players to own
                  virtual plots of lands as NFTs, build facilities like the gym
                  in order to host tournaments and also earn real money (in ETH)
                  through the means.
                </p>
              </Text>

              <Heading color="yellow">OUR VISION</Heading>
              <Text
                mt={'20px'}
                mb="50px"
                // maxW="700px"
                minW="300px"
                mx="auto"
                textAlign="justify"
                // px={{ base: '10px', md: 0 }}
                color="white"
                fontSize="17px"
                lineHeight="26px"
              >
                <p>
                  Our vision for Metamon is simple: we aim to create the largest
                  and highest quality game the NFT space has ever seen. The aim
                  is to build a virtual metaverse where you can play with
                  friends, battle and train Metamons, trade items, own lands and
                  build your gym and customise your virtual character; endless
                  experiences await!
                </p>
                <p>
                  Typically projects of this stature take at least 2 to 3 years
                  to go from concept to final product. We were slated to release
                  the full game in Q3 of 2022. However, with the expected
                  increase in funding from our mint strategy, we’ll be able to
                  speed up the process and complete development by early Q2 of
                  2022, with an alpha release as early as the end of Q2.
                </p>
              </Text>
              <Heading color="yellow">BACKSTORY</Heading>
              <Text
                mt={'20px'}
                mb="50px"
                // maxW="700px"
                minW="300px"
                mx="auto"
                textAlign="justify"
                // px={{ base: '10px', md: 0 }}
                color="white"
                fontSize="17px"
                lineHeight="26px"
              >
                Long ago, in a world named Metamongo, Mongo’s (citizens of
                Metamongo) and Metamons used to live happily in love and
                harmony. Some Metamons lived alongside humans while some lived
                in the wild. Neither the people nor the Metamons lacked
                anything, they always had everything they wished for – crops,
                gold, minerals – until, one day the great Mount Baraz of
                Metamongo erupted and took almost all of their resources away.
                Everything that was once proud of grew got burned by lava,
                leaving more of Metamons and Mongo’s to die and soon the
                harmonious life in Metamongo turned into a brutal and lonely
                existence in which only the strong ones had access to the
                resources. In order to survive Mongo’s start capturing and
                training more and more Metamons to use in the fight for survival
                against their own.
                <p>
                  Can you survive in Metamongo, battling other Metamons in your
                  fight for survival? Enter the game and prove your worth.
                </p>
                <p>To survive is to be brutal. Be the surviving Metamon!</p>
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box py="50px" bg="black" className="small-slider">
        <Slider {...settings}>
          {images.map(img => (
            <Box className="marquee-item" key={img}>
              <Image w="150px" key={img} src={`${PUBLIC_URL}/${img + 1}.png`} />
            </Box>
          ))}
        </Slider>
        <Slider {...reverse}>
          {images.map(img => (
            <Box className="marquee-item" key={img}>
              <Image w="150px" key={img} src={`${PUBLIC_URL}/${img + 1}.png`} />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box
        maxW="1140px"
        mx="auto"
        py="80px"
        alignItems="center"
        justifyContent="center"
        bg="white"
      >
        <Heading mb="20px" fontSize="60px" textAlign="center" color="black">
          Rarity
        </Heading>
        <Text mb="50px" fontSize="20px" textAlign="center" color="black">
          The Metamon Gang is one of its kind. We are different and unique. The
          rarity of our NFT is that we have used 150
          <br /> traits in our Metamon artwork. Check below to see the
          distinctive qualities of our artwork.
        </Text>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Grid
            w="35%"
            templateColumns="repeat(2, 1fr)"
            gap={6}
            className="anam_grid"
          >
            <Image
              src={`${PUBLIC_URL}/left1.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
            <Image
              src={`${PUBLIC_URL}/left2.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
            <Image
              src={`${PUBLIC_URL}/left3.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
            <Image
              src={`${PUBLIC_URL}/left4.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
          </Grid>
          <Box mr={{ base: '0', md: '20px' }} my={{ base: '20px', md: '0px' }}>
            <Image
              src={`${PUBLIC_URL}/btl.png`}
              className="rndImg anam_grid_1 "
              style={{
                borderRadius: '50%',
                marginLeft: '5px',
              }}
            />
          </Box>
          <Grid
            w="35%"
            templateColumns="repeat(2, 1fr)"
            className="anam_grid"
            gap={6}
          >
            <Image
              src={`${PUBLIC_URL}/r1.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
            <Image
              src={`${PUBLIC_URL}/r2.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
            <Image
              src={`${PUBLIC_URL}/r3.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
            <Image
              src={`${PUBLIC_URL}/r4.png`}
              className="rndImg"
              style={{
                borderRadius: '50%',
              }}
            />
          </Grid>
        </Flex>
        <Flex
          borderWidth="1px"
          borderColor="yellow"
          borderRadius="20px"
          mt="50px"
          className="rarity-info"
          py="1.5rem"
          justifyContent="center"
          flexDirection={{ base: 'column', md: 'row' }}
          mx={{ base: '20px', md: 0 }}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px={{ base: '0px', md: '22px' }}
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              50000
            </Heading>
            <Text fontWeight="bold">Metamon</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              8
            </Heading>
            <Text fontWeight="bold">Earring</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              18
            </Heading>
            <Text fontWeight="bold">Background</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              46
            </Heading>
            <Text fontWeight="bold">Clothes</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              15
            </Heading>
            <Text fontWeight="bold">Body</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: 0, md: '1px' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              33
            </Heading>
            <Text fontWeight="bold">Eyes / Eyewear</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              24
            </Heading>
            <Text fontWeight="bold">Eyes / Eyewear</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              25
            </Heading>
            <Text fontWeight="bold">Mouth</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            borderRightWidth={{ base: 0, md: '1px' }}
            borderBottomWidth={{ base: '1px', md: '0' }}
            borderRightColor="#ddd"
            px="22px"
            py={{ base: '22px', md: 0 }}
          >
            <Heading fontSize="26px" color="yellow">
              4
            </Heading>
            <Text fontWeight="bold">Mask</Text>
          </Flex>
          <Flex flexDirection="column" alignItems="center" px="18px">
            <Heading fontSize="26px" color="yellow">
              5
            </Heading>
            <Text fontWeight="bold">Nose</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
