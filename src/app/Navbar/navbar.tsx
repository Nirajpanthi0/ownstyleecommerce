"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Heart, Menu, Search, ShoppingCart, Store, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Logo from '@/app/Navbar/Logo.png'
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container flex h-24 items-center justify-between px-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 py-4">
              <div className="flex items-center space-x-2">
                <Store className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">ShopHub</span>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground " />
                <Input type="search" placeholder="Search products..." className="pl-10 rounded-4xl"  />
              </div>
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button variant="ghost" className="justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="justify-start">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart 
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

       <div className="flex items-center space-x-2">
  <Link href="/" className="flex items-center space-x-2">
    <div className="flex h-16 w-16 items-center justify-center rounded-lg  overflow-hidden bg-white">
      <Image
        src={Logo}
        alt="Logo"
        className="object-contain w-16 h-16"
      />
    </div>
    <span className="hidden text-xl font-bold sm:inline-block text-pink-700">OwnStyle</span>
  </Link>
</div>

        {/* Search Bar - Center */}
        <div className="hidden flex-1 justify-center px-6 md:flex">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Search for products, brands and more..." className="w-full pl-10 pr-4  rounded-4xl" />
          </div>
        </div>

        {/* User Actions - Right */}
        <div className="flex items-center space-x-2 gap-3 ">
          {/* Login Button */}
          <Button variant="ghost" className="hidden sm:flex text-md">
            <User className="mr-2 h-6 w-6" />
            Login
          </Button>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative  ">
            <ShoppingCart className="h-6 w-6  " />
<span>Cart</span>

            {/* <Badge variant="destructive" className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs">
             
            </Badge> */}
          
            <span className="sr-only ">Shopping cart</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="border-t px-4 py-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="Search products..." className="pl-10" />
        </div>
      </div>
    </header>
  )
}
