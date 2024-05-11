import { Box, VStack, Link } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box position="fixed" left="0" top="0" h="100vh" w="200px" bg="gray.200" p={4}>
      <VStack align="start" spacing={4}>
        <Link href="#basic-info">基本信息</Link>
        <Link href="#academic-experience">学业经历</Link>
        <Link href="#work-experience">就业经历</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
