import { User } from "../types";

export const getUsersDate = async (func: (users: User[]) => void) => {
  const response = await fetch('https://gorest.co.in/public/v1/users');
  const result = await response.json();
  func(result.data);
}