import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserTable() {
  const [users, setUsers] = useState([]); // Stocke les données des utilisateurs
  const [loading, setLoading] = useState(true); // Indique si les données sont en cours de chargement

  // Récupère les utilisateurs depuis l'API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users/all");
        const data = await response.json();
        setUsers(data); // Stocke les données récupérées
        setLoading(false); // Désactive l'indicateur de chargement
      } catch (error) {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        setLoading(false); // Désactive l'indicateur de chargement même en cas d'erreur
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container" id="containerUser">
      <h2>User Records</h2>
      <div className="table-container">
        <Link to="/user/create" className="btn btn-info">Add new user</Link>

        {loading ? (
          <p>Loading users...</p> // Affiche un message de chargement si les données sont encore en train d'arriver
        ) : (
          <table >
            <thead>
              <tr>
                <th>Id</th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="m-2">{user._id}</td>
                  <td className="m-2">{user.fullName}</td>
                  <td className="m-2">{user.username}</td>
                  <td className="m-2">{user.gender}</td>
                  <td>
                  <a href={`/users/edit/${user._id}`} className="btn btn-primary">Edit</a>

                    <button
  className="btn btn-danger"
  onClick={async () => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?");
    if (confirmDelete) {
      try {
        const response = await fetch(`/api/users/${user._id}`, { method: "DELETE" });
        const data = await response.json();

        if (response.ok) {
          alert(data.message);
          setUsers(users.filter(u => u._id !== user._id)); // Met à jour la liste sans l'utilisateur supprimé
        } else {
          alert("Erreur : " + data.message);
        }
      } catch (error) {
        console.error("Erreur :", error);
        alert("Une erreur est survenue.");
      }
    }
  }}
>
  Delete
</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
