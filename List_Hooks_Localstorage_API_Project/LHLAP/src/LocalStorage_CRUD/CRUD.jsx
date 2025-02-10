import React, { useState, useEffect } from "react";

function CRUD() {
  const [data, setData] = useState([]); // State to hold the list of people
  const [name, setName] = useState(""); // State for name input
  const [age, setAge] = useState(""); // State for age input
  const [isEditing, setIsEditing] = useState(false); // State to check if editing
  const [editIndex, setEditIndex] = useState(null); // Index of the item being edited

  // Load data from LocalStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("people")) || [];
    setData(storedData);
  }, []);

  // Save data to LocalStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(data));
  }, [data]);

  // Handle adding or updating a person
  const handleSubmit = () => {
    if (name.trim() === "" || age.trim() === "") {
      alert("Both name and age are required!");
      return;
    }

    if (isEditing) {
      const updatedData = [...data];
      updatedData[editIndex] = { name, age };
      setData(updatedData);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setData([...data, { name, age }]);
    }

    setName("");
    setAge("");
  };

  // Handle editing a person
  const handleEdit = (index) => {
    setName(data[index].name);
    setAge(data[index].age);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle deleting a person
  const handleDelete = (index) => {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  };

  return (
    <div>
      <h2>CRUD App with Name & Age</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        /> <br /><br />
        <button
          onClick={handleSubmit}
        > 
          {isEditing ? "Update" : "Add"}
        </button> 
      </div>
      <ul>
        {data.map((person, index) => (
          <li
            key={index}
          >
            <span>
              <strong>Name:</strong> {person.name} | <strong>Age:</strong> {person.age}
            </span>
            <div>
              <button
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CRUD;
