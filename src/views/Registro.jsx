//import "../css/Registro.css"
//import {IonIcon} from "react-ion-icon";
import {Pacientejson} from '../interfaces/Paciente'
import {Medicojson} from '../interfaces/Medico'
import {Segurojson} from '../interfaces/Seguro'
import {Ingresojson} from '../interfaces/Ingreso'
import { useEffect, useState } from "react";

import EfectoEspera from "./EfectoEspera";
import EfectoSuccess from "./EfectoSuccess";

export default function RegitroPaciente(){
    const [Estado, SetEstado] = useState(false);
    const [Estado2, SetEstado2] = useState(false);
    const CambiarEstado = () => {
        SetEstado(true);
        setTimeout(() => {
            SetEstado(false)
        }, 5000);
        /*
        codigo de respuesta de a API
        */
    }

    const CambiarEstado2 = () => {
        SetEstado2(true);
        setTimeout(() => {
            SetEstado2(false)
        }, 5000);
        /*
        codigo de respuesta de a API
        */
    }

    //Estados y funciones UseState
    //Paciente
    const [Paciente, setPaciente] = useState(Pacientejson)
    const [ID, setID] = useState('')
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState(0)
    const [correo, setCorreo] = useState('')
    const [edad, setEdad] = useState('')

    //usestate Medico
    const [Medico, setMedico] = useState(Medicojson)
    const [nombremedico, setNombremedico] = useState('')
    //usestate Seguro
    const [Seguro, setSeguro] = useState(Segurojson)
    const [nombreSeguro, setNombreSeguro] = useState('')
    const [cobertura, setCobertura] = useState(0)

    //useState Ingreso
    const [ingreso, setIngreso] = useState(Ingresojson)

    function GuardarPaciente(){
        const newPaciente = {
            ID,
            nombre,
            telefono,
            correo,
            edad: parseInt(edad)
        }
        const newMedico = {
            nombre: nombremedico
        }
        const newSeguro = {
            nombre: nombreSeguro,
            cobertura: parseInt(cobertura)
        }
        
        setPaciente(newPaciente)
        setMedico(newMedico)
        setSeguro(newSeguro)
        
    }
    useEffect(() => {
        const newIngreso = {
            Paciente: Paciente,
            Medico: Medico,
            Seguro: Seguro
          }
        setIngreso(newIngreso)
        console.log(Paciente)
        console.log(Medico)
        console.log(Seguro)
        console.log(ingreso)
    }, [Seguro])


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
                    <input type="text" className="form-control mb-2" placeholder="C.I." onChange={(e) => {setID(e.target.value)}} required/>
                    <label htmlFor="floatingInput">CI</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="date" className="col-sm-12 col-md-4 col-lg-4 form-control mb-2" required/>
                    <label htmlFor="floatingInput">Fecha</label>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mb-2 d-grid gap-2">
                    <button className="btn btn-success" onClick={GuardarPaciente}>Buscar <ion-icon name="search"></ion-icon></button>
                </div>
                <div className="form-floating col-sm-12 col-md-12 col-lg-12">
                    <input type="text" className="form-control mb-2" placeholder="Nombre Completo" onChange={(e) => {setNombre(e.target.value)}} required/>
                    <label htmlFor="floatingInput">Nombre Completo</label>
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
                    <input type="text" className="form-control mb-2" placeholder="Persona Responsable" onChange={(e) => {parseInt(setEdad(e.target.value))}} required/>
                    <label htmlFor="floatingInput">Edad</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Teléfono" onChange={(e) => {setTelefono(e.target.value)}} required/>
                    <label htmlFor="floatingInput">Teléfono</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="email" className="form-control mb-2" placeholder="Correo" onChange={(e) => {setCorreo(e.target.value)}} required/>
                    <label htmlFor="floatingInput">Correo</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Nombre Medico" onChange={(e) => {setNombremedico(e.target.value)}} required/>
                    <label htmlFor="floatingInput">Medico</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Seguro" onChange={(e) => {setNombreSeguro(e.target.value)}} required/>
                    <label htmlFor="floatingInput">Seguro</label>
                </div>
                <div className="form-floating col-sm-12 col-md-4 col-lg-4">
                    <input type="text" className="form-control mb-2" placeholder="Cobertura" onChange={(e) => {setCobertura(e.target.value)}} required/>
                    <label htmlFor="floatingInput">Cobertura</label>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 d-grid gap-2">
                    <button className="btn btn-primary mb-2" onClick={CambiarEstado}><ion-icon name="save-outline"></ion-icon> Guardar</button>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 d-grid gap-2">
                    <button className="btn btn-danger  mb-2" onClick={CambiarEstado2}><ion-icon name="ban-outline"></ion-icon> Cancelar</button>
                </div>
            </div>
        </div>
        {Estado&&<EfectoEspera/>}
        {Estado2&&<EfectoSuccess/>}
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