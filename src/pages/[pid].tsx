import fs from "fs/promises";
import path from "path";
export default function ProductDetailsPage() {
  return (
    <div>
      <h2>title</h2>
      <p>price</p>
    </div>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;

  const fileAddress = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(fileAddress);

  const data = JSON.parse(jsonData.toString());

  const productId = params.pid;
}
