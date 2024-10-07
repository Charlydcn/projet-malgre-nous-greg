import PropTypes from 'prop-types';

export default function ElementFrise({ img, imgAlt, titre, annee, onClick }) {
    
    return (
        <div className="elementFrise" onClick={onClick}>
            <div className='point'></div>

            <img src={img} alt={imgAlt} />

            <div className='contenu'>
                <h3>{annee}</h3>
                <h2>{titre}</h2>

                {/* <p>{desc}</p> */}
            </div>
        </div>
    )
}

ElementFrise.propTypes = {
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    titre: PropTypes.string.isRequired,
    annee: PropTypes.string.isRequired,
    // desc: PropTypes.string.isRequired,
    
    onClick: PropTypes.func.isRequired,
};

ElementFrise.defaultProps = {
    imgAlt: "Monument Malgré-nous",
};
