// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import icon from '../Img/error-404.png';



function Error() {
    // const navHistorialAnterior = useHistory();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <>
            <div className="bg-error404">
                <div className="overlay-bg-error404">
                    <div className='wrapper-icon-error404'>
                        <img className="icon-error404" src={icon} alt="icon error 404" />
                        <div className='d-flex justify-content-center align-items-center'>
                            <button onClick={handleGoBack} className='btt-generico'> Volver</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error