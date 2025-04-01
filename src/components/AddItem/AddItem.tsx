'use client'

import { useState } from 'react'
import { Field, Flex, IconButton, Input } from '@chakra-ui/react'
import { CgAdd } from 'react-icons/cg'
import { addItem } from '@/app/actions'

export const AddItem = ({ onItemAdded }: { onItemAdded: () => void }) => {
  const [newItem, setNewItem] = useState('')

  async function handleAdd() {
    if (!newItem.trim()) return
    await addItem(newItem)
    setNewItem('') // Limpa o input
    onItemAdded() // Atualiza a lista
  }

  return (
    <Field.Root required w="full">
      <Field.Label color="#000000">
        New item <Field.RequiredIndicator />
      </Field.Label>
      <Flex w="full" gap={2}>
        <Input
          placeholder="Enter new item"
          name="item"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <IconButton aria-label="Add new item" onClick={handleAdd}>
          <CgAdd />
        </IconButton>
      </Flex>
      <Field.HelperText>Include items wisely.</Field.HelperText>
    </Field.Root>
  )
}
