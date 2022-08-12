//import "../css/Registro.css"
//import {IonIcon} from "react-ion-icon";

import { useState } from "react";
import PantallaEspera from "./PantallaEspera";
import EfectoEspera from "./EfectoEspera";

export default function RegitroPaciente(){
    const [Estado, SetEstado] = useState(false);
    const CambiarEstado = () => {
        SetEstado(true);
        setTimeout(() => {
            SetEstado(false)
        }, 5000);
        /*
        codigo de respuesta de a API
        */
    }
    return (
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-4 col-md-2 col-lg-2 mb-4">
                    <button className="btn">
                        <ion-icon name="arrow-back-circle"></ion-icon>
                    </button>
                </div>
                <div className="col-sm-8 col-md-10 col-lg-10 mb-4">
                    <h1 className="text-center">Pre - Registro</h1>
                </div>
            </div>
            <div className="row">
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="C.I." required/>
                    <label htmlFor="floatingInput">CI</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="date" className="col-sm-12 col-md-4 col-lg-4 form-control mb-2" required/>
                    <label htmlFor="floatingInput">Fecha</label>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-grid gap-2">
                    <button className="btn btn-success" >Buscar <ion-icon name="search"></ion-icon></button>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Nombre" required/>
                    <label htmlFor="floatingInput">Nombre</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Apellido Paterno" required/>
                    <label htmlFor="floatingInput">Apellido Paterno</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Apellido Materno" required/>
                    <label htmlFor="floatingInput">Apellido Materno</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <select className="form-select mb-2">
                        <option>Sexo:</option>
                        <option>Masculino.</option>
                        <option>Femenino.</option>
                    </select>
                    <label htmlFor="floatingInput">Sexo</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Dirección" required/>
                    <label htmlFor="floatingInput">Dirección</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Teléfono" required/>
                    <label htmlFor="floatingInput">Teléfono</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="email" className="form-control mb-2" placeholder="Correo" required/>
                    <label htmlFor="floatingInput">Correo</label>
                </div>
                <div className="form-floating col-sm-12 col-md-8 col-lg-8">
                    <input type="text" className="form-control mb-2" placeholder="Persona Responsable" required/>
                    <label htmlFor="floatingInput">Persona Responsable</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Nota</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Nota"></textarea>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 d-grid gap-2">
                    <button className="btn btn-primary mb-2" onClick={CambiarEstado}><ion-icon name="save-outline"></ion-icon> Guardar</button>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3 d-grid gap-2">
                    <button className="btn btn-danger  mb-2"><ion-icon name="ban-outline"></ion-icon> Cancelar</button>
                </div>
            </div>
        </div>
        {Estado&&<EfectoEspera/>}
        </>
    ); 
}

// return (
//     <div className="grid-container">
//             <input type="text" className="inputs-ci" placeholder="C.I." required/>
//             <input type="date" className="inputs-date" required/>
//             <button className="btn-search" >Buscar <ion-icon name="search"></ion-icon></button>
//             <input type="text" className="inputs-name" placeholder="Nombre" required/>
//             <input type="text" className="inputs-firts-name" placeholder="Apellido Paterno" required/>
//             <input type="text" className="inputs-second-name" placeholder="Apellido Materno" required/>
//             <select className="select">
//                 <option>Sexo:</option>
//                 <option>Masculino.</option>
//                 <option>Femenino.</option>
//             </select>
//             <input type="text" className="inputs-direction" placeholder="Dirección" required/>
//             <input type="text" className="inputs-number" placeholder="Teléfono" required/>
//             <input type="email" className="inputs-email" placeholder="Correo" required/>
//             <input type="text" className="inputs-person" placeholder="Persona Responsable" required/>
//             <textarea name="textarea" className="textarea" cols="15" rows="5" placeholder="Nota"></textarea>
//             <button className="btn-save"><ion-icon name="save-outline"></ion-icon> Guardar</button>
//             <button className="btn-cancel"><ion-icon name="ban-outline"></ion-icon> Cancelar</button>
//     </div>
// );