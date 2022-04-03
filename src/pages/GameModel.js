import React from 'react';
// import { Flex, Text, Heading, Image, Box } from '@chakra-ui/react';/
import img from '../assets/devil.png';
const GameModel = () => {
  return (
    <div className="gameInner">
      <div className="gameWrapper metamonInner ">
        <h2 className="gameHeading">Breaking Down the Metamon Gaming Model</h2>
        <div className="ggmD">
          <div className="gameImg">
            <img src={img} alt="" />
          </div>
          <div className="rightRight">
            <h3 className="gameInnerContentHeading">Metamon Exploration:</h3>
            <p>
              Users can explore the levels to obtain rewards and reach higher
              levels for their Metamon. Higher levels, better attributes, and
              stronger skills make the user's Metamon more valuable.
            </p>
          </div>
        </div>
        <div className="gameContent">
          <div className="metamon">FEATURES</div>
          <h3 className="gameInnerContentHeading">LANDS</h3>
          <p style={{ margin: '10px 0 0' }}>
            Players can purchase virtual plots of lands as Non-fungible Tokens
            from the game’s world, called Metamongo. Metamongo, the Metamons’
            homeland, is divided into tokenized plots of land which act as homes
            and assets for the citizens.
          </p>
          {/* <p style={{ margin: '20px 0 0' }}>
            In addition, the "limited Metamon" mechanism and sending "limited
            Metamon" can provide a certain percentage of dispatch value bonus
            for this dispatch queue. The higher the quality of the qualified
            Metamon, the greater the increase.
          </p> */}
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            GYMS
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            On the NFT plots of lands purchased, players can choose to build
            gyms on their lands, where they can organize Metamon battles and
            tournaments. To compete in these tournaments, players will have to
            pay an entrance fee (in Ethereum) which will be determined by the
            gym owners. This is a way for players who are gym owners to earn a
            lot of money, which is 20% of the cumulative money. Winners of the
            tournament will also receive earnings which will be as follows: 40%
            for 1st position, 20% for 2nd position, 10% for 3rd position, 6% for
            4th position, and 4% for 5th position.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            METAMONS
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            Metamons are the avatars used in the game for battles and
            tournaments. You can make your Metamon stronger by engaging in more
            battles and have more chances of winning prizes from gym battles.
            Metamons are divided into types, with each different strengths, such
            as fight, fire, water, earth, flying, grass and electric powers.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            METABALLS
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            Variants of Metamons will be available as NFTs in the Game, you will
            need a METABALL to catch a Metamon in the Metaverse. These Metaballs
            will also be available as Non-fungible Tokens. One Metaball can
            catch one Metamon. If you can't catch the Metamon in the fight, no
            worries. You don't lose the ball. You can try to catch another
            Metamon in your next fight. The Metaball stays in your possession
            until you catch one Metamon.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            TRAINERS
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            Trainers will also be sold in the game as NFTs. They are game items
            to help you fight with Metamons and catching many Metamons with a
            Metaball.
          </p>
          <p style={{ margin: '20px 0 0' }}>
            An add-on is, every NFT caught in the game can still be used to earn
            money by putting them on sale on opensea.io.
          </p>
          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            LEGENDARY
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            Dragons win 90% of all battles against normal Metamons. The Dragon
            Holders also receive 100 stable-coins daily, which is equal to 100
            dollars each day. This may become more in the future, but never
            less.
          </p>

          <h3
            className="gameInnerContentHeading"
            style={{ margin: '10px 0 0' }}
          >
            MINT
          </h3>
          <p style={{ margin: '10px 0 0' }}>
            The game's minting process will begin on the website with the sale
            of Trainers which will start on 14 April 2022. This is followed by
            minting of the available Metamons that will also take place on the
            website on 16 April 2022. There will be Legendary Metamon Dragons
            that you can mint and there will be 100 in-game available to catch.
          </p>
          <p style={{ margin: '20px 0 0' }}>
            The land sale will follow and players will be able to secure NFT
            plots of lands for themselves - this will come up on 18 April 2022.
            The Metaballs to catch the Metamons will also be made available for
            sale on 20 April 2022.
          </p>
          {/* <p style={{ margin: '20px 0 0' }}>
            There will be whitelisting and the first 100 players to get
            whitelisted before the sale will get free NFTs of Trainers. There
            will be Raffle sale.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default GameModel;
