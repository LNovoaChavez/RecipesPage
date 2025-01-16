import { useAuth } from "@/context/AuthContext";

const UserProfile = () => {
  const { dataUser } = useAuth(); 

  const defaultImage = '/path/to/default-image.jpg'; 

  return (
    <div className="p-4 space-y-4 pt-10 bg-white rounded-lg ">
      {/* Título */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Información del usuario</h2>

      <div className="flex justify-center">
        {/* Imagen del usuario */}
        <img 
          src={dataUser?.image || defaultImage} 
          alt="User Profile" 
          className="w-32 h-32 rounded-full object-cover" 
        />
      </div>

      {/* Datos del usuario */}
      <div>
        <p className="text-lg text-gray-800"><strong>Nombre:</strong> {dataUser?.user?.name || 'N/A'}</p>
      </div>
      <div>
        <p className="text-lg text-gray-800"><strong>Apellido:</strong> {dataUser?.user?.lastname || 'N/A'}</p>
      </div>
      <div>
        <p className="text-lg text-gray-800"><strong>Correo electrónico:</strong> {dataUser?.user?.email || 'N/A'}</p>
      </div>
    </div>
  );
};

export default UserProfile;
