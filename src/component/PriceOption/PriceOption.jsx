import { FaCaretRight } from "react-icons/fa";

const PriceOption = () => {

    const gymPrices = [
        { 
          id: 1, 
          type: "Basic", 
          price: 29.99, 
          description: "Access to cardio equipment and weights",
          features: ["Access to cardio machines", "Access to free weights", "Locker room access"]
        },
        { 
          id: 2, 
          type: "Standard", 
          price: 49.99, 
          description: "Access to cardio equipment, weights, and group fitness classes",
          features: ["Access to cardio machines", "Access to free weights", "Access to group fitness classes", "Locker room access"]
        },
        { 
          id: 3, 
          type: "Premium", 
          price: 79.99, 
          description: "Access to all gym facilities, group fitness classes, and personal training sessions",
          features: [ "Access to personal training sessions", "Sauna access", "Towel service", "Locker room access"]
        }
      ];
      

    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-8">Best price in the twon</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {
                gymPrices.map(card => (
                    <div key={card.id} className="border-2 border-gray-500 p-5 shadow-xl text-center space-y-3 flex flex-col">
                        <h1 className="text-3xl font-bold text-sky-800">{card.type}</h1>
                        <p className="text-xl font-bold">{card.price}$ <sub className="text-xl">/ mon</sub> </p>
                        <p className="font-semibold">{card.description}</p>
                        <div className="text-start flex-grow">
                            <ul>
                            {
                                card.features.map(feature => <li key={card.id} className="flex gap-3 items-center"><FaCaretRight className="text-sky-900" />
                                {feature}</li>)
                            }
                            </ul>
                        </div>
                        <button className="w-full bg-sky-900 py-3 text-xl font-semibold text-white hover:bg-sky-700">Purchase</button>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default PriceOption;