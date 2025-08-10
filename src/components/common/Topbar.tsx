import { useState } from "react"
import { Bell, Package, Star, ShoppingCart, CheckCircle, Mail, UtensilsCrossed, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Link } from "react-router"

const currentUser = {
  name: "John Doe",
  avatar: "/placeholder.svg?height=32&width=32",
  email: "john.doe@example.com",
}

// Mock data for branches
const branches = [
  { id: "1", name: "Downtown Bistro", address: "123 Main St", active: true },
  { id: "2", name: "Uptown Cafe", address: "456 Oak Ave", active: false },
  { id: "3", name: "Riverside Grill", address: "789 River Rd", active: false },
]

// Mock data for notifications
const initialNotifications = [
  { id: "1", type: "order", title: "New Order from Table 3", timestamp: "Jul 14, 14:50", read: false },
  { id: "2", type: "review", title: "New 5-star review received!", timestamp: "Jul 14, 14:45", read: false },
  { id: "3", type: "inventory", title: "Low stock: Tomatoes running low", timestamp: "Jul 14, 14:30", read: true },
  { id: "4", type: "order", title: "Order #005 marked as served", timestamp: "Jul 14, 00:00", read: true },
]

export function TopBar() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [selectedBranch, setSelectedBranch] = useState(branches.find((b) => b.active)?.id || branches[0].id)
  const [isSwitchingBranch, setIsSwitchingBranch] = useState(false)

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const handleBranchChange = (branchId: string) => {
    setIsSwitchingBranch(true)
    // Simulate API call or context switch
    setTimeout(() => {
      setSelectedBranch(branchId)
      setIsSwitchingBranch(false)
      // In a real app, you would update global context or re-fetch data based on the new branch
      console.log(`Switched to branch: ${branches.find((b) => b.id === branchId)?.name}`)
    }, 500) // Simulate network delay
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order":
        return <ShoppingCart className="h-4 w-4 text-green-600" />
      case "review":
        return <Star className="h-4 w-4 text-yellow-500" />
      case "inventory":
        return <Package className="h-4 w-4 text-red-500" />
      default:
        return <Bell className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b px-4">
      <div className="flex items-center gap-4">
        <Link to="#" className="flex items-center gap-2 font-semibold">
          <UtensilsCrossed className="h-6 w-6 text-green-600" />
          <span className="text-lg">SmartDine</span>
        </Link>

        {/* Branch Switcher */}
        <Select value={selectedBranch} onValueChange={handleBranchChange} disabled={isSwitchingBranch}>
          <SelectTrigger className="w-[180px] h-9">
            <Store className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select Branch" />
          </SelectTrigger>
          <SelectContent>
            {isSwitchingBranch && <div className="px-4 py-2 text-sm text-gray-500">Switching...</div>}
            {!isSwitchingBranch &&
              branches.map((branch) => (
                <SelectItem key={branch.id} value={branch.id}>
                  <div className="flex flex-col">
                    <span>{branch.name}</span>
                    <span className="text-xs text-gray-500">{branch.address}</span>
                  </div>
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {unreadNotificationsCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs animate-pulse"
                >
                  {unreadNotificationsCount}
                </Badge>
              )}
              <span className="sr-only">View notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-0">
            <DropdownMenuLabel className="px-4 py-3 text-base font-semibold">Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator className="my-0" />
            <div className="max-h-80 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-sm text-gray-500">No new notifications.</div>
              ) : (
                notifications.map((notification) => (
                  <DropdownMenuItem
                    key={notification.id}
                    className={cn(
                      "flex items-start gap-3 cursor-pointer py-3 px-4 rounded-none",
                      !notification.read && "bg-green-50 font-normal",
                    )}
                    onSelect={(e) => e.preventDefault()} // Prevent closing dropdown on item click
                  >
                    <div className="flex-shrink-0 mt-0.5">{getNotificationIcon(notification.type)}</div>
                    <div className="flex flex-col">
                      <span className={cn("text-sm", !notification.read && "font-semibold")}>{notification.title}</span>
                      <span className="text-xs text-gray-500">{notification.timestamp}</span>
                    </div>
                  </DropdownMenuItem>
                ))
              )}
            </div>
            <DropdownMenuSeparator className="my-0" />
            <DropdownMenuItem
              className="flex items-center gap-2 cursor-pointer py-3 px-4"
              onClick={handleMarkAllAsRead}
            >
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-red-600">Mark all as read</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer py-3 px-4">
              <Mail className="h-4 w-4 text-gray-600" />
              <span>View All Notifications</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Avatar and Settings */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{currentUser.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
