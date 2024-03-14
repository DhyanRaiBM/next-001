type Props = {
    res:ResultObjectType,
}
const Card = ({res}: Props) => {
  return (
    <div className=" m-2 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
        <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={res.picture_url} alt="animeImage" />
        </div>
        <div className="p-8">
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-indigo-500 hover:underline">{res.title}</a>
            <p className="mt-2 text-slate-500">{res.description}.</p>
        </div>
        </div>
    </div>
  )
}
export default Card