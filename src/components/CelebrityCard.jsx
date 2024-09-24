// CelebrityCard.js
import { useState } from 'react';

const CelebrityCard = ({ celebrity, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(celebrity);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    onUpdate(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="celebrity-card">
      <img src={celebrity.picture} alt={celebrity.first} />
      {isEditing ? (
        <>
          <input name="first" value={formData.first} onChange={handleChange} />
          <input name="last" value={formData.last} onChange={handleChange} />
          <input name="age" value={formData.age} onChange={handleChange} />
          <input name="country" value={formData.country} onChange={handleChange} />
          <textarea name="description" value={formData.description} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{`${celebrity.first} ${celebrity.last}`}</h3>
          <p>Email: {celebrity.email}</p>
          <p>Country: {celebrity.country}</p>
          <p>{celebrity.description}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default CelebrityCard;
