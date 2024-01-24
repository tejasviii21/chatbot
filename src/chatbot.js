import React, { useState } from 'react';
import { Box, Flex, Image, Text, Button, Textarea } from '@chakra-ui/react';
import crown from './images/chatbox-icon.svg';
import bot from './images/unsplash_khHs6rdee7I (2).svg'
import theme from './theme';
import axios from "axios"
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return;




    try {

      const res = await axios.post("http://127.0.0.1:5000/chatbot", { message: inputValue }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const botResponse = res.data.response;



      setData([...data, { name: "user", message: inputValue }, { name: "bot", message: botResponse }]);
      console.log(data);
    } catch (error) {
      console.error("Error sending message to server:", error);
    }

    setInputValue('');
  };


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box
    className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}


      // position="absolute"
      // bottom={30}
      // right={30}
      fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, , Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
      fontSize="100%"
    // bg="#F1F1F1"
    >
      <Flex direction="column" position={'absolute'} bottom={60} right={20} bg="#eeef5f3cff5eeba" width={300} height={430} zIndex="-123456" opacity={isOpen ? 1 : 0} transition="all .5s ease-in-out">
        <Flex borderTopRadius={20} alignItems="center" justifyContent="normal" bg={theme.gradients.brandopp} py={15}>
          <Image src={bot} alt="User" ml={10} marginRight={55} />
          <Flex direction="column">
            <Text fontSize="1.2rem" fontWeight={'500'} color="white">StyleBOT</Text>
            {/* <Text fontSize=".9rem" color="white">Hi. My name is Gyna. I am you Fashion Assistant?</Text> */}
          </Flex>
        </Flex>
        <Box flex="1" overflowY="scroll" _hover={{ overflowY: "auto" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "gray",
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "gray.500",
            },
          }}
          py={2} px={4} bg="#EEE5DB">
          {data.map((message, index) => (
            <Box
              key={index}
              style={{
                backgroundColor: message.name === 'user' ? '#611c2e' : 'var(--primary)',
                color: 'white',
                alignSelf: message.name === 'user' ? 'flex-end' : 'flex-start',
                borderRadius: message.name === 'user' ? '15px 20px 15px 0' : '15px 20px 0 15px',
                maxWidth: '75%',
                width: 'fit-content',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
                margin: '0.5rem',
                padding: '1rem',
              }}
            >
              {message.message}
            </Box>

          ))}

        </Box>
        <Flex alignItems="center" justifyContent="space-between" bg={theme.gradients.brand} py={2} px={4} boxShadow="0px -10px 15px rgba(0, 0, 0, 0.1)" borderBottomRadius="15px">
          <Textarea
            resize="none"
            type="text"
            placeholder="Write a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            borderRadius={10}
            border={'1px'}
            borderColor="#E0E1E0"
            onKeyPress={handleKeyPress}
            p={5}
            width="75%"
            my={10}
          />
          <Button
            height={35}
            className="send__button"
            mb={isOpen ? 2 : 0}
            onClick={handleSendMessage}
            px={10}
            color="black"
            borderRadius="10px"
            bg="white"
            boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1)"
            _focus={{ outline: 'none' }}
          >
            Send
          </Button>
        </Flex>
      </Flex>
      <Box className="chatbox__button" position="absolute" bottom={0} right={0} mt={30}>
        <Button onClick={toggleChatbox}
          position={'absolute'}
          bottom={20}
          right={20}
          border={'none'}
          outline={'none'}
          borderTopLeftRadius={"50"}
          borderTopRightRadius={50}
          bg={'white'}
          borderBottomLeftRadius={50}
          boxShadow="0 10 15 rgba(0, 0, 0, 0.1)"
          cursor={'pointer'}>
          <Image src={crown} alt="Chatbox" />
        </Button>
      </Box>
    </Box>
  );
};

export default Chatbot;