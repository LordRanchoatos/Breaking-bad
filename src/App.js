import React, { useState, useEffect } from 'react';
import  axios from 'axios';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = ()  => {
  const [items, setItems] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [query, setquery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result =await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setquery(q) }/>
      <CharacterGrid items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
