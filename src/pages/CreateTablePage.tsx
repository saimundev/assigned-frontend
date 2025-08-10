import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const CreateTablePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
          <span className="sr-only">Back</span>
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Add New Table</h1>
          <p className="text-gray-600">
            Define the details for a new restaurant table.
          </p>
        </div>
      </div>

      <Card className="w-full max-w-2xl mx-auto shadow-sm">
        <CardHeader>
          <CardTitle>Table Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="tableName">Table Name</Label>
                <Input id="tableName" placeholder="e.g., Table 101" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seats">Number of Seats</Label>
                <Input id="seats" type="number" placeholder="e.g., 4" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="Occupied">Occupied</SelectItem>
                    <SelectItem value="Reserved">Reserved</SelectItem>
                    <SelectItem value="Maintenance">Maintenance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            Create Table
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateTablePage;
