// Home.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'; // Perubahan disini

const initialFormData = {
  pasien_id: "",
  nomor_pemeriksaan: "",
  waktu_permintaan_pemeriksaan: "",
  unit_pengirim: "",
  prioritas_pemeriksaan: "",
  diagnosis_kerja: "",
  catatan_permintaan: "",
};

const Home = () => {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate(); // Perubahan disini

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const requestData = {
      id: uuidv4(),
      ...formData,
      detail_permintaan_radiologi: [
        {
          pemeriksaan_radiologi_id: "kategori_radiologi_id_1",
        },
        {
          pemeriksaan_radiologi_id: "jenis_radiologi_id_1",
        },
      ],
    };

    console.log("Data yang disimpan:", requestData);

    // Setelah menyimpan, reset formulir
    setFormData(initialFormData);
    alert("Data berhasil disimpan!");

    // Navigasi kembali ke halaman formulir
    navigate("/FormPermintaanRadiologi"); // Perubahan disini
  };

  return (
    <div className="App">
      <h1>Form Permintaan Pemeriksaan Radiologi</h1>
      <form>
        {Object.keys(initialFormData).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key.replace(/_/g, " ").toUpperCase()}:</label>
            <input type="text" id={key} name={key} onChange={handleChange} value={formData[key]} />
          </div>
        ))}
      </form>

      <button type="button" onClick={handleSave}>
        Simpan
      </button>
    </div>
  );
};

export default Home;