import { Flex, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react';
import { HeaderLogo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { HeaderSearch } from './Search';

import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header () {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex 
      as="header" 
      w="100%"  
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}

      <HeaderLogo/>  

      { isWideVersion && <HeaderSearch/> }

      <Flex
        align="center"
        ml="auto"
      >
        <NotificationNav/>

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}