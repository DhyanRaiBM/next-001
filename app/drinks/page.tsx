import { Card } from "./components/Card";

type Props = {}
const page = async(props: Props) => {

    const response=await fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    const data:DrinksResult = await response.json();

    console.log(data);
    
    
  return (
    <div className="flex flex-wrap m-6 gap-3" >
        {
            data.drinks.map((drink,i)=>(
                <Card key={i} cocktail={drink} />
            ))
        }
    </div>
  )
}
export default page