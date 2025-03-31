import { Flex } from '@chakra-ui/react'
import { ListItem } from './ListItem'
import { AddItem } from '../AddItem/AddItem'

export const ListAction = () => {
  return (
    <Flex w="full" direction="column" gap={4}>
      <AddItem />
      <Flex w="full" gap={1} direction="column">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Flex>
    </Flex>
  )
}
