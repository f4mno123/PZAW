import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        surname: '',
        gender: '',
        gay: false
    });

    let globalData = [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/task02/data', formData)
            .then(response => {
                globalData.push(formData);
                console.log('Data saved successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error saving the data!', error);
            }).finally(
                console.log(globalData)
            )
    };

    return (
        <div className="d-flex justify-content-center mt-5">
            <form onSubmit={handleSubmit} method='POST' className="w-50">
                <div className="form-group mt-4">
                    <label className="form-check-label  d-flex justify-content-center ">Name:</label>
                    <input className="form-control" type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group mt-4">
                    <label className="form-check-label  d-flex justify-content-center ">Age:</label>
                    <input className="form-control" type="number" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div className="form-group mt-4">
                    <label className="form-check-label  d-flex justify-content-center ">Surname:</label>
                    <input className="form-control" type="text" name="surname" value={formData.surname} onChange={handleChange} />
                </div>
                <div className="form-group mt-4  d-flex justify-content-center ">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary">
                            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} autoComplete='off' /> Male
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} autoComplete='off' /> Female
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} autoComplete='off' /> Other
                        </label>
                    </div>
                </div>
                <div className="form-group mt-4  d-flex justify-content-center ">
                    <div className="d-flex flex-column align-items-center">
                        <label className="form-check-label">Gay</label>
                        <input type="checkbox" name="gay" checked={formData.gay || false} onChange={(e) => setFormData({ ...formData, gay: e.target.checked })} /> 
                    </div>
                </div>
                <div className="form-group mt-4 d-flex justify-content-center ">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
