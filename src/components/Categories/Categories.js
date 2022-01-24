//import { useEffect, useState } from 'react';
import { Component } from 'react';

import * as petsService from '../services/PetServices';
    
import Petcard from '../PetCard/PetCard';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';


class Categories extends Component {
    constructor(props) {
        super(props);

        //  const [pets, setPets] = useState([]);

        //useEffect(() => {
        //     fetch('http://localhost:5000/pets')
        //         .then(res => res.json())
        //         .then(res => res.setPets(res))
        // }, [])

        this.state = {
            pets: [],
            currentCategory: 'all',
        }
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res }));
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;


        if (prevProps.match.params.category == category) {
            return;
        }

        petsService.getAll(category)
            .then(res => this.setState({ pets: res, currentCategory: category }))
    }

    render() {
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map((x) =>
                        // <Pet
                        //     key={x.id}
                        //     // id={x.id}
                        //     // name={x.name}
                        //     // description={x.description}
                        //     // imageURL={x.imageURL}
                        //     // likes={x.likes}
                        //     {...x}
                        // //<Pet key = {x.id}{...x} />
                        // />
                        <Petcard key={x.id} {...x} />
                    )};
                </ul>
            </div>
        );

    }
};
export default Categories;