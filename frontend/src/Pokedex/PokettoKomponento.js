import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const PokettoKomponento = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [pokeTypes, setPokeTypes] = useState([]);
    const [currentPokemonArray, setCurrentPokemonArray] = useState(null);
    let updateMain = useRef(false);


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        updateMain.current = true;
        axios.get('http://localhost:8080/pokemon', {
            params: {
                name: e.target.value,
                type: selectedTypes.join(',')
            }
        })
            .then(response => {
                setCurrentPokemonArray(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
        })
    };

    useEffect(() => {
        axios.get('http://localhost:8080/pokemon/types')
            .then(response => {
                setPokeTypes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);
    

    const handleTypeChange = (e) => {
        const type = e.target.value;
        axios.get('http://localhost:8080/pokemon', {
            params: {
                name: searchTerm,
                type: type
            }
        })
            .then(response => {
                setCurrentPokemonArray(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
        })
        setSelectedTypes((prevTypes) => 
            prevTypes.includes(type)
                ? prevTypes.filter((t) => t !== type)
                : [...prevTypes, type]
        );
    };

    return (
        <div className="container mt-5">
            <div className="mt-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Pokemon"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="mt-3">
                <h6>Filter by Type:</h6>
                {pokeTypes.map((type, index) => {
                    return (
                        <div key={index} className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                value={type}
                                checked={selectedTypes.includes(type)}
                                onChange={handleTypeChange}
                            />
                            <label className="form-check-label">{type}</label>
                        </div>
                    );
                })}
            </div>
            <div className="mt-4">
                <h6>Pokemon Details:</h6>
                <div className="card">
                {currentPokemonArray && currentPokemonArray.map((pokemon, index) => (
                    <div key={index} className="card-body" onClick={() => {
                        axios.get(`http://localhost:8080/pokemon/details/${pokemon.id}`)
                        .then(response => {
                            console.log('Pokemon details:', response.data);
                        })
                        .catch(error => {
                            console.error('There was an error fetching the data!', error);
                        });
                    }}>
                        {pokemon.imageBase64 ? (
                            <img 
                                src={pokemon.imageBase64}
                                alt={pokemon.name.english} 
                                className="card-img-top"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}  
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                        <h5 className="card-title">{pokemon.name.english}</h5>
                        <p className="card-text">Type: {pokemon.type.join(', ')}</p>
                    </div>   
                ))}
                </div>
            </div>
        </div>
    );
};

export default PokettoKomponento;