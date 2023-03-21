import "./index.scss";

const Hero = ({ setCategory }) => {
  const onHandleFilter = (category) => {
    setCategory(category);
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
        <li onClick={() => onHandleFilter("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleFilter("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleFilter("Ordinary Drink")}>Soft Drink</li>
        <li onClick={() => onHandleFilter("Shot")}>Shots</li>
        <li onClick={() => onHandleFilter("Punch / Party Drink")}>
          Punch / Party Drink
        </li>
        <li onClick={() => onHandleFilter("Homemade Liqueur")}>
          Homemade Liqueur
        </li>
        <li onClick={() => onHandleFilter("Other / Unknown")}>Other</li>
      </ul>
    </div>
  );
};

export default Hero;
