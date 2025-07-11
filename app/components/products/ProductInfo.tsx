import { Button } from "@/components/ui/button"

export default function ProductInfo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Smashy Tennis Ball</h2>
      <p className="text-green-600 text-xl font-semibold">$76.00</p>
      <ul className="text-sm text-gray-600 space-y-5">
        <li>Material: Durable and high-bounce rubber, soft felt surface.</li>
        <li>Color: Bright, energetic yellow for maximum visibility.</li>
        <li>Size: Official tennis ball size and weight.</li>
        <li>Perfect for: Training, matches, and recreational play.</li>
      </ul>
      <a href="#" className="text-sm text-blue-600 underline ">
        Watch it in action: Tennis video here
      </a>
      <div className="flex gap-3 pt-13 ">
        <Button className="bg-green-600 hover:bg-green-700 text-white">Add to cart</Button>
        <Button variant="outline">Buy Now</Button>
      </div>
    </div>
  )
}
