import "./salads.css";

export default function Salads() {
  const List = [
    {
      name: "Egg Chicken Salad Bowl",
      description: "520cal - 22g Protein",
      image: "../src/assets/salads/salad3.webp",
    },
    {
      name: "Veg Salad Bowl",
      description: "520cal - 22g Protein",
      image: "../src/assets/salads/salad2.webp",
    },
    {
      name: "Fruit Salad Bowl",
      description: "520cal - 22g Protein",
      image: "../src/assets/salads/salad3.webp",
    },
    {
      name: "Egg Chicken Salad Bowl",
      description: "520cal - 22g Protein",
      image: "../src/assets/salads/salad1.webp",
    },
    {
      name: "Veg Salad Bowl",
      description: "520cal - 22g Protein",
      image: "../src/assets/salads/salad2.webp",
    },
    {
      name: "Fruit Salad Bowl",
      description: "520cal - 22g Protein",
      image: "../src/assets/salads/salad3.webp",
    },
  ];

  const Salad = ({ name, description, image }) => (
    <div className="Card">
      <img src={image} alt={name} className="saladImage" />
      <p className="saladName">{name}</p>
      <p className="saladInfo">{description}</p>
    </div>
  );

  const SaladList = () => {
    return (
        <div className="our-salad-section" id="Salads">
        <p className="os-heading-styling">Our Salads</p>
      <div className="our-salad-inner-section">
        {List.map((sals, index) => (
            <Salad
            key={index}
            name={sals.name}
            description={sals.description}
            image={sals.image}
            />
        ))}
      </div>
        </div>
    );
  };

  return <SaladList />;
}
