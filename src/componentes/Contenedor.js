import NewUser from './NewUser';
import { Button, Col, Row, Table } from "react-bootstrap";
import {useState, useEffect} from 'react';
import { Edit } from "@mui/icons-material";
const Contenedor = () => {

    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true)
    useEffect( () => {
    fetch('',{
        method: 'POST',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify({empresa: '626'})
    })
    .then(response => response.json())
    .then(data => setDatos(data))
    setCargando(false)
    },[]);

    const baja = (baja,status) => {
    fetch('',{
        method: 'POST',
        mode: "cors",
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
        body: JSON.stringify({empresa: '626', status: status})
    })
    .then(response => response.json())
    .then(data => setDatos(data))
    setCargando(false)
    setStatusBaja(!baja)
    }
    const [statusBaja, setStatusBaja] = useState(false);
    const [mostrarEdit, setMostrarEdit] = useState(false);
    const [viewModal, setViewModal] = useState(false);

    const tbody2 = Object.values(datos).map((value, index) => {
        return(
            <tr key={index}>
                <td>{value['Id']}</td>
                <td>{value['Nombre']}</td>
                <td onMouseOver={()=>{setMostrarEdit("dir"+index)}} onMouseOut={()=>{setMostrarEdit(false)}} >{value['Direccion']}
                {statusBaja==false &&
                    mostrarEdit==="dir"+index && 
                <Edit onClick={(e)=>{e.stopPropagation(); alert("Si click wey!")}}></Edit>
                }
                </td>
                <td onMouseOver={()=>{setMostrarEdit("tel"+index)}} onMouseOut={()=>{setMostrarEdit(false)}}>{value['Telefono']}
                {statusBaja==false &&
                    mostrarEdit==="tel"+index && 
                <Edit onClick={(e)=>{e.stopPropagation(); alert("Si click wey!")}}></Edit>
                }</td>
                <td>{value['Clave']}</td>
                <td>{value['Ingreso']}</td>
                <td>{value['IMSS']}</td>
                <td>{value['CURP']}</td>
                <td onMouseOver={()=>{setMostrarEdit("mail"+index)}} onMouseOut={()=>{setMostrarEdit(false)}}>{value['Correo']}
                {statusBaja==false &&
                    mostrarEdit==="mail"+index && 
                <Edit onClick={(e)=>{e.stopPropagation(); alert("Si click wey!")}}></Edit>
                }</td>
                <td></td>
                <td></td>
            </tr>
        );
    }); 

    if (cargando==true) {
        return(<>
        <Row>
        <div>
        Cargando datos...
        </div> 
        </Row>
    </>)
    }else{
        return(
            <>
              
                <NewUser estado={viewModal} cambiarEstado={setViewModal}/>
                
                <Row className="wey m-2">
                    <Col className="d-flex justify-content-center p-1"><Button className="wey" onClick={()=>{baja(statusBaja,0)}} variant="outline-success">ACTIVO</Button></Col>
                    <Col className="d-flex justify-content-center p-1"><Button className="wey" onClick={()=>{baja(statusBaja,1)}} variant="outline-success">BAJA</Button></Col>
                    <Col className="d-flex justify-content-center p-1"><Button className="wey" onClick={()=>{setViewModal(true)}} variant="outline-success">NUEVO</Button></Col>
                    <Col className="d-flex justify-content-center p-1"><Button className="wey" variant="outline-success">REGRESAR</Button></Col>
                </Row>
    
                <Row className="p-4 table table-responsive" style={{height: "80vh"}}>
                <Table className="table letra text-light text-center " responsive="sm" size="sm" style={{height: "100%"}}>
                <thead className="table-dark align-middle">
                <tr className="thead-dark">
                    <th>PR</th>
                    <th>NOMBRE</th>
                    <th>DIRECCION </th>
                    <th>TELEFONO</th>
                    <th>CLAVE</th>
                    <th>INGRESO</th>
                    <th>IMSS</th>
                    <th>CURP</th>
                    <th>CORREO</th>
                    <th>DAR DE BAJA</th>
                    <th>DOCS</th>
                </tr>
                </thead>
    
    
                <tbody>
                { tbody2 }
                </tbody>
                </Table>           
                </Row>
            
           </>
        );
    }
    
    
}

export default Contenedor;