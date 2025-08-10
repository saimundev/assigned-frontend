import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  Filter,
  Play,
  Eye,
  CheckCircle,
  XCircle,
  Share2,
  Calendar,
  Star,
  Facebook,
  Instagram,
  Linkedin,
  Music,
  MessageSquare,
  Video,
  Send,
} from "lucide-react";
import { toast } from "sonner";

interface UGCSubmission {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail?: string;
  type: "video" | "text";
  content: string;
  rating: number;
  submittedAt: string;
  status: "pending" | "approved" | "rejected" | "published";
  thumbnail?: string;
  videoUrl?: string;
  publishedTo?: string[];
  publishedAt?: string;
}

const mockSubmissions: UGCSubmission[] = [
  {
    id: "ugc-001",
    customerId: "CUST-001",
    customerName: "Sarah Johnson",
    customerEmail: "sarah@email.com",
    type: "video",
    content:
      "Amazing dining experience! The pasta was incredible and the service was top-notch. Highly recommend!",
    rating: 5,
    submittedAt: "2024-01-15 14:30",
    status: "approved",
    thumbnail: "/placeholder.svg?height=120&width=200",
    videoUrl: "/placeholder-video.mp4",
  },
  {
    id: "ugc-002",
    customerId: "CUST-002",
    customerName: "Mike Chen",
    customerEmail: "mike@email.com",
    type: "text",
    content:
      "Great food and atmosphere! The new menu items are fantastic. Will definitely be back soon.",
    rating: 4,
    submittedAt: "2024-01-15 16:45",
    status: "pending",
  },
  {
    id: "ugc-003",
    customerId: "CUST-003",
    customerName: "Emily Davis",
    type: "video",
    content:
      "Love this place! The staff is so friendly and the food is always fresh. My go-to restaurant!",
    rating: 5,
    submittedAt: "2024-01-14 19:20",
    status: "published",
    thumbnail: "/placeholder.svg?height=120&width=200",
    videoUrl: "/placeholder-video.mp4",
    publishedTo: ["facebook", "instagram"],
    publishedAt: "2024-01-15 10:00",
  },
  {
    id: "ugc-004",
    customerId: "CUST-004",
    customerName: "David Wilson",
    type: "text",
    content:
      "Excellent service and delicious food. The ambiance is perfect for date nights. Highly recommended!",
    rating: 5,
    submittedAt: "2024-01-14 20:15",
    status: "approved",
  },
];

const CampaignContentManager = () => {
  const [submissions, setSubmissions] =
    useState<UGCSubmission[]>(mockSubmissions);
  const [selectedTab, setSelectedTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<UGCSubmission | null>(null);
  const [publishModal, setPublishModal] = useState<UGCSubmission | null>(null);
  const [publishCaption, setPublishCaption] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesTab =
      selectedTab === "all" ||
      (selectedTab === "pending" && submission.status === "pending") ||
      (selectedTab === "approved" && submission.status === "approved") ||
      (selectedTab === "published" && submission.status === "published");

    const matchesSearch =
      submission.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      submission.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === "all" || submission.type === filterType;

    return matchesTab && matchesSearch && matchesType;
  });

  const updateSubmissionStatus = (
    id: string,
    status: UGCSubmission["status"]
  ) => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status } : sub))
    );
    toast("Status updated successfully!");
  };

  const openPublishModal = (submission: UGCSubmission) => {
    setPublishModal(submission);
    setPublishCaption(
      `🌟 Amazing feedback from ${submission.customerName}!\n\n"${submission.content}"\n\nThank you for choosing The Green Garden! 🍽️\n\n#CustomerLove #TheGreenGarden #FoodReview`
    );
    setSelectedPlatforms([]);
  };

  const handlePublish = async () => {
    if (!publishModal || selectedPlatforms.length === 0) return;

    // Simulate publishing
    toast("Publishing...");

    setTimeout(() => {
      setSubmissions((prev) =>
        prev.map((sub) =>
          sub.id === publishModal.id
            ? {
                ...sub,
                status: "published",
                publishedTo: selectedPlatforms,
                publishedAt: new Date().toISOString(),
              }
            : sub
        )
      );

      toast("Published successfully!");

      setPublishModal(null);
      setSelectedPlatforms([]);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "published":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100";
      case "rejected":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const platforms = [
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      color: "text-blue-600",
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "text-pink-600",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-700",
    },
    { id: "tiktok", name: "TikTok", icon: Music, color: "text-black" },
  ];

  const stats = {
    total: submissions.length,
    pending: submissions.filter((s) => s.status === "pending").length,
    approved: submissions.filter((s) => s.status === "approved").length,
    published: submissions.filter((s) => s.status === "published").length,
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {stats.total}
              </div>
              <p className="text-sm text-gray-600">Total Submissions</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">
                {stats.pending}
              </div>
              <p className="text-sm text-gray-600">Pending Review</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {stats.approved}
              </div>
              <p className="text-sm text-gray-600">Approved</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {stats.published}
              </div>
              <p className="text-sm text-gray-600">Published</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by customer name or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="video">Video Reviews</SelectItem>
                <SelectItem value="text">Text Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
          <TabsTrigger value="approved">
            Approved ({stats.approved})
          </TabsTrigger>
          <TabsTrigger value="published">
            Published ({stats.published})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubmissions.map((submission) => (
              <Card
                key={submission.id}
                className="shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  {submission.type === "video" && submission.thumbnail && (
                    <div className="relative">
                      {/* <Image
                        src={submission.thumbnail || "/placeholder.svg"}
                        alt="Video thumbnail"
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover rounded-t-lg"
                      /> */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {submission.customerName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {submission.submittedAt}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(submission.status)}>
                          {submission.status.charAt(0).toUpperCase() +
                            submission.status.slice(1)}
                        </Badge>
                        {submission.type === "video" ? (
                          <Video className="w-4 h-4 text-blue-600" />
                        ) : (
                          <MessageSquare className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < submission.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">
                        ({submission.rating})
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {submission.content}
                    </p>

                    {submission.publishedTo &&
                      submission.publishedTo.length > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">
                            Published to:
                          </span>
                          <div className="flex gap-1">
                            {submission.publishedTo.map((platform) => {
                              const platformData = platforms.find(
                                (p) => p.id === platform
                              );
                              return platformData ? (
                                <platformData.icon
                                  key={platform}
                                  className={`w-4 h-4 ${platformData.color}`}
                                />
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}

                    <div className="flex gap-2 pt-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-transparent"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Customer Submission</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-600">Customer:</span>
                                <span className="ml-2 font-medium">
                                  {submission.customerName}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-600">Rating:</span>
                                <div className="ml-2 inline-flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="font-medium">
                                    {submission.rating}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {submission.type === "video" ? (
                              <div className="bg-gray-100 rounded-lg p-8 text-center">
                                <Play className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600">
                                  Video player would be here
                                </p>
                              </div>
                            ) : (
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-900">
                                  {submission.content}
                                </p>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>

                      {submission.status === "pending" && (
                        <>
                          <Button
                            size="sm"
                            onClick={() =>
                              updateSubmissionStatus(submission.id, "approved")
                            }
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() =>
                              updateSubmissionStatus(submission.id, "rejected")
                            }
                          >
                            <XCircle className="w-4 h-4" />
                          </Button>
                        </>
                      )}

                      {submission.status === "approved" && (
                        <Button
                          size="sm"
                          onClick={() => openPublishModal(submission)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Publish
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSubmissions.length === 0 && (
            <Card className="shadow-sm">
              <CardContent className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No submissions found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Publish Modal */}
      <Dialog open={!!publishModal} onOpenChange={() => setPublishModal(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-blue-600" />
              Publish to Social Media
            </DialogTitle>
          </DialogHeader>

          {publishModal && (
            <div className="space-y-6">
              {/* Content Preview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">
                  Content Preview
                </h4>
                {publishModal.type === "video" ? (
                  <div className="bg-gray-200 rounded-lg p-8 text-center mb-3">
                    <Play className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Video content</p>
                  </div>
                ) : (
                  <div className="bg-white rounded-lg p-3 border mb-3">
                    <p className="text-sm text-gray-900">
                      "{publishModal.content}"
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>By {publishModal.customerName}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{publishModal.rating}</span>
                  </div>
                </div>
              </div>

              {/* Platform Selection */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Select Platforms</h4>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      className="flex items-center space-x-2 p-3 border rounded-lg"
                    >
                      <Checkbox
                        id={platform.id}
                        checked={selectedPlatforms.includes(platform.id)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedPlatforms([
                              ...selectedPlatforms,
                              platform.id,
                            ]);
                          } else {
                            setSelectedPlatforms(
                              selectedPlatforms.filter((p) => p !== platform.id)
                            );
                          }
                        }}
                      />
                      <platform.icon className={`w-5 h-5 ${platform.color}`} />
                      <label
                        htmlFor={platform.id}
                        className="text-sm font-medium cursor-pointer"
                      >
                        {platform.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caption Editor */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900">Post Caption</h4>
                <Textarea
                  value={publishCaption}
                  onChange={(e) => setPublishCaption(e.target.value)}
                  rows={6}
                  placeholder="Write your post caption..."
                />
                <p className="text-xs text-gray-500">
                  Feel free to edit the caption before publishing
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handlePublish}
                  disabled={selectedPlatforms.length === 0}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Publish Now
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setPublishModal(null)}
                  className="bg-transparent"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CampaignContentManager;
