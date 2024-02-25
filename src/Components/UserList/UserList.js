
import "./UserList.css";
import React from "react";
import { FormattedMessage} from "react-intl";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer, Box
} from '@chakra-ui/react'

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  // Estado para almacenar usuarios
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {

    // Llamada a la API
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      });
      
  }, [userList]);

  return (
    <Box position="relative" borderRadius='lg' borderWidth='1px'>
    <TableContainer padding="1rem">
      <Table>
        <Thead>
          <Tr>
            <Th color='white' >ID</Th>
            <Th color='white' ><FormattedMessage id='users:name' /></Th>
            <Th color='white' ><FormattedMessage id='users:username' /></Th>
            <Th color='white' ><FormattedMessage id='users:email' /></Th>
            <Th color='white' ><FormattedMessage id='users:website' /></Th>
          </Tr>
        </Thead>
        <Tbody>

          {userList.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.website}</Td>
            </Tr>
          ))}

        </Tbody>
      </Table>
    </TableContainer>
    </Box>
  );
}

export default UserList;
