const Card = (props) => {
    return (
    <div className="max-w-sm rounded overflow-hidden drop-shadow-2xl p-4 bg-gray-600 text-center">
    <img src={props.image} className="mx-auto w-20 h-20 "/>
    <p className='text-center text-base font-normal pt-2 pb-5'>{props.title}</p>
    <p className="pt-0">{props.paraf}</p>
    </div>
    )
}
export default Card