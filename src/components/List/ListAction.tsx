'use client'

import { Flex } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { ListItem } from './ListItem'
import { AddItem } from '../AddItem/AddItem'
import { getItems } from '@/app/actions'

export const ListAction = () => {
  const [items, setItems] = useState<{ id: string; name: string }[]>([])

  async function fetchItems() {
    const data = await getItems()
    setItems(data)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <Flex w="full" direction="column" gap={4}>
      <AddItem onItemAdded={fetchItems} />
      <Flex w="full" gap={1} direction="column">
        {items.map(item => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            onItemUpdated={fetchItems}
          />
        ))}
      </Flex>
    </Flex>
  )
}
