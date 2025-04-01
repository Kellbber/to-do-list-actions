'use client'

import { useState } from 'react'
import { Flex, Input, IconButton } from '@chakra-ui/react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { updateItem, deleteItem } from '@/app/actions'

export const ListItem = ({
  id,
  name,
  onItemUpdated
}: {
  id: string
  name: string
  onItemUpdated: () => void
}) => {
  const [editMode, setEditMode] = useState(false)
  const [newName, setNewName] = useState(name)

  async function handleUpdate() {
    if (!newName.trim()) return
    await updateItem(id, newName)
    setEditMode(false)
    onItemUpdated()
  }

  async function handleDelete() {
    await deleteItem(id)
    onItemUpdated()
  }

  return (
    <Flex
      w="full"
      bgColor={'#00000084'}
      rounded="lg"
      align="center"
      p={2}
      gap={2}
    >
      {editMode ? (
        <Input
          type="text"
          value={newName}
          onChange={e => setNewName(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={e => e.key === 'Enter' && handleUpdate()}
        />
      ) : (
        <Flex flex="1" p={2} color="white">
          {name}
        </Flex>
      )}
      <IconButton aria-label="Edit item" onClick={() => setEditMode(true)}>
        <FaEdit />
      </IconButton>
      <IconButton aria-label="Delete item" onClick={handleDelete}>
        <FaTrash />
      </IconButton>
    </Flex>
  )
}
