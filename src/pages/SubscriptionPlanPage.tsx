import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    id: "free-trial",
    name: "Free Trial",
    price: "0",
    currency: "৳",
    features: [
      "Basic Dashboard Access",
      "5 Orders/day",
      "Limited Menu Items",
      "No Live Chat",
      "7-day free trial",
    ],
    highlight: false,
  },
  {
    id: "saimun",
    name: "Standard",
    price: "1,500",
    currency: "৳",
    features: [
      "Full Dashboard Access",
      "Unlimited Orders",
      "Unlimited Menu Items",
      "Live Chat (Basic)",
      "UGC Content Management",
      "Email Support",
    ],
    highlight: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: "1,500",
    currency: "৳",
    features: [
      "Full Dashboard Access",
      "Unlimited Orders",
      "Unlimited Menu Items",
      "Live Chat (Basic)",
      "UGC Content Management",
      "Email Support",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "3,000",
    currency: "৳",
    features: [
      "All Standard Features",
      "Advanced Analytics",
      "Priority Live Chat",
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Phone Support",
    ],
    highlight: false,
  },
];

const SubscriptionPlanPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("standard"); // Default to standard
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 p-4  ">
      <div className="w-full container space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-title">Choose Your Plan</h2>
          <p className="text-gray-700  text-base mt-4 font-subtitle">
            Select the best plan that fits your restaurant's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col border-2 ${
                selectedPlan === plan.id
                  ? "border-green-600 shadow-lg"
                  : "border-gray-200"
              } ${
                plan.highlight ? "bg-green-50" : "bg-white"
              } transition-all duration-200 cursor-pointer`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 font-title">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-extrabold text-gray-900 mt-2 font-subtitle">
                  {plan.currency}
                  {plan.price}
                  <span className="text-base font-medium text-gray-600 font-subtitle">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 space-y-3 p-6">
                <ul className="space-y-2 text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button
                  className={`w-full font-title ${
                    selectedPlan === plan.id
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? "Current Plan" : "Select Plan"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanPage;
