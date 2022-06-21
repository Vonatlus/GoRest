import { createContext, useEffect, useState } from 'react';
import { getUsersDate } from './API/users-get';
import { User } from './types';

export interface contextValue {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  users: User[],
  setUsers: React.Dispatch<React.SetStateAction<User[]>>,
  filtredUsers: User[],
  setFiltredUsers: React.Dispatch<React.SetStateAction<User[]>>,
  gender: string,
  setGender: React.Dispatch<React.SetStateAction<string>>,
  page: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  rowsPerPage: number,
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>,
}

type GoRestProviderProps = {
  children: React.ReactNode
}

export const GoRestContext = createContext({} as contextValue);

export const GoRestProvider = ({ children }: GoRestProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [filtredUsers, setFiltredUsers] = useState<User[]>(users);
  const [gender, setGender] = useState<string>('all');
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const contextValue: contextValue = {
    user,
    setUser,
    users,
    setUsers,
    filtredUsers,
    setFiltredUsers,
    gender,
    setGender,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage
  }

  useEffect(() => {
    getUsersDate(setUsers);
  }, [])

  useEffect(() => {
    if (gender === 'all') {
      setFiltredUsers(users);
    } else {
      setFiltredUsers(users.filter(user => user.gender === gender));
    }
  }, [gender, users])

  return (
    < GoRestContext.Provider value={contextValue}>
      {children}
    </GoRestContext.Provider>
  )
}