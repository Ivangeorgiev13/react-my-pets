import PetFormView from '../PetFormView/PetFormView';
import * as petService from '../services/PetServices';

const CreatePet = ({
    history,
}) => {
    const onCreatePetSubmitHandler = (e) => {
        e.preventDefault();

        const { name, description, imageURL, category } = e.target;

        petService.create(name.value, description.value, imageURL.value, category.value)
            .then(() => {
                history.push('/');
            })
    };

    return (
       <PetFormView onSubmit={onCreatePetSubmitHandler}>
       </PetFormView>
    );
}
export default CreatePet;