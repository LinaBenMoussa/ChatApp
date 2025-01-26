import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams(); // Récupère l'ID de l'utilisateur depuis l'URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    gender: "",
  });

  const [loading, setLoading] = useState(true);

  // Charger les données de l'utilisateur pour pré-remplir le formulaire
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données utilisateur.");
        }
        const data = await response.json();
        console.log(data);
        setFormData({
          fullName: data.fullName,
          username: data.username,
          gender: data.gender,
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Utilisateur modifié avec succès.");
        navigate("/admin"); // Redirige vers la liste des utilisateurs après l'édition
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      console.error("Erreur lors de la modification de l'utilisateur :", error);
    }
    navigate("/admin"); // Redirige vers la list
  };

  if (loading) {
    return <p>Chargement des données utilisateur...</p>;
  }

  return (
    <div className="container" id="containerUser">
      <h2>Modifier un utilisateur</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom complet :
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nom :
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Genre :
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
        </label>
        <button type="submit" className="btn btn-primary">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}
