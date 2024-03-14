import Image from "next/image"
import Link from "next/link"

type Props = {
    params:{
        id:string
    }
}
const page = async ({params:{id}}: Props) => {
    const response= await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    if(!response.ok){
        throw new Error("There was error during interview!!!!")
    }

    const {drinks}:DrinksResult=await response.json();
    const data:Cocktail=drinks[0];

  return (
    <div>
        <h1>{data.strDrink}</h1>
        <img
            src={`${data.strDrinkThumb}`}
            alt="Drink Image"
            width={200}
            height={200}
        />


        <Link href='/drinks' className="mt-6 btn btn-primary" >Back Home</Link>
    </div>
  )
}
export default page