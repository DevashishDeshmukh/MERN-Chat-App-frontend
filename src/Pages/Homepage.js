import {
  Box,
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import './HomePage.css';
import img1 from '../logo.png'

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      {/* <Box
        id="HomePageHeader"
        display="flex"
        justifyContent="center"
        p={3}
        // bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        
      >
       
      </Box> */}
      <Box 
      id="HomePageFormsCSS" 
      // bg="white"
       w="100%" p={4} 
       margin={"auto"} borderRadius="lg" borderWidth="1px"
      >
        <div id="logoBox"  >
      <img  width={"25%"} src={img1} alt="React Image" />
      <Text fontSize="5xl" fontFamily="Work sans" marginLeft="10px" marginTop="20px"
      fontWeight="600"
       >
          Chat-Sparrow
        </Text>
      </div>
        <Tabs isFitted variant="soft-rounded">
          <TabList
          color="white"
          mb="1em">
            <Tab >Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* </div> */}
      </Box>
    </Container>
  );
}

export default Homepage;