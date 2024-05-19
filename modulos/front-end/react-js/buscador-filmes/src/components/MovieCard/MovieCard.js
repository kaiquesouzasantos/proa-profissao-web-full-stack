import './MovieCard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faStar } from '@fortawesome/free-solid-svg-icons'

export default function MovieCard({name, rate, date, image}) {
    const dateTreatment = () => {
        let dateReturn = new Date(date);
        return `${dateReturn.getUTCDate()}/${dateReturn.getUTCMonth() + 1}/${dateReturn.getUTCFullYear()}`;
    }

    if (image.includes("null")) {
        return null;
    }

    return(
        <article className="card">
            <img src={image} alt={`image-`+name}/>

            <div className="overlay">
                <h2>{name}</h2><br/>

                <p>
                    <FontAwesomeIcon icon={faStar} className='icon'/>
                    {rate}
                </p>

                <p>
                    <FontAwesomeIcon icon={faCalendarDays} className='icon'/>
                    {dateTreatment()}
                </p>
            </div>
        </article>
    )
}