import PropTypes from 'prop-types';

export default function ElementFrise({ 
    img, 
    imgAlt = "Monument Malgré-nous", 
    titre, 
    annee, 
    onClick,
    dataAos
}) {
    return (
        <div className="elementFrise" onClick={onClick} data-aos={dataAos}>
            <div className='point'></div>

            <img src={img} alt={imgAlt} />

            <div className='contenu'>
                <h3>{annee}</h3>
                <h2>{titre}</h2>
            </div>
        </div>
    );
}

ElementFrise.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    titre: PropTypes.string.isRequired,
    annee: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    dataAos: PropTypes.string, // Assure-toi d'ajouter cela
};
