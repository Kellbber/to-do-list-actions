import { Field, Flex, IconButton, Input } from '@chakra-ui/react'
import { CgAdd } from 'react-icons/cg'

export const AddItem = () => {
  return (
    <Field.Root required w="full">
      <Field.Label color="#000000">
        New item <Field.RequiredIndicator />
      </Field.Label>
      <Flex w="full" gap={2}>
        <Input placeholder="Enter new item" />
        <IconButton aria-label="Add new item">
          <CgAdd />
        </IconButton>
      </Flex>
      <Field.HelperText>Include items wisely.</Field.HelperText>
    </Field.Root>
  )
}
