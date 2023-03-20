import "./index.scss";

const Hero = (setCocktailList, cocktailList) => {
  const onHandleFilter = (category) => {
    console.log("nka");
    setCocktailList(cocktailList.filter(cocktail.strCategory == category));
  };

  return (
    <div className="Hero">
      <p className="Hero__inshaker">Inshaker</p>
      <p className="Hero__title-one">Strong</p>
      <p className="Hero__title-two">& Light</p>
      <p className="Hero__title-three">Cocktails</p>
      <p className="Hero__quote">
        “In wine there is wisdom, in beer there is Freedom, in water there is
        bacteria.”
      </p>
      <ul className="categories">
        <li onClick={() => onHandleFilter("")}>All cocktails</li>
        <li onClick={() => onHandleFilter("Ordinary Drink")}>Ordinary Drink</li>
        <li>Cocktail</li>
        <li>Soft Drink</li>
        <li onClick={() => onHandleFilter("Ordinary Drink")}>Shots</li>
        <li>Punch / Party Drink</li>
        <li>Homemade Liqueur</li> <li>Shot</li>
        <li>Other / Unknown</li>
      </ul>
    </div>
  );
};

export default Hero;
