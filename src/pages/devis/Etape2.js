import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Etape2() {
  const router = useRouter();
  const [type, setType] = useState(router.query.type ?? "pompageSoleil");
  const [technology, setTechnology] = useState(
    router.query.technology ?? "Allemande"
  );
  return (
    <div className="bg_img">
      <Navbar />
      <div className=" container   justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 2 : Votre Projet
            </h4>
          </div>
          <div>
            <div className="row  justify-content-center ">
              <select
                name="type"
                type="text"
                placeholder="type de votre projet"
                className="formSelect form-select"
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                <option value="pompageSoleil">Pompage au fil de soleil</option>
                <option value="pompageSteg">Pompage raccordé STEG</option>
                <option value="maisonSteg">Maison raccordé STEG </option>
                <option value="maisonNonSteg">Maison non raccordé STEG </option>
              </select>
            </div>
            <div className="row  justify-content-center">
              <select
                name="type"
                type="text"
                placeholder="technologie"
                className="formSelect form-select "
                value={technology}
                onChange={(event) => {
                  setTechnology(event.target.value);
                }}
              >
                <option value="Allemande">Allemande</option>
                <option value="Chinoise">Chinoise</option>
              </select>
            </div>

            <div className="abc">
              <button
                className="form-button centered-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Cordonnees",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                    },
                  });
                }}
              >
                Précédent
              </button>
              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape3",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: type,
                      technology: technology,
                    },
                  });
                }}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
