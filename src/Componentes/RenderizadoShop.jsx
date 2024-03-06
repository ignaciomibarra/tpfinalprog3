import { useState } from 'react'
import model2 from '../Img/teslaModel2.jpeg';
import modelS from '../Img/teslaModelS.avif';
import model3 from '../Img/teslaModel3.avif';
import modelX from '../Img/teslaModelX.avif';
import modelY from '../Img/teslaModelY.avif';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function RenderizadoShop() {

    const modelsArray = [
        { id: 1, grupo: 'auto', model: 'model S', precio: 107.490, año: 2022, img: modelS, disponible: true },
        { id: 2, grupo: 'auto', model: 'model 3', precio: 39.990, año: 2022, img: model3, disponible: true },
        { id: 3, grupo: 'auto', model: 'model X', precio: 116.490, año: 2022, img: modelX, disponible: false },
        { id: 4, grupo: 'auto', model: 'model Y', precio: 53.400, año: 2022, img: modelY, disponible: true },
        { id: 5, grupo: 'auto', model: 'model 2', precio: 30.000, año: 2024, img: model2, disponible: false }
    ]

    const [search, setSearch] = useState('');
    const [filteredModels, setFilteredModels] = useState(modelsArray);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        const filtered = modelsArray.filter((model) =>
            model.model.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredModels(filtered);
    };

    const navigate = useNavigate();
    const handleNavError = () => {
        navigate('/error')
    }

    return (
        <>
            <Container className='d-flex align-items-center flex-column m-2'>
                <div className='wrapper-input-search'>
                    <input
                        placeholder='Type to search...'
                        required
                        className='input-search'
                        name='text'
                        type='text'
                        value={search}
                        onChange={handleSearch}
                    />
                    <div className='icon-search'>
                        <svg viewBox='0 0 512 512' className='ionicon' xmlns='http://www.w3.org/2000/svg'>
                            <title>Search</title>
                            <path
                                strokeWidth='32'
                                strokeMiterlimit='10'
                                stroke='currentColor'
                                fill='none'
                                d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
                            ></path>
                            <path
                                d='M338.29 338.29L448 448'
                                strokeWidth='32'
                                strokeMiterlimit='10'
                                strokeLinecap='round'
                                stroke='currentColor'
                                fill='none'
                            ></path>
                        </svg>
                    </div>
                </div>

                {filteredModels.map((model) => (
                    <div className='custom-card-shop m-2' key={model.id}>
                        <div className='custom-card-shop2'>
                            <img variant='top' className='d-block w-100' src={model.img} alt='Car' />
                            <div className='d-flex align-items-center flex-column m-2 text-white'>
                                <h3>{model.model}</h3>
                                <p>${model.precio}</p>
                                {model.disponible ? (
                                    <p className='disponible'>Disponible</p>
                                ) : (
                                    <p className='no-disponible'>No disponible</p>
                                )}
                                <Button onClick={handleNavError} variant='dark' className='my-1 btt-generico'>Ver más</Button>
                            </div>
                        </div>
                    </div>
                ))}

            </Container>
        </>
    )
}

export default RenderizadoShop