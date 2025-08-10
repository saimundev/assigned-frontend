import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import RestaurantMenu from "../MenuOrderCard";

type AddItemProps = {
  handlePrevStep: () => void;
};
const AddItem = ({ handlePrevStep }: AddItemProps) => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="editor">
        <TabsList>
          <TabsTrigger value="editor">Menu Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <div className="space-y-6">
            <div className="border rounded-lg p-4">
              <RestaurantMenu from="editor" />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevStep}>
                Back
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Preview Tab */}
        <TabsContent value="preview" className="mt-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Menu Preview</h2>
            <div className="border rounded-lg p-4">
              <RestaurantMenu from="preview" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AddItem;
