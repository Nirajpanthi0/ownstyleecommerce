import { ArrowRight, ShoppingBag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <Card className="w-full max-w-sm group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-primary/10 rounded-lg w-fit">
            <ShoppingBag className="h-6 w-6 text-primary" />
          </div>
          <Badge variant="secondary" className="text-xs">
            24 items
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">Electronics</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Discover the latest gadgets, smartphones, laptops, and tech accessories for your digital lifestyle.
          </CardDescription>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-muted-foreground">Explore category</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </CardContent>
    </Card>
  )
}
