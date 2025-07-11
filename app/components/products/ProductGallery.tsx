type Props = {
  image: string
  thumbnails: string[]
}

export default function ProductGallery({ image, thumbnails }: Props) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-between h-[360px] pr-2">
        {thumbnails.map((src, i) => (
          <div key={i} className="w-25 h-25 border rounded overflow-hidden">
            <img src={src} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-hidden rounded">
        <img src={image} alt="Main" className="w-full h-[360px] object-cover rounded" />
      </div>
    </div>
  )
}
