// FormPermintaanRadiologi.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPermintaanRadiologi = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    permintaan_id: "",
    kategori_pemeriksaan: "",
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {

    // Log the formData to console
    console.log("Form Data:", formData);

    // Optionally, show an alert after submission
    alert("Form Permintaan Radiologi submitted!");

    // Optionally, navigate to another page after submission
    navigate('/PermintaanRadiologiJenis');
  };

  return (
    <div>
      <h2>Form Permintaan Radiologi kategori</h2>
      <form>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" onChange={handleChange} value={formData.id} />

        <label htmlFor="permintaan_id">Permintaan ID:</label>
        <input type="text" id="permintaan_id" name="permintaan_id" onChange={handleChange} value={formData.permintaan_id} />

        <label htmlFor="kategori_pemeriksaan">Kategori Pemeriksaan:</label>
        <input type="text" id="kategori_pemeriksaan" name="kategori_pemeriksaan" onChange={handleChange} value={formData.kategori_pemeriksaan} />

        <button type="button" onClick={handleSave}>
          Simpan
        </button>
      </form>
    </div>
  );
};

export default FormPermintaanRadiologi;
