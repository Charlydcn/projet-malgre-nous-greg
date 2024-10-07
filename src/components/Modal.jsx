import PropTypes from 'prop-types';
import { useRef } from 'react';

export default function Modal({ isOpen, onClose, img, imgAlt, titre, annee, desc }) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}  // Clic sur l'extérieur de la modale
    >
        <div ref={modalRef} className="bg-white w-4/5 max-h-[80%] overflow-y-scroll p-4 rounded shadow-lg">
            <img src={img} alt={imgAlt} className="w-full h-auto rounded mb-4" />
            <h2 className="text-xl font-semibold">{titre}</h2>
            <p className="text-gray-600">{annee}</p>
            <p className="mt-2">{desc}</p>
            <button className="mt-4 ml-auto flex px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>Fermer</button>
        </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  annee: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
