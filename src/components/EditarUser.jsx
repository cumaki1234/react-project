import React, { useState } from 'react';
import '../EditarUser.css'; // Ajusta el nombre según tu archivo de estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useDropzone } from 'react-dropzone';
import { Navbar, Container } from 'react-bootstrap';



const EditarUser = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [showEditLabel, setShowEditLabel] = useState(false);

    const onDrop = (acceptedFiles) => {
      // Puedes realizar acciones adicionales con el archivo seleccionado aquí, como enviarlo al servidor.
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    };
  
    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      multiple: false,
      onDrop,
    });

  return (
    <div>
        <div className="left-container">
    <div
        {...getRootProps()}
        className="profile-image-container"
        onMouseEnter={() => setShowEditLabel(true)}
        onMouseLeave={() => setShowEditLabel(false)}
      >
        <input {...getInputProps()} />
        {profileImage ? (
          <>
            <img src={profileImage} alt="Profile" className="profile-image" />
            {showEditLabel && (
              <div className="edit-label">
                <p>Editar foto</p>
              </div>
            )}
          </>
        ) : (
        <div className="profile-placeholder">
          <FontAwesomeIcon icon={faUserPlus} className="plus-icon" />
          <p>Cambiar foto de perfil</p>
        </div>
      )}
    </div>
  </div>
  </div>
  );
};

export default EditarUser;
