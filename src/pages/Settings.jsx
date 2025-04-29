import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="p-6 space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold">Settings</h2>

      {/* Username Input */}
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Currency Select */}
      <div className="space-y-2">
        <Label htmlFor="currency">Preferred Currency</Label>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger id="currency" className="w-full">
            {currency}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
            <SelectItem value="UGX">UGX</SelectItem>
            <SelectItem value="KES">KES</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
