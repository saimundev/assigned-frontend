import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Check, ChevronRight, Palette, Save } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { menuTemplates } from "@/constants/TemplateMenu";
import RestaurantMenu from "./MenuOrderCard";

export default function CreateMenuPage() {
  const router = useNavigate();
  const [step, setStep] = useState(1);
  const [menuInfo, setMenuInfo] = useState({
    name: "",
    description: "",
    restaurantName: "",
    tagline: "",
  });
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const handleMenuInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMenuInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleSaveMenu = () => {
    // In a real app, this would save to a database
    console.log("Saving menu:", { ...menuInfo, template: selectedTemplate });
    router("/dashboard/menus");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/dashboard/menus">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Menu</h1>
          <p className="text-muted-foreground">
            Design a beautiful menu for your restaurant
          </p>
        </div>
      </div>

      {/* Progress steps */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? "bg-rose-600 text-white" : "bg-gray-200"
            }`}
          >
            {step > 1 ? <Check className="h-4 w-4" /> : "1"}
          </div>
          <span className={step >= 1 ? "font-medium" : "text-muted-foreground"}>
            Menu Info
          </span>
        </div>
        <div className="h-px w-12 bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? "bg-rose-600 text-white" : "bg-gray-200"
            }`}
          >
            {step > 2 ? <Check className="h-4 w-4" /> : "2"}
          </div>
          <span className={step >= 2 ? "font-medium" : "text-muted-foreground"}>
            Choose Template
          </span>
        </div>
        <div className="h-px w-12 bg-gray-200"></div>
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? "bg-rose-600 text-white" : "bg-gray-200"
            }`}
          >
            {step > 3 ? <Check className="h-4 w-4" /> : "3"}
          </div>
          <span className={step >= 3 ? "font-medium" : "text-muted-foreground"}>
            Add Items
          </span>
        </div>
      </div>

      {/* Step 1: Menu Info */}
      {step === 1 && (
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Menu Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Summer Special, Weekend Brunch"
                  value={menuInfo.name}
                  onChange={handleMenuInfoChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Menu Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your menu..."
                  rows={3}
                  value={menuInfo.description}
                  onChange={handleMenuInfoChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="restaurantName">Restaurant Name</Label>
                <Input
                  id="restaurantName"
                  name="restaurantName"
                  placeholder="Your restaurant name"
                  value={menuInfo.restaurantName}
                  onChange={handleMenuInfoChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline (Optional)</Label>
                <Input
                  id="tagline"
                  name="tagline"
                  placeholder="e.g. Serving fresh food since 1995"
                  value={menuInfo.tagline}
                  onChange={handleMenuInfoChange}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={handleNextStep}
                  className="bg-rose-600 hover:bg-rose-700"
                  disabled={!menuInfo.name || !menuInfo.restaurantName}
                >
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Choose Template */}
      {step === 2 && (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Choose a Template</h2>
                <p className="text-muted-foreground">
                  Select a template that best fits your restaurant's style. You
                  can customize colors and layout later.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all hover:shadow-md ${
                        selectedTemplate === template.id
                          ? "border-rose-500 ring-2 ring-rose-500"
                          : "border-gray-200"
                      }`}
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      <div className="aspect-video relative">
                        <img
                          src={template.preview || "/placeholder.svg"}
                          alt={template.name}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-xs text-gray-500">
                          {template.description}
                        </p>
                      </div>
                      {selectedTemplate === template.id && (
                        <div className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button
                  onClick={handleNextStep}
                  className="bg-rose-600 hover:bg-rose-700"
                  disabled={!selectedTemplate}
                >
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Step 3: Add Items */}
      {step === 3 && (
        <div className="space-y-6">
          <Tabs defaultValue="editor">
            <TabsList>
              <TabsTrigger value="editor">Menu Editor</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="editor" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-semibold">Menu ContentSDFS</h2>
                      <Button variant="outline" size="sm">
                        <Palette className="mr-2 h-4 w-4" />
                        Customize Colors
                      </Button>
                    </div>

                    {/* This would be replaced with the actual menu editor component */}
                    <div className="border rounded-lg p-4">
                      <RestaurantMenu />
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={handlePrevStep}>
                        Back
                      </Button>
                      <Button
                        onClick={handleSaveMenu}
                        className="bg-rose-600 hover:bg-rose-700"
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save Menu
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="preview" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold">Menu Preview</h2>
                    <div className="border rounded-lg p-4">
                      <RestaurantMenu />
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" onClick={handlePrevStep}>
                        Back
                      </Button>
                      <Button
                        onClick={handleSaveMenu}
                        className="bg-rose-600 hover:bg-rose-700"
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save Menu
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}
