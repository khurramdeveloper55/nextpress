"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signup } from "@/lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export function SignupForm({ className, ...props }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [alertData, setAlertData] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(formData);
      setAlertData({
        type: "success",
        title: "🎉 Signup Successful",
        desc: "Please login to continue.",
      });
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        setAlertData(null);
        router.push("/login");
      }, 5000);
    } catch (err) {
      setAlertData({
        type: "error",
        title: "❌ Signup Failed",
        desc: err.response?.data?.message || "Something went wrong. Try again.",
      });
      setTimeout(() => setAlertData(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {alertData && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md">
          <Alert
            className={cn(
              "rounded-xl shadow-lg",
              alertData.type === "success"
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50"
            )}
          >
            <AlertTitle>{alertData.title}</AlertTitle>
            <AlertDescription>{alertData.desc}</AlertDescription>
          </Alert>
        </div>
      )}
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="john doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 cursor-pointer px-8 text-base rounded-xl font-semibold shadow-md transition-all duration-200 
          ${
            loading
              ? "bg-gray-700 text-gray-300 cursor-not-allowed"
              : "bg-black text-white hover:shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          }`}
                >
                  {loading ? "Signing up..." : "Signup"}
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
