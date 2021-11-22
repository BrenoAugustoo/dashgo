import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Anna Costa
          </Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            annacosta.raquel@gmail.com
          </Text>
        </Box>
      )}

      <Avatar 
        size="md" 
        name="Anna Costa" 
        src="https://pbs.twimg.com/profile_images/1460177072782032902/ljiGtmLK_400x400.jpg"
      />
    </Flex>
  )
}