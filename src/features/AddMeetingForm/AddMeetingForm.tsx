import Link from "next/link";
import { useState } from "react";

export function AddMeetingForm() {
  const [formData, setFormData] = useState({
    // id: "",
    unit: "",
    ruangMeeting: "",
    kapasitas: "",
    tanggalRapat: "",
    waktuStart: "",
    waktuEnd: "",
    jumlahPeserta: "",
    jenisKonsumsi: [] as string[],
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedKonsumsi = checked
        ? [...prev.jenisKonsumsi, value]
        : prev.jenisKonsumsi.filter((item) => item !== value);
      return { ...prev, jenisKonsumsi: updatedKonsumsi };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const startId = "1000";

    const payload = {
      id: startId,
      ...formData,
      kapasitas: parseInt(formData.kapasitas, 10),
      jumlahPeserta: parseInt(formData.jumlahPeserta, 10),
    };

    try {
      const response = await fetch("/api/add-meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Meeting added successfully!");
      } else {
        setMessage(result.message || "Error adding meeting");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Add Meeting</h1>

      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-row justify-between">
          <div>
            {/* Unit Select */}
            <label className="block font-bold">Unit</label>
            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Unit</option>
              <option value="Unit Keuangan">Unit Keuangan</option>
              <option value="Unit SDM">Unit SDM</option>
            </select>
          </div>
          {/* Ruang Meeting Select */}
          <div>
            <label className="block font-bold">Ruang Meeting</label>
            <select
              name="ruangMeeting"
              value={formData.ruangMeeting}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Ruang Meeting</option>
              <option value="Ruang Prambanan">Ruang Prambanan</option>
            </select>
          </div>
        </div>
        {/* Kapasitas */}
        <div>
          <label className="block font-bold">Kapasitas</label>
          <input
            type="number"
            name="kapasitas"
            value={formData.kapasitas}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <hr />

        {/* Informasi Rapat */}
        <h2 className="font-bold">Informasi Rapat</h2>

        <div className="flex flex-row justify-between">
          {/* Tanggal Rapat */}
          <div>
            <label className="block font-bold">Tanggal Rapat</label>
            <input
              type="date"
              name="tanggalRapat"
              value={formData.tanggalRapat}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Waktu Start */}
          <div>
            <label className="block font-bold">Waktu Start</label>
            <input
              type="time"
              name="waktuStart"
              value={formData.waktuStart}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Waktu End */}
          <div>
            <label className="block font-bold">Waktu End</label>
            <input
              type="time"
              name="waktuEnd"
              value={formData.waktuEnd}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Jumlah Peserta */}
        <div>
          <label className="block font-bold">Jumlah Peserta</label>
          <input
            type="number"
            name="jumlahPeserta"
            value={formData.jumlahPeserta}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Jenis Konsumsi Checkbox */}
        <div>
          <label className="block font-bold">Jenis Konsumsi</label>
          {["Snack Siang", "Makan Siang", "Snack Sore"].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="jenisKonsumsi"
                value={option}
                checked={formData.jenisKonsumsi.includes(option)}
                onChange={handleCheckboxChange}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-end gap-1">
          <button className="w-1/3 p-2 bg-transparent text-red-500 rounded">
            <Link href="/">Batal</Link>
          </button>
          <button
            type="submit"
            className="w-1/3 p-2 bg-teal-500 text-white rounded"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}
