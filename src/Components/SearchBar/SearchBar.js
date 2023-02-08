import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ searchChange }) => {
    return(
        <div className='flexRowCenter search-container'>
            <FaSearch className='search-icon'/>
            <input type='text' placeholder='Search news' onChange={ searchChange }></input>
            <button className='font-bold search-button'>SEARCH</button>
        </div>
    );
}

export default SearchBar;