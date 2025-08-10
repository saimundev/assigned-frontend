import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import { customers } from "@/data/Customer";
import CustomerSearch from "./CustomerSearch";
import StatusCard from "../common/StatusCard";
import CustomerTableHeader from "./CustomerTableHeader";
import { CustomerList } from "./CustomerList";
import CommonHeader from "../common/CommonHeader";

const Customer = () => {
  const totalCustomers = customers.length;
  const vipCustomers = customers.filter((c) => c.status === "VIP").length;
  const regularCustomers = customers.filter(
    (c) => c.status === "Regular"
  ).length;
  const newCustomers = customers.filter((c) => c.status === "New").length;

  return (
    <div className="space-y-6">
      <CommonHeader
        title="Customers"
        description=" Manage customer information and relationships"
      />

      {/* Customer Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatusCard title="Total Customers" count={totalCustomers} />
        <StatusCard title="VIP Customers" count={vipCustomers} />
        <StatusCard title="Regular Customers" count={regularCustomers} />
        <StatusCard title="New Customers" count={newCustomers} />
      </div>

      {/* Search and Filters */}
      <CustomerSearch />

      {/* Customers Table */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900">
            Customer List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <CustomerTableHeader />
            <TableBody>
              {customers.map((customer) => (
                <CustomerList key={customer.id} customer={customer} />
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customer;
