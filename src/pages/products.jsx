import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/laptopproduct1.jpg",
    name: "Laptop Sultan",
    desc: "Nggak ngerti spesifikasinya? Nggak apa-apa, yang penting orang lihat logo glowing-nya. Fungsinya? Buat buka tab banyak biar kelihatan sibuk",
    price: "Rp.75.000.000",
  },
  {
    id: 2,
    image: "/images/laptopproduct2.jpg",
    name: "Laptop Mantan",
    desc: "Pernah keren, tapi sekarang cuma nostalgia. Pas dipakai, baterai cepat habis, kayak hubungan yang nggak seimbang.",
    price: "Rp.150.000",
  },
  {
    id: 3,
    image: "/images/laptopproduct3.jpg",
    name: "Laptop Gamer Sok Profesional",
    desc: "Bilangnya buat kerja, tapi isinya cuma shortcut game. FPS tinggi, produktivitas rendah.",
    price: "Rp.21.500.000",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.desc}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;