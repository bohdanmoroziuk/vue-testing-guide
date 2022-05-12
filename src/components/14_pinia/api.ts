/* eslint-disable import/prefer-default-export */

import axios from 'axios';

export const getUsers = async () => {
  const response = await axios.get('/api/users');

  return response.data;
};

export const deleteUser = async (id: string) => {
  await axios.delete(`/api/users/${id}`);
};
