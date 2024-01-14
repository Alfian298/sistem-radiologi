// FormPermintaanRadiologi.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PermintaanRadiologiJenis = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    kategori_id: "",
    jenis_pemeriksaan: "",
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {

    // Log the formData to console
    console.log("Form Data:", formData);

    // Optionally, show an alert after submission
    alert("Form Permintaan Radiologi submitted!");

    // Optionally, navigate to another page after submission
    navigate('/selesai');
  };

  return (
    <div>
      <h2>Form Permintaan Radiologi Jenis</h2>
      <form>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" onChange={handleChange} value={formData.id} />

        <label htmlFor="kategori_id">Kategori ID:</label>
        <input type="text" id="kategori_id" name="kategori_id" onChange={handleChange} value={formData.kategori_id} />

        <label htmlFor="jenis_pemeriksaan">Jenis Pemeriksaan:</label>
        <input type="text" id="jenis_pemeriksaan" name="jenis_pemeriksaan" onChange={handleChange} value={formData.jenis_pemeriksaan} />

        <button type="button" onClick={handleSubmit}>
          Simpan
        </button>
      </form>
    </div>
  );
};

export default PermintaanRadiologiJenis;
