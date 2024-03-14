import Link from "next/link"

type Props = {
    cocktail:Cocktail
}
export const Card = ({cocktail}: Props) => {
  return (
    <Link href={`drinks/${cocktail.idDrink}`} >
      <div className="card w-96  bg-base-100 shadow-xl text-white">
        <div className="card-body">
            <h2 className="card-title">{cocktail.strDrink}</h2>
            <p>{cocktail.strInstructions}</p>
        </div>
        <figure><img src={cocktail.strDrinkThumb} alt="A Drink" /></figure>
      </div>
    </Link>
  )
}