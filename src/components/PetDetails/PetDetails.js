import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import * as petsService from '../services/PetServices';

const PetDetails = ({
    match,
}) => {
    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res));
    }, []);

    const onPetButtonClickHandler = () => {
        let incrementedLikes = Number(pet.likes + 1);
        petsService.pet(match.params.petId, incrementedLikes)
            .then((updatedPet) => {
                setPet(state => ({ ...state, likes:Number(updatedPet.likes)}))
              //  setPet(updatedPet);
            });
    }

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <button className="button" onClick={onPetButtonClickHandler}>
                <i className="fas fa-heart"></i>Pet</button>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
            <div classname="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
                <Link to="#"><button className="button">Delete</button></Link>
            </div>
        </section>
    );
}
export default PetDetails;