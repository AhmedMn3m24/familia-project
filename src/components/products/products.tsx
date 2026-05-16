"use client";
import Image from "next/image";
import shoe from "../../assets/Images/shose.png";
import bag from "../../assets/Images/bag.png";
import gloves from "../../assets/Images/glovs.png";
import jar from "../../assets/Images/jar.png";
import tshirt from "../../assets/Images/t-shirtbaby.png";

const products = [
  {
    id: 1,
    name: "Speed force",
    price: "$78.49",
    sold: 82,
    sales: "$6,518.18",
    image: shoe,
  },
  {
    id: 2,
    name: "Cross bag",
    price: "$128.50",
    sold: 37,
    sales: "$4,754.50",
    image: bag,
  },
  {
    id: 3,
    name: "Gloves",
    price: "$39.99",
    sold: 64,
    sales: "$2,559.36",
    image: gloves,
  },
  {
    id: 4,
    name: "Wax candle",
    price: "$20.00",
    sold: 184,
    sales: "$3,680.00",
    image: jar,
  },
  {
    id: 5,
    name: "Short bodysuits",
    price: "$28.49",
    sold: 64,
    sales: "$1,963.81",
    image: tshirt,
  },
];

export default function Products() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Products of the Month
      </h2>

      <div className="grid grid-cols-4 text-sm text-gray-400 border-b pb-3">
        <span>Product</span>
        <span className="text-right">Price</span>
        <span className="text-right">Sold</span>
        <span className="text-right">Sales</span>
      </div>

      <div className="mt-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-4 items-center p-3 rounded-xl hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-3">
              <Image
                src={product.image}
                alt={product.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-cover"
              />

              <span className="text-sm font-medium text-gray-700">
                {product.name}
              </span>
            </div>

            <span className="text-sm text-gray-500 text-right">
              {product.price}
            </span>

            <span className="text-sm text-gray-500 text-right">
              {product.sold}
            </span>

            <span className="text-sm font-semibold text-gray-700 text-right">
              {product.sales}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
