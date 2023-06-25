import React, { useState, useRef } from 'react'

const SearchHero = ({ searchHero }) => {

  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const onSearch = () => {
    setSearch(inputRef.current.value)
    searchHero(search);
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Search hero by name' onChange={onSearch} />
    </div>
  )
}

export default SearchHero