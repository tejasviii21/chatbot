import React from 'react';
import { Box } from '@chakra-ui/react';
import Stylebot from './Stylebot';
// import Chatbot from './chatbot';
import Chatbot from './chatbot';

function App() {
  return (
    <Box>
      <div className="container">
        <Chatbot />
      </div>
    </Box>
  );
}

export default App;

// import React, { useState } from 'react';
// import axios from 'axios';
// import {Box, Text, Input, Button} from '@chakra-ui/react';
// import theme from "./theme"; // Import the custom theme

// function StyleBot() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   const sendMessage = async () => {
//     try {
//       const response = await axios.post('/chatbot', {
//         message: message,
//       });

//       setResponse(response.data.response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Box  height={'100%'} fontFamily= {"-apple-system, BlinkMacSystemFont, Segoe UI, , Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"} fontSize= {20} bg= {theme.colors.background} color={theme.colors.black} p={4}>
//       <Box textAlign="center" mt={8}>
//         <Text fontSize="xl" fontWeight="bold">
//           Gina's StyleBot
//         </Text>
//       </Box>
//       <Box maxW="sm" mx="auto" mt={8} p={4} px={'40%'}>
//         <Input
//           width={"100%"}
//           height={30}
//           borderRadius={5}
//           placeholder="Ask a fashion-related question"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <Button height={25} mt={4} onClick={sendMessage} borderRadius={5}>
//           Send
//         </Button>
//         {response && (
//           <Box mt={8} p={4} border="1px" borderColor="gray.200">
//             <Text>{response}</Text>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default StyleBot;
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, Text, Input, Button } from '@chakra-ui/react';
// import theme from './theme'; // Import the custom theme

// function StyleBot() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   const sendMessage = async () => {
//     try {
//       const response = await axios.post('/chatbot', {
//         message: message,
//       });

//       setResponse(response.data.response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Box
//       height="100%"
//       fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, , Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"
//       fontSize={20}
//       bg={theme.colors.background}
//       color={theme.colors.black}
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//     >
//       <Box maxW="sm" p={4}>
//         <Box textAlign="center" mb={8}>
//           <Text fontSize="xl" fontWeight="bold">
//             Gina's StyleBot
//           </Text>
//         </Box>
//         <Input
//           width="100%"
//           height={30}
//           borderRadius={5}
//           placeholder="Ask a fashion-related question"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <Button height={25} mt={4} onClick={sendMessage} borderRadius={5} bg={'##611C1C'}>
//           Send
//         </Button>
//         {response && (
//           <Box mt={8} p={4} border="1px" borderColor="gray.200">
//             <Text>{response}</Text>
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default StyleBot;
