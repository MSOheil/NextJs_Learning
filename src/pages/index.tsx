import fs from "fs/promises";
import path from "path";
export default function Home_Page(props: any) {
  const { products } = props;

  return (
    <div>
      here is tow
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const fileAddress = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(fileAddress);

  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      products: data.products,
    },
  };
}
