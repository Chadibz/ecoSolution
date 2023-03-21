import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";

const img_panneau_sol = new URL(
  "../../../public/assets/panneau_sur_sol.png",
  import.meta.url
);
export default function Etape3() {
  const router = useRouter();
  const [place, setPlace] = useState(router.query.place ?? "sol");
  const [longeur, setLongeur] = useState(router.query.longeur ?? 0);
  const [largeur, setLargeur] = useState(router.query.largeur ?? 0);
  const [orientation, setOrientation] = useState(
    router.query.orientation ?? "sud"
  );
  return (
    <div className="bg_img">
      <Navbar />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 3 : Votre Emplacement
            </h4>
          </div>
          <div>
            <div className=" row  justify-content-center ">
              <div className="col">
                <label class="label success">Emplacement:</label>
              </div>
              <div className="col">
                <input
                  type="radio"
                  class="input6 "
                  name="emplacement"
                  id="toit"
                  value="toit"
                  checked={place === "toit"}
                  onClick={(event) => {
                    setPlace("toit");
                  }}
                />
                <span class="design"></span>
                <label class="text" for="toit">
                  sur le toit
                </label>
              </div>
              <div className="col">
                <input
                  type="radio"
                  class="option-input radio"
                  name="emplacement"
                  id="sol"
                  value="sol"
                  checked={place === "sol"}
                  onClick={(event) => {
                    setPlace("sol");
                  }}
                />{" "}
                <span class="design"></span>
                <label class="text" for="sol">
                  sur le sol
                </label>
              </div>
            </div>
            <div className=" row  justify-content-center ">
              <input
                type="text"
                name="longeur"
                placeholder="longeur"
                className="formInput"
                value={longeur}
                onChange={(event) => {
                  setLongeur(event.target.value);
                }}
              />
              <input
                type="text"
                name="largeur"
                placeholder="largeur"
                className="formInput"
                value={largeur}
                onChange={(event) => {
                  setLargeur(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <select
                name="type"
                type="text"
                placeholder="orientation"
                className="formSelect form-select "
                value={orientation}
                onChange={(event) => {
                  setOrientation(event.target.value);
                }}
              >
                <option value="sud">Sud</option>
                <option value="sudEst">Sud Est</option>
                <option value="sudOuest">Sud ouest</option>
              </select>
            </div>

            <div className="row justify-content-end">
              <button
                className="form-button centered-button "
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape2",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: router.query.type,
                      technology: router.query.technology,
                    },
                  });
                }}
              >
                précédent
              </button>

              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape4",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: router.query.type,
                      technology: router.query.technology,
                      place: place,
                      longeur: longeur,
                      largeur: largeur,
                      orientation: orientation,
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
//<img className="imgPaneau" src={img_panneau_sol}></img>
