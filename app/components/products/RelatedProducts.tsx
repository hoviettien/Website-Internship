import ProductCard from "./ProductCard"

interface Product {
  id: string
  title: string
  thumbnail: string
}

interface Props {
  currentProductId: string
}

export default async function RelatedProducts({ currentProductId }: Props) {
  const res = await fetch("http://localhost:9000/store/products", {
    cache: "no-store",
      headers: {
        "x-publishable-api-key": "pk_769357cb75efb4c710e5aa6e8bbb6d0f4f022cedcc072373c2459f2b736d1580",
      },
    })

  const data = await res.json()
  const products: Product[] = data.products

  // Lọc bỏ sản phẩm hiện tại và lấy 4 sản phẩm đầu tiên
  const related = products.filter(p => p.id !== currentProductId).slice(0, 4)

  return (
    <section className="space-y-4">
      <h3 className="text-lg font-bold text-center">RELATED PRODUCTS</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((item) => (
          <ProductCard
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price="Giá đang cập nhật"
          />
        ))}
      </div>
    </section>
  )
}
