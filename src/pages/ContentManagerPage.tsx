import CampaignContentManager from "@/components/campaign-content/CampaignContentManager";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const ContentManagerPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/campaigns">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campaigns
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            UGC Content Management
          </h1>
          <p className="text-gray-600">
            Review, approve, and publish customer-generated content to social
            media
          </p>
        </div>
      </div>

      <CampaignContentManager />
    </div>
  );
};

export default ContentManagerPage;
