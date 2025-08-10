import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Eye, Edit, Trash2, Pause, Play, BarChart3, Video, MessageSquare } from "lucide-react"
import { Link } from "react-router"

const campaigns = [
  {
    id: 1,
    title: "Weekend Dining Experience",
    description: "Collect feedback from weekend customers",
    status: "Active",
    type: "Video",
    createdDate: "2024-01-10",
    expiryDate: "2024-02-10",
    totalReviews: 24,
    totalViews: 156,
    responseRate: 15.4,
    allowAnonymous: true,
  },
  {
    id: 2,
    title: "New Menu Feedback",
    description: "Get customer opinions on our new seasonal menu",
    status: "Active",
    type: "Text",
    createdDate: "2024-01-08",
    expiryDate: "2024-01-25",
    totalReviews: 18,
    totalViews: 89,
    responseRate: 20.2,
    allowAnonymous: false,
  },
  {
    id: 3,
    title: "Service Quality Review",
    description: "Monthly service quality assessment",
    status: "Paused",
    type: "Video",
    createdDate: "2024-01-05",
    expiryDate: "2024-01-30",
    totalReviews: 12,
    totalViews: 67,
    responseRate: 17.9,
    allowAnonymous: true,
  },
  {
    id: 4,
    title: "Holiday Special Feedback",
    description: "Feedback on holiday menu and decorations",
    status: "Expired",
    type: "Text",
    createdDate: "2023-12-15",
    expiryDate: "2024-01-05",
    totalReviews: 45,
    totalViews: 234,
    responseRate: 19.2,
    allowAnonymous: false,
  },
]

const CampaignPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || campaign.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Paused":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Expired":
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
      default:
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
    }
  }

  const activeCampaigns = campaigns.filter((c) => c.status === "Active").length
  const totalReviews = campaigns.reduce((sum, c) => sum + c.totalReviews, 0)
  const avgResponseRate = campaigns.reduce((sum, c) => sum + c.responseRate, 0) / campaigns.length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaign Management</h1>
          <p className="text-gray-600">Create and manage customer feedback campaigns</p>
        </div>
        <Link to="/campaigns/create">
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Create New Campaign
          </Button>
        </Link>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{activeCampaigns}</div>
              <p className="text-sm text-gray-600">Active Campaigns</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{totalReviews}</div>
              <p className="text-sm text-gray-600">Total Reviews</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{avgResponseRate.toFixed(1)}%</div>
              <p className="text-sm text-gray-600">Avg Response Rate</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{campaigns.length}</div>
              <p className="text-sm text-gray-600">Total Campaigns</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search campaigns by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                className={statusFilter === "all" ? "bg-green-600 hover:bg-green-700" : ""}
              >
                All
              </Button>
              <Button
                variant={statusFilter === "active" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("active")}
                className={statusFilter === "active" ? "bg-green-600 hover:bg-green-700" : ""}
              >
                Active
              </Button>
              <Button
                variant={statusFilter === "paused" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("paused")}
                className={statusFilter === "paused" ? "bg-green-600 hover:bg-green-700" : ""}
              >
                Paused
              </Button>
              <Button
                variant={statusFilter === "expired" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("expired")}
                className={statusFilter === "expired" ? "bg-green-600 hover:bg-green-700" : ""}
              >
                Expired
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaigns Table */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Reviews</TableHead>
                <TableHead>Response Rate</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-gray-900">{campaign.title}</div>
                      <div className="text-sm text-gray-500 max-w-[300px] truncate">{campaign.description}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {campaign.type === "Video" ? (
                        <Video className="w-4 h-4 text-blue-600" />
                      ) : (
                        <MessageSquare className="w-4 h-4 text-green-600" />
                      )}
                      <span className="text-sm">{campaign.type}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-gray-600">{campaign.createdDate}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{campaign.totalReviews}</div>
                      <div className="text-gray-500">{campaign.totalViews} views</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm font-medium text-gray-900">{campaign.responseRate.toFixed(1)}%</div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link to={`/campaigns/${campaign.id}`}>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to={`/campaigns/${campaign.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      {campaign.status === "Active" ? (
                        <Button variant="outline" size="sm">
                          <Pause className="w-4 h-4" />
                        </Button>
                      ) : campaign.status === "Paused" ? (
                        <Button variant="outline" size="sm">
                          <Play className="w-4 h-4" />
                        </Button>
                      ) : null}
                      <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {filteredCampaigns.length === 0 && (
        <Card className="shadow-sm">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No campaigns found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
            <Link to="/campaigns/create">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Campaign
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default CampaignPage