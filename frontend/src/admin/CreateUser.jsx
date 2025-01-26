import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    gender: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/admin"); // Redirige vers la liste des utilisateurs
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'utilisateur :", error);
    }
  };

  return (
    <div className="container" id="containerUser">
      <h2>Créer un nouvel utilisateur</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
        <label className="form-label">
          Nom complet :</label>
          <input
          className="form-control"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
        <label className="form-label">
          user name : </label>
          <input
           className="form-control"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
       
        </div>
       
        <div className="mb-3">
        <label className="form-label">
          Mot de passe : </label>
          <input
          className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
       </div>
       <div className="mb-3">
        <label className="form-label">
          Genre : </label>
          <br></br>
          <select
          className="form-select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
       </div>
        <button type="submit" className="btn btn-primary">
          Créer
        </button>
      </form>
    </div>
  );
}
