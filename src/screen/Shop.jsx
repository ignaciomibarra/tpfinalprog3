import RenderizadoShop from '../Componentes/RenderizadoShop'
import MenuNavegacion from '../Componentes/MenuNavegacion'


function Shop() {
    return (
        <>
            <MenuNavegacion/>
            <div className="d-flex justify-content-center bg-dark debug">
                <RenderizadoShop/>

            </div>
        </>
    )
}

export default Shop