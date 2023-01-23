import { Button } from "react-bootstrap";
const NewUser = ({estado,cambiarEstado}) => {
    return(
        <>
        {estado &&
            <div className="newmodal">
                <div className="bodymodal">
                    <div className="contenedorModal">
                        Hello 
                        <Button onClick={()=>{cambiarEstado(false)}}>Cerrar modal</Button>
                    </div>
                </div>       
            </div>
        }
        </>
    )

}

export default NewUser;

