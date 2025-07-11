
import ProductInfo from "./ProductInfo"
import ProductHighlight from "./ProductHighlight"
import RelatedProducts from "./RelatedProducts"
import ProductGallery from "./ProductGallery"

export default function ProductDetail() {
  const image = "https://aerovietnam.vn/wp-content/uploads/2020/01/7-scaled.jpg"
  const thumbnails = [image, image, image]

  return (
    <section className="max-w-7xl mx-auto px-12 py-8 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery image={image} thumbnails={thumbnails} />
        <ProductInfo />
      </div>
      <ProductHighlight />
      <RelatedProducts />
    </section>
  )
}
