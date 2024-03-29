import { NavLink } from 'react-router-dom';


const CategoryNavigation = () => {
    return (
        <nav className="navbar" >
            <ul>
                {/* <li><NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Other">Other</NavLink></li> */}
               
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/Cat">Cats</NavLink></li>
                <li><NavLink to="/categories/Dog">Dogs</NavLink></li>
                <li><NavLink to="/categories/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/categories/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/categories/Other">Other</NavLink></li>
            </ul>
            <style >{`
                .nav-link-selected {
                    background-color:lightgreen; !important;
                }
               `}</style>
        </nav >
    );
};

export default CategoryNavigation;