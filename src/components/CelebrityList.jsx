// list.js
import  { useState, useEffect } from 'react';
import CelebrityCard from './CelebrityCard';
import celebritiesData from '../data/celebrities.json';

const CelebrityList = () => {
  const [celebrities, setCelebrities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCelebrities(celebritiesData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCelebrities = celebrities.filter((celebrity) =>
    `${celebrity.first} ${celebrity.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdate = (updatedCelebrity) => {
    const updatedList = celebrities.map((celeb) =>
      celeb.id === updatedCelebrity.id ? updatedCelebrity : celeb
    );
    setCelebrities(updatedList);
  };

  return (
    <div className="celebrity-list">
      <input
        type="text"
        placeholder="Search celebrities..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="celebrity-cards">
        {filteredCelebrities.map((celebrity) => (
          <CelebrityCard key={celebrity.id} celebrity={celebrity} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default CelebrityList;
