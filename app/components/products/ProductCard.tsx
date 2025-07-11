type Props = {
  image: string
  name: string
  price: string
}

export default function ProductCard({ image, name, price }: Props) {
  return (
    <div className="text-center space-y-2">
      <img src={image} alt={name} className="w-full h-[180px] object-cover rounded-md" />
      <h4 className="text-sm font-semibold">{name}</h4>
      <p className="text-sm text-gray-500">{price}</p>
      <div className="text-yellow-400 text-xs">★★★★★</div>
    </div>
  )
}
