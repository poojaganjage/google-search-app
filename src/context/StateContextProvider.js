import React, {useState, useContext, createContext} from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search72.p.rapidapi.com';

function StateContextProvider({children}) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async(url) => {
    setLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        'X-RapidAPI-Host': 'google-search72.p.rapidapi.com',
        'X-RapidAPI-Key': '6eb5197ab9msh8fd415f141fbc19p17da19jsn28f650f67417'
      }
    });
    console.log(res);
    const data = await res.json();
    setResults(data);
    setLoading(false);
  }
  return (
    <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
        {children}
    </StateContext.Provider>
  );
}
export const useStateContext = () => {
  return useContext(StateContext);
}
export default StateContextProvider;
