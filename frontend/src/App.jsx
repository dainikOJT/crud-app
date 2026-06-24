import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/api/items';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      setItems(data);
      setError('');
    } catch (err) {
      setError('Ensure backend is running. ' + err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) return;

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId ? `${API_URL}/${editingId}` : API_URL;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Operation failed');
      
      setFormData({ name: '', description: '' });
      setEditingId(null);
      fetchItems();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (item) => {
    setFormData({ name: item.name, description: item.description });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete item');
      fetchItems();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>{editingId ? 'Edit Item' : 'Add New Item'}</h2>
      
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '8px', flex: 1 }}
        />
        <input
          name="description"
          placeholder="Item Description"
          value={formData.description}
          onChange={handleChange}
          required
          style={{ padding: '8px', flex: 2 }}
        />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          {editingId ? 'Update' : 'Add'}
        </button>
        {editingId && (
          <button 
            type="button" 
            onClick={() => { setEditingId(null); setFormData({name: '', description: ''}) }}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Cancel
          </button>
        )}
      </form>

      <h3>Item List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li key={item._id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong style={{ display: 'block', fontSize: '18px' }}>{item.name}</strong>
              <span style={{ color: '#555' }}>{item.description}</span>
            </div>
            <div>
              <button onClick={() => handleEdit(item)} style={{ marginRight: '10px', padding: '6px 12px', cursor: 'pointer' }}>Edit</button>
              <button onClick={() => handleDelete(item._id)} style={{ color: 'white', backgroundColor: '#dc3545', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>
          </li>
        ))}
        {items.length === 0 && <p style={{ color: '#666', fontStyle: 'italic' }}>No items found. Add one above!</p>}
      </ul>
    </div>
  );
}

export default App;
