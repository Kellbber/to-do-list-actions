import { Flex, Heading } from '@chakra-ui/react'
import { ListAction } from '../components/List/ListAction'

export default function Home() {
  return (
    <Flex
      w="full"
      height="100vh"
      alignItems="center"
      justifyContent="start"
      direction="column"
      p={6}
      bgColor="#ffff"
    >
      <Flex
        w="full"
        maxW="900px"
        direction="column"
        gap={4}
        alignItems="center"
      >
        <Heading color="#000000">To do list with Actions</Heading>
        <ListAction />
      </Flex>
    </Flex>
  )
}
