
import { useContext } from "react";
import RecipeItem from "../components/recipeItem";
import { GlobalContext } from "../context";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="text-center">
        <p className="lg:text-2xl text-xl text-gray-700 font-extrabold animate-pulse">
          Nothing to show. Please add something to favorites!
        </p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => alert("Try adding a recipe!")}
        >
          Add to Favorites
        </button>
      </div>
      )}
    </div>
  );
}
