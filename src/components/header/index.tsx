import {
  Image,
  Flex,
  Divider,
  Avatar,
  Box,
  Text,
  Icon,
} from "@chakra-ui/react";
import { FaSortDown } from "react-icons/fa";

export function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      w="full"
      height="4.5rem"
      padding="1rem 1.5rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        src="/assets/logo.png"
        alt="Levo"
        width="6.25rem"
        height="1.875rem"
      />
      <Flex>
        <Divider orientation="vertical" height="2.5rem" marginRight="2rem" />
        <Flex gap="1rem">
          <Avatar
            name="Matheus S."
            width="2.5rem"
            height="2.5rem"
            bg="primary"
          />
          <Box>
            <Text fontSize="0.875rem" fontWeight="700" color="black">
              Matheus S.
            </Text>
            <Text as="span" fontSize="0.75rem" color="gray.500">
              Admin
            </Text>
          </Box>
          <Icon as={FaSortDown} color="gray.500" />
        </Flex>
      </Flex>
    </Flex>
  );
}
