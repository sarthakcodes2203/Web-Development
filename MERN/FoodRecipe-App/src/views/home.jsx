import { useContext } from "react";
import { GlobalContext } from "../context";
import RecipeItem from "../components/recipeItem";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div className="text-center">
          <p className="lg:text-2xl text-xl text-gray-700 font-extrabold animate-pulse">
            Nothing to show. Please search something to see the results!
          </p>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => alert("Try searching for a recipe!")}
          >
            Search Again
          </button>
        </div>
      )}
    </div>
  );
}