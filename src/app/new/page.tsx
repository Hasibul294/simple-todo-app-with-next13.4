import Link from 'next/link';
import React from 'react'

const NewPage = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form className="flex gap-2 flex-col" action="">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded
          px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className='flex gap-1 justify-end'>
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancle
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default NewPage
