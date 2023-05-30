"use client"

import React from 'react'

interface TodoItemProps{
    id: string,
    title: string,
    complete: boolean,
    toggoleTodo: (id: string, complete: boolean) => void,
}

const TodoItem = ({id, title, complete, toggoleTodo}: TodoItemProps) => {
  return (
        <li className='flex gap-1 items-center' key={id}>
            <input type="checkbox" id={id} className='cursor-pointer peer'
             defaultChecked={complete}
             onChange={e => toggoleTodo(id, e.target.checked)} />
            <label htmlFor={id} className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
        </li>
  );
}

export default TodoItem
