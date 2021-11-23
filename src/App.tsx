import React from 'react'
import { Text } from './components/polymorphic/Text'

export default function App() {
  return (
    <div>
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label</Text>
    </div>
  )
}

