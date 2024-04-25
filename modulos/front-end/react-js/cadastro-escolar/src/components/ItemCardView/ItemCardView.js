import './ItemCardView.css'

export default function ItemCardView({ title, text }) {
    return(
        <div className='div-item'>
            <p className='title-item'>{title}</p>
            <p className='text-item'>{text}</p>
        </div>
    )
} 