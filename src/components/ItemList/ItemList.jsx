import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'

const ItemList = ({products}) => {
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5}>
      {products.map((el) => (
        <Box key={el.id} m={5}>
            <Item {...el} />
        </Box>
      ))}
    </Flex>
  )
}

export default ItemList
