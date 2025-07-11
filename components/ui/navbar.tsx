// components/navbar.tsx
'use client'

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-green-600">
          <Link href="/">SPORTSBLOG</Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            {["Home", "Program", "Blog", "Pages", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={`/${item.toLowerCase()}`} className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
                  {item}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section: Search + Sign In */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Input type="text" placeholder="Search..." className="pl-9 h-9 w-[180px]" />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
            <Button size="sm" variant="outline" className="bg-green-600 hover:bg-green-600 text-white border-none "> Sign In</Button>
        </div>
      </div>
    </header>
  )
}
