import React, { useState } from 'react';
// import axios from 'axios';
import { Box, Text, Input, Button, Flex, Image } from '@chakra-ui/react';
import crown from './images/chatbox-icon.svg';
import theme from './theme'; // Import the custom theme

function StyleBot() {
  const [inputText, setInputText] = useState("");
  const [message, setMessage] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const onSendButton = () => {
        if (inputText === "") {
          return;
        }
    
        const userMsg = { name: "User", message: inputText };
        setMessage([...message, userMsg]);
        setInputText("");
    
        fetch("http://127.0.0.1:5000/predict", {
          method: "POST",
          body: JSON.stringify({ message: inputText }),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            const botMsg = { name: "Sam", message: data.answer };
            setMessage([...message, botMsg]);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
  const toggleState = () => {
        setIsOpen(!isOpen);
  };
  // const sendMessage = async () => {
  //   try {
  //     const response = await axios.post('/chatbot', {
  //       message: message,
  //     });

  //     setResponse(response.data.response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const updateChatText = () => {
        return message
          .slice()
          .reverse()
          .map((item, index) => (
            <Box
              key={index}
              className={`messages__item ${
                item.name === "Gyna"
                  ? "messages__item--visitor"
                  : "messages__item--operator"
              }`}
            >
              {item.message}
            </Box>
          ));
  };

  return (
    <Flex
      className={`chatbox ${isOpen ? "chatbox--active" : ""}`}
      position="absolute"
      bottom="30px"
      right="30px"
    >
      <Box
        // height="100%"
        fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, , Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
        fontSize={20}
        bg={theme.colors.background}
        color={theme.colors.black}
        height="450px"
        width="350px"
        boxShadow="0px 0px 15px rgba(0, 0, 0, 0.1)"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        // display="flex"
        // justifyContent="center"
        // alignItems="center"
      >
        <Flex
          className="chatbox__header"
          background="linear-gradient(93.12deg, #611C1C 0.52%, #613e2c 100%)"
          alignItems="center"
          justifyContent="center"
          padding="15px 20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1)"
        >
          <Image
            className="chatbox__image--header"
            src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
            alt="image"
            marginRight="10px"
          />
          <Flex flexDirection="column">
            <Text
              className="chatbox__heading--header"
              fontSize="1.2rem"
              color="white"
            >
              Gina's StyleBot
            </Text>
            <Text
              className="chatbox__description--header"
              fontSize=".9rem"
              color="white"
            >
              Hi. I am Gyna. Your StyleBot
            </Text>
          </Flex>
        </Flex>
        <Box>
          {/* <Box textAlign="center" mb={8}>
          <Text fontSize="xl" fontWeight="bold">
            Gina's StyleBot
          </Text>
        </Box> */}
          <Box className="chatbox__messages" padding="0 20px">
            {updateChatText()}
          </Box>
          <Flex
            className="chatbox__footer"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            padding="20px 20px"
            background="linear-gradient(268.91deg, #613e2c -2.14%, #611C1C 99.69%)"
            boxShadow="0px -10px 15px rgba(0, 0, 0, 0.1)"
            borderBottomRightRadius="10px"
            borderBottomLeftRadius="10px"
            marginTop="20px"
          >
            <Input
              // width="100%"
              // height={30}
              // borderRadius={5}
              // placeholder="Ask a fashion-related question"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="Write a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              width="80%"
              border="none"
              padding="10px 10px"
              borderRadius="30px"
              textAlign="left"
            />
            <Button
              className="chatbox__send--footer send__button"
              color="white"
              onClick={onSendButton}
              borderRadius="50px"
              padding="10px"
              background="#611C1C"
              boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1)"
            >
              Send
            </Button>
          </Flex>
          <Box className="chatbox__button">
            <Button onClick={toggleState}>
              <Image src= {crown}/>
            </Button>
          </Box>
          {/* <Button height={25} mt={4} onClick={sendMessage} borderRadius={5} bg={'#611C1C'}>
          Send
        </Button> */}
          {/* {message && (
            <Box mt={8} p={4} border="1px" borderColor="gray.200">
              <Text>{message}</Text>
            </Box>
          )} */}
        </Box>
      </Box>
    </Flex>
  );
}

export default StyleBot;


// import React, { useState } from 'react';
// import { Box, Button, Flex, Image, Text, Input } from '@chakra-ui/react';
// import crown from './images/chatbox-icon.svg';

// function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputText, setInputText] = useState("");

//   const toggleState = () => {
//     setIsOpen(!isOpen);
//   };

//   const onSendButton = () => {
//     if (inputText === "") {
//       return;
//     }

//     const userMsg = { name: "User", message: inputText };
//     setMessages([...messages, userMsg]);
//     setInputText("");

//     fetch("http://127.0.0.1:5000/predict", {
//       method: "POST",
//       body: JSON.stringify({ message: inputText }),
//       mode: "cors",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         const botMsg = { name: "Sam", message: data.answer };
//         setMessages([...messages, botMsg]);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const updateChatText = () => {
//     return messages
//       .slice()
//       .reverse()
//       .map((item, index) => (
//         <Box
//           key={index}
//           className={`messages__item ${
//             item.name === "Sam"
//               ? "messages__item--visitor"
//               : "messages__item--operator"
//           }`}
//         >
//           {item.message}
//         </Box>
//       ));
//   };

//   return (
    
//   );
// }

// export default Chatbot;

// {/* <Flex
//       boxSizing='border-box'
//       className={`chatbox ${isOpen ? "chatbox--active" : ""}`}
//       position="absolute"
//       bottom="30px"
//       right="30px"
//     >
//       <Box
//         className="chatbox__support"
//         background="#f9f9f9"
//         height="450px"
//         width="350px"
//         boxShadow="0px 0px 15px rgba(0, 0, 0, 0.1)"
//         borderTopLeftRadius="20px"
//         borderTopRightRadius="20px"
//       >
//         <Flex
//           className="chatbox__header"
//           background="linear-gradient(93.12deg, #581B98 0.52%, #9C1DE7 100%)"
//           alignItems="center"
//           justifyContent="center"
//           padding="15px 20px"
//           borderTopLeftRadius="20px"
//           borderTopRightRadius="20px"
//           boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1)"
//         >
//           <Image
//             className="chatbox__image--header"
//             src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
//             alt="image"
//             marginRight="10px"
//           />
//           <Flex flexDirection="column">
//             <Text
//               className="chatbox__heading--header"
//               fontSize="1.2rem"
//               color="white"
//             >
//               Chat support
//             </Text>
//             <Text
//               className="chatbox__description--header"
//               fontSize=".9rem"
//               color="white"
//             >
//               Hi. My name is Sam. How can I help you?
//             </Text>
//           </Flex>
//         </Flex>
//         <Box className="chatbox__messages" padding="0 20px">
//           {updateChatText()}
//         </Box>
//         <Flex
//           className="chatbox__footer"
//           display={'flex'}
//           flexDirection="row"
//           alignItems="center"
//           justifyContent='space-between'
//           padding="20px 20px"
//           background="linear-gradient(268.91deg, #581B98 -2.14%, #9C1DE7 99.69%)"
//           boxShadow="0px -10px 15px rgba(0, 0, 0, 0.1)"
//           borderBottomRightRadius="10px"
//           borderBottomLeftRadius="10px"
//           marginTop="20px"
//         >
//           <Input
//             type="text"
//             placeholder="Write a message..."
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//             width="80%"
//             border="none"
//             padding="10px 10px"
//             borderRadius="30px"
//             textAlign="left"
//           />
//           <Button
//             className="chatbox__send--footer send__button"
//             color="white"
//             onClick={onSendButton}
//             borderRadius="50px"
//             padding="10px"
//             background="white"
//             boxShadow="0px 10px 15px rgba(0, 0, 0, 0.1)"
//           >
//             Send
//           </Button>
//         </Flex>
//       </Box>
//       <Box className="chatbox__button" padding={10}>
//         <Button onClick={toggleState}
//                 border={'none'}
//                 outline={'none'}
//                 borderTopLeftRadius = {"50"}
//                 borderTopRightRadius = {50}
//                 bg = {'white'}
//                 borderBottomLeftRadius = {50}
//                 box-shadow=  "0 10 15 rgba(0, 0, 0, 0.1)">
//           <Image src={crown} />
//         </Button>
//       </Box>
//     </Flex> */}