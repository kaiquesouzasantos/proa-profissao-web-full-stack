import './Search.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search({ value, setValue, search }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      search();
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Digite um filme que deseja buscar'
          required
        />

        <button type="submit">
          <FontAwesomeIcon icon={faSearch} className='icon'/> 
        </button>
      </form>
    );
  }