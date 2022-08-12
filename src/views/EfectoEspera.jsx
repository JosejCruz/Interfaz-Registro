import { Circles } from  'react-loader-spinner'


export default function Espera(){
    return(
        <div style={{"position":"fixed","top":"0px","left":"0px","width":"100%","height":"100%","backgroundColor":"white","display":"flex","justifyContent":"center","alignItems":"center"}}>
            <Circles color="#00BFFF" height={100} width={100}/>
            Enviando Datos...
        </div>
    );
}

//Pagina https://openbase.com/js/react-loader-spinner/documentation
    
    
