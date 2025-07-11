import { Card } from "@/components/ui/card"

export default function ProductHighlight() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
      <Card className="bg-green-100 text-green-900 p-4 text-sm">
  Crafted for performance, versatility, and everyday play, the Smashy Tennis Ball features
   a classic design that effortlessly matches any court gear. Its high-bounce rubber core 
   and soft felt surface deliver consistent performance across surfaces, whether youre 
   training for competition or enjoying a friendly match. Designed to meet the needs of 
   both beginners and seasoned players, it offers excellent durability, control, and visibility. 
   Wherever you play, Smashy ensures your game stays smooth, reliable, and fun.
</Card>

      <div className="w-full max-w-[180px]">
        <img
          src="https://aerovietnam.vn/wp-content/uploads/2020/01/7-scaled.jpg"
          alt="Highlight"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  )
}
