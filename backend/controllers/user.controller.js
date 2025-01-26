import User from "../models/user.model.js";

export const getUsersForSideBar=async(req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const getAllUsers = async (req, res) => {
    try {
      const allUsers = await User.find().select("-password");  // Récupère tous les utilisateurs, sans le mot de passe
      res.status(200).json(allUsers);  // Retourne la liste des utilisateurs
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Récupère l'ID depuis les paramètres de la requête
        const deletedUser = await User.findByIdAndDelete(id); // Supprime l'utilisateur correspondant

        if (!deletedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const editUser = async (req, res) => {
    try {
        const { id } = req.params; // Récupère l'ID depuis les paramètres
        const updatedData = req.body; // Récupère les données envoyées pour la mise à jour

        const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
            new: true, // Retourne l'utilisateur mis à jour
            runValidators: true, // Valide les données avant de les enregistrer
        });

        if (!updatedUser) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.status(200).json({ message: "Utilisateur mis à jour avec succès", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createUser = async (req, res) => {
    try {
        const { fullName, username, gender, password } = req.body;

        // Vérifie si tous les champs requis sont fournis
        if (!fullName || !username || !gender || !password) {
            return res.status(400).json({ message: "Tous les champs sont requis." });
        }

        // Vérifie si l'utilisateur existe déjà
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Nom d'utilisateur déjà utilisé." });
        }

        // Crée un nouvel utilisateur
        const newUser = new User({ fullName, username, gender, password });
        await newUser.save();

        res.status(201).json({ message: "Utilisateur créé avec succès", user: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getUserById = async (req, res) => {
    try {
      const userId = req.params.id; // Récupère l'ID à partir des paramètres de la requête
      const user = await User.findById(userId).select("-password"); // Recherche l'utilisateur et exclut le mot de passe
  
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" }); // Si l'utilisateur n'existe pas
      }
  
      res.status(200).json(user); // Retourne les informations de l'utilisateur
    } catch (error) {
      res.status(500).json({ message: error.message }); // Retourne une erreur en cas de problème
    }
  };