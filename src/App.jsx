import { useState, useEffect } from 'react';
import ElementFrise from "./components/ElementFrise";
import Modal from "./components/Modal";

import AOS from 'aos';
import 'aos/dist/aos.css';


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

  useEffect(() => {
    AOS.init({
        once: true,
    });
  }, []);

  // Tableau des monuments
  const monuments = [
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wettolsheim",
      annee: "1952",
      desc: "Description du monument de Stèle du souvenir"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wintzenheim",
      annee: "1953",
      desc: "Description du monument de Chapelle des Bois avec mémorial ADEIF au pied du calvaire"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Soultz",
      annee: "1955",
      desc: "Description du monument de Mémorial du Rote Rain, Croix et autel en grès rose des Vosges"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Obernai",
      annee: "1956",
      desc: "Description du monument de Calvaire monumental au mont national"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Turckheim",
      annee: "1956",
      desc: "Description du monument de Mémorial érigé sur une colline à 383 mètres d'altitude"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wasselonne",
      annee: "1959",
      desc: "Description du monument de Monument, place du château"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Schlierbach",
      annee: "1970",
      desc: "Description du monument de Chapelle au pied des premières collines du Sundgau"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Mulhouse",
      annee: "1983",
      desc: "Description du monument de Mémorial à côté de la rue Belvédère"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Heimsbrunn",
      annee: "1990",
      desc: "Description du monument de Ex-voto"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Marlenheim",
      annee: "1991",
      desc: "Description du monument de Plaque Tambov de bronze sur la partie basse avant du monument aux morts"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Molsheim",
      annee: "1991",
      desc: "Description du monument de Plaque Tambov de bronze"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Rosheim",
      annee: "1991",
      desc: "Description du monument de Plaque Tambov de bronze"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Nordheim",
      annee: "1993",
      desc: "Description du monument de Plaque de bronze"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Soufflenheim",
      annee: "1993",
      desc: "Description du monument de Plaque de bronze"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Waldolwisheim",
      annee: "1993",
      desc: "Description du monument de Arbre, cimetière"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Durrenbach",
      annee: "1994",
      desc: "Description du monument de Ex-voto"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gare de Saint-Louis",
      annee: "1996",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gare de Colmar",
      annee: "1997",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Ingersheim",
      annee: "1997",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "SMAM",
      annee: "1997",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wintzenheim",
      annee: "1997",
      desc: "Description du monument de Plaque apposée sur l'autel-mémorial en grès rouge"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Strasbourg",
      annee: "1999",
      desc: "Description du monument de Square des Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Cernay",
      annee: "2000",
      desc: "Description du monument de Statue Tambov, à côté du Musée de la Porte de Thann"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gare de Molsheim",
      annee: "2000",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Haguenau",
      annee: "2000",
      desc: "Description du monument de Statue Tambov, Cimetière"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Place de la Gare de Truchtersheim",
      annee: "2000",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Ribeauvillé",
      annee: "2000",
      desc: "Description du monument de Statue Tambov, Espace vert"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Riedisheim",
      annee: "2000",
      desc: "Description du monument de Statue Tambov"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Altkirch",
      annee: "2001",
      desc: "Description du monument de Statue Tambov, à côté d'une voie de circulation importante"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Kientzheim",
      annee: "2002",
      desc: "Description du monument de Plaque incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Sélestat",
      annee: "2002",
      desc: "Description du monument de Statue Tambov, Parvis de l'église"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wittenheim",
      annee: "2002",
      desc: "Description du monument de Place des Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Colmar",
      annee: "2003",
      desc: "Description du monument de Square des Malgré-Nous, ancien hôpital Baur"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Jebsheim",
      annee: "2003",
      desc: "Description du monument de Mur du souvenir, Parc du Souvenir"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Bischwiller",
      annee: "2005",
      desc: "Description du monument de Arbre"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Hatten",
      annee: "2005",
      desc: "Description du monument de Arbre, enceinte extérieure du musée de l'Abri"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Schirmeck",
      annee: "2005",
      desc: "Description du monument de Mémorial à proximité du camp de Struthof"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Ammerschwihr",
      annee: "2006",
      desc: "Description du monument de Plaque (remplace celle de 1993)"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Bouxwiller",
      annee: "2006",
      desc: "Description du monument de Plaque incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gare de Saverne",
      annee: "2006",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gries",
      annee: "2006",
      desc: "Description du monument de Place des Incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Pfaffenhoffen",
      annee: "2006",
      desc: "Description du monument de Plaque incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Holtzwihr",
      annee: "2007",
      desc: "Description du monument de Fontaine, mairie"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Molsheim",
      annee: "2007",
      desc: "Description du monument de Arbre"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Ribeauvillé",
      annee: "2007",
      desc: "Description du monument de Rocher apposée d'une plaque"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Riquewihr",
      annee: "2007",
      desc: "Description du monument de Plaque commémorative sur le monument aux morts"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Sainte-Croix-aux-Mines",
      annee: "2007",
      desc: "Description du monument de Plaque commémorative à droite du monument aux morts"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Schirmeck",
      annee: "2007",
      desc: "Description du monument de Arbre"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Soultz-les-Bains",
      annee: "2007",
      desc: "Description du monument de Deux plaques commémoratives (incorporés de force et rescapés de Tambov)"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Colmar",
      annee: "2008",
      desc: "Description du monument de Arbre"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Hatten",
      annee: "2008",
      desc: "Description du monument de Rocher apposée d'une plaque"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Kunheim",
      annee: "2008",
      desc: "Description du monument de Plaque à proximité du monument aux morts"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Munster",
      annee: "2008",
      desc: "Description du monument de Rocher apposée d'une plaque"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Saverne",
      annee: "2008",
      desc: "Description du monument de Square des Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Guebwiller",
      annee: "2009",
      desc: "Description du monument de Rocher apposée d'une plaque commémorative"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Richwiller",
      annee: "2009",
      desc: "Description du monument de Place en l'honneur des Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Schiltigheim",
      annee: "2009",
      desc: "Description du monument de Monument « Pétales tombantes », espace vert"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Houssen",
      annee: "2010",
      desc: "Description du monument de Plaque apposée sur un rocher"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Turckheim",
      annee: "2010",
      desc: "Description du monument de Stèle à proximité du monument aux morts"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Kaysersberg",
      annee: "2011",
      desc: "Description du monument de Rocher + stèle, rue 18 novembre, place Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Le Bonhomme",
      annee: "2011",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wittisheim",
      annee: "2011",
      desc: "Description du monument de Plaque, retrace l'histoire du chêne"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Baldersheim",
      annee: "2012",
      desc: "Description du monument de Plaque"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Baltzenheim",
      annee: "2012",
      desc: "Description du monument de Stèle avec trois plaques"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Dorlisheim",
      annee: "2012",
      desc: "Description du monument de Arbre souvenir"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Witternheim",
      annee: "2012",
      desc: "Description du monument de Plaque incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Grussenheim",
      annee: "2015",
      desc: "Description du monument de Plaque Malgré Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Mommenheim",
      annee: "2015",
      desc: "Description du monument de Arbre"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wintzenheim",
      annee: "2015",
      desc: "Description du monument de Parvis des Incorporés de force avec monument"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Ammerschwihr",
      annee: "2016",
      desc: "Description du monument de Place des Incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Sundhoffen",
      annee: "2016",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Zimmerbach",
      annee: "2016",
      desc: "Description du monument de Plaque apposée près du monument aux morts, près de l'église Saint-Georges"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Andolsheim",
      annee: "2017",
      desc: "Description du monument de Plaque + rocher"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Bennwihr",
      annee: "2017",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Erstein",
      annee: "2017",
      desc: "Description du monument de Arbre"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Mulhouse",
      annee: "2017",
      desc: "Description du monument de Stèle, square Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Dambach-la-Ville",
      annee: "2019",
      desc: "Description du monument de Place des Incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Zillisheim",
      annee: "2019",
      desc: "Description du monument de Stèle, place de la Mairie"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Saint-Hippolyte",
      annee: "2021",
      desc: "Description du monument de Plaque au pied du monument aux morts communal"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Lampertsloch",
      annee: "2022",
      desc: "Description du monument de Place des Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Richwiller",
      annee: "2022",
      desc: "Description du monument de Verger mémoriel"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Steinbourg",
      annee: "2022",
      desc: "Description du monument de Stèle, parvis de l'église"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wintzenheim",
      annee: "2022",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Leimbach",
      annee: "2023",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Niederschaeffolsheim",
      annee: "2023",
      desc: "Description du monument de Arbre, stèle et place des Incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Saint-Hippolyte",
      annee: "2023",
      desc: "Description du monument de Verger mémoriel"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Wattwiller",
      annee: "2023",
      desc: "Description du monument de Pommier"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Plaine sans date",
      annee: "sans date",
      desc: "Description du monument de Plaque"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Tagolsheim sans date",
      annee: "sans date",
      desc: "Description du monument de Plaque"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gare de Thann sans date",
      annee: "sans date",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gare de Seslestat sans date",
      annee: "sans date",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Gare de Mulhouse sans date",
      annee: "sans date",
      desc: "Description du monument de Plaque ADEIF"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Biesheim sans date",
      annee: "sans date",
      desc: "Description du monument de inscription sur le momunent aux morts communal"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Oberhergheim sans date",
      annee: "sans date",
      desc: "Description du monument de inscription sur le momunent aux morts communal"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Carspach sans date",
      annee: "sans date",
      desc: "Description du monument de inscription sur le momunent aux morts communal"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Kaysersberg sans date",
      annee: "sans date",
      desc: "Description du monument de inscription sur le momunent aux morts communal"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Bergheim sans date",
      annee: "sans date",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Lapoutroie sans date",
      annee: "sans date",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Raedersheim sans date",
      annee: "sans date",
      desc: "Description du monument de Stèle"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Mulhouse sans date",
      annee: "sans date",
      desc: "Description du monument de Square des MN"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Kaysersberg sans date",
      annee: "sans date",
      desc: "Description du monument de Place des Malgré-Nous"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Nordheim sans date",
      annee: "sans date",
      desc: "Description du monument de Place des Incorporés de force"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Hohatzenheim Ex-voto",
      annee: "Ex-voto",
      desc: "Description du monument de Plus de 1200 ex-voto"
    },
    {
      img: monumentCronenbourg,
      imgAlt: "",
      titre: "Blodelsheim Ex-voto",
      annee: "Ex-voto",
      desc: "Description du monument de Ernest Sauter et ses camarades Blodelsheimois : Xavier Decker, Albert Fricker, Xavier Haas, Albert Hueber et Ernest Winckler (Père Pius) ont apposé cette dalle en marbre dans la chapelle de l'Allmenfeld à Blodelsheim après 1945. (En 2019 cette a été restaurée par Louis Ehry)"
    }
  ];
  

  return (
    <>
      <section className="p-4 h-screen">
        <h1 className="text-3xl mb-10 text-slate-800 font-semibold text-center">Frise chronologique</h1>

        <div className="min-h-full w-full max-w-lg mx-auto relative">
          <div className="w-1 h-full z-0 rounded bg-slate-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          <div className="elementsFrise w-full h-full flex flex-col gap-8">
            {monuments.map((monument, index) => (
                <ElementFrise
                    key={index}
                    img={monument.img}
                    imgAlt={monument.imgAlt}
                    titre={monument.titre}
                    annee={monument.annee}
                    onClick={() => openModal(monument)}
                    dataAos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Passe data-aos ici
                />
            ))}

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
