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
        <div ref={modalRef} className="bg-white max-w-[90vw] max-h-[75svh] overflow-y-scroll p-4 rounded shadow-lg">
            <img src={img} alt={imgAlt} className="w-full max-h-96 object-scale-down rounded mb-4" />

            <h2 className="text-xl font-semibold">{titre}</h2>
            <p className="text-gray-600">{annee}</p>
            <p className="mt-2">{desc}</p>
            <button className="mt-4 ml-auto flex px-4 py-2 bg-red-500 text-white rounded" onClick={onClose}>Fermer</button>
        </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  titre: PropTypes.string,
  annee: PropTypes.string,
  desc: PropTypes.string,
};
