import "./index.scss";
import Card from "../card";

const Content = ({ cocktailList, setModalContext }) => {
  return (
    <div className="Content">
      {cocktailList.map((cocktail) => (
        <Card
          cocktail={cocktail}
          key={cocktail.id}
          setModalContext={setModalContext}
        />
      ))}
    </div>
  );
};

export default Content;
