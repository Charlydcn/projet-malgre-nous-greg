import { useState } from 'react';
import ElementFrise from "./components/ElementFrise";
import Modal from "./components/Modal";

// Images
import monumentTurckheim from "./assets/img/monuments/turckheim.jpg";
import monumentCronenbourg from "./assets/img/monuments/cronenbourg.jpg";
import monumentWintzenbach from "./assets/img/monuments/wintzenbach.jpg";
import monumentWittenheim from "./assets/img/monuments/wittenheim.jpg";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="p-4 h-screen">
        <h1 className="text-3xl mb-10 text-slate-800 font-semibold text-center">Frise chronologique</h1>

        <div className="h-full w-full relative">
          <div className="w-1 h-full z-10 rounded bg-slate-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <div className="elementsFrise w-full h-full flex flex-col gap-8">
            <ElementFrise 
              img={monumentTurckheim}
              imgAlt="Monument Malgré-nous Turckheim"
              titre="Turckheim"
              annee="1998"
              onClick={() => openModal({
                img: monumentTurckheim,
                imgAlt: "Monument Malgré-nous Turckheim",
                titre: "Turckheim",
                annee: "1998",
                desc: "Le monument dédié aux malgré-nous affiche seulement : « In memoriam 1939-1945. La croix en grès rouge surplombe Turckheim depuis 1956. Après la Seconde Guerre mondiale, cinquante-six hommes incorporés de force ne rentrent pas du Front. La commune tarde à reconstruire un monument."
              })}
            />

            <ElementFrise 
              img={monumentWintzenbach}
              imgAlt="Monument Malgré-nous Wintzenbach"
              titre="Wintzenbach"
              annee="2002"
              desc="Description du monument Wintzenbach."
              onClick={() => openModal({
                img: monumentWintzenbach,
                imgAlt: "Monument Malgré-nous Wintzenbach",
                titre: "Wintzenbach",
                annee: "2002",
                desc: "Description du monument Wintzenbach."
              })}
            />
            
            <ElementFrise 
              img={monumentCronenbourg}
              imgAlt="Monument Malgré-nous Cronenbourg"
              titre="Cronenbourg"
              annee="2006"
              desc="Description du monument Cronenbourg."
              onClick={() => openModal({
                img: monumentCronenbourg,
                imgAlt: "Monument Malgré-nous Cronenbourg",
                titre: "Cronenbourg",
                annee: "2006",
                desc: "Description du monument Cronenbourg."
              })}
            />
            
            <ElementFrise 
              img={monumentWittenheim}
              imgAlt="Monument Malgré-nous Wittenheim"
              titre="Mittelschaeffolsheim"
              annee="2008"
              desc="Description du monument Mittelschaeffolsheim."
              onClick={() => openModal({
                img: monumentWittenheim,
                imgAlt: "Monument Malgré-nous Wittenheim",
                titre: "Mittelschaeffolsheim",
                annee: "2008",
                desc: "Description du monument Mittelschaeffolsheim."
              })}
            />
          </div>
        </div>
      </section>

      <Modal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            img={modalContent.img} 
            imgAlt={modalContent.imgAlt} 
            titre={modalContent.titre} 
            annee={modalContent.annee} 
            desc={modalContent.desc}
      />
    </>
  );
}

export default App;
