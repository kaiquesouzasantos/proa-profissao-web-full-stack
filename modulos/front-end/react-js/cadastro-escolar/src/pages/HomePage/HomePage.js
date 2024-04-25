import './HomePage.css';
import Button from '../../components/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faListSquares } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
    return (
        <section className='section section-home'>
            <Button
                text="Cadastrar"
                icon={<FontAwesomeIcon icon={faAddressCard} />}
                navigation='/save'
            />

            <Button
                text="Visualizar"
                icon={<FontAwesomeIcon icon={faListSquares} />}
                navigation='/view'
            />
        </section>
    )
}
