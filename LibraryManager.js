import React, { useState } from 'react';

export default function LibraryManager() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: '1984', author: 'George Orwell' },
  ]);

  const [staff, setStaff] = useState([
    { id: 1, name: 'Alice', role: 'Librarian' },
    { id: 2, name: 'Bob', role: 'Assistant' },
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [newStaff, setNewStaff] = useState({ name: '', role: '' });

  const handleAddBook = () => {
    const id = Date.now();
    setBooks([...books, { id, ...newBook }]);
    setNewBook({ title: '', author: '' });
  };

  const handleAddStaff = () => {
    const id = Date.now();
    setStaff([...staff, { id, ...newStaff }]);
    setNewStaff({ name: '', role: '' });
  };

  const handleDeleteBook = (id) => setBooks(books.filter(b => b.id !== id));
  const handleDeleteStaff = (id) => setStaff(staff.filter(s => s.id !== id));

  return (
    <div style={{ padding: 20 }}>
      <h1>📚 Library Management</h1>

      {/* Books Section */}
      <h2>Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => handleDeleteBook(book.id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        placeholder="Title"
        value={newBook.title}
        onChange={e => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        placeholder="Author"
        value={newBook.author}
        onChange={e => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button onClick={handleAddBook}>Add Book</button>

      <hr />

      {/* Staff Section */}
      <h2>Staff</h2>
      <ul>
        {staff.map(member => (
          <li key={member.id}>
            {member.name} ({member.role})
            <button onClick={() => handleDeleteStaff(member.id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        placeholder="Name"
        value={newStaff.name}
        onChange={e => setNewStaff({ ...newStaff, name: e.target.value })}
      />
      <input
        placeholder="Role"
        value={newStaff.role}
        onChange={e => setNewStaff({ ...newStaff, role: e.target.value })}
      />
      <button onClick={handleAddStaff}>Add Staff</button>
    </div>
  );
}
