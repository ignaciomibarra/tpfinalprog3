import MenuNavegacion from '../Componentes/MenuNavegacion';
import AvatarMasculino from "../Img/avatarmasculino.png";
import AvatarFemenino from "../Img/avatarfemenino.png";

function AboutUs() {

    const arrayMiembrosGrupo = [
        { id: 1, nombre: 'Ignacio', participacion: true, grupo: 5, avatar: AvatarMasculino },
        { id: 2, nombre: 'Lucy', participacion: false, grupo: 5, avatar: AvatarFemenino },
        { id: 3, nombre: 'John', participacion: true, grupo: 5, avatar: AvatarMasculino },
        { id: 4, nombre: 'Gina', participacion: true, grupo: 5, avatar: AvatarFemenino },
        { id: 5, nombre: 'Sophie ', participacion: true, grupo: 5, avatar: AvatarFemenino }
    ]


    return (
        <>
            <MenuNavegacion />
            <div className="text-center bg-dark p-2 card-miembro-title"><h1>Equipo de Desarrollo:</h1></div>
            <div className="d-flex bg-dark justify-content-between wrapper-cards-aboutus">
                {
                    arrayMiembrosGrupo.map((miembro) => (
                        <div class="card-miembro m-1">
                            <div class="card-miembro-image"><img src={miembro.avatar} alt="" /></div>
                            <div class="card-miembro-description">
                                <p class="card-miembro-title text-center"> {miembro.nombre}</p>
                                <p class="card-miembro-body text-center">Grupo n°:  {miembro.grupo}</p>
                                <p class="card-miembro-title text-center" key={miembro.id}>Participacion 2°TP {" "} {miembro.participacion ? (<span>✔️</span>) : (<span>❌</span>)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default AboutUs