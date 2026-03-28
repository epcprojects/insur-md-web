"use client";

import { useState } from "react";
import { toastAlert } from "./ToastAlert";

type Props = {
  theme: {
    logo: {
      fill3: string;
    };
  };
};

export default function SubscribeForm({ theme }: Props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubscribe = async () => {
    const trimmedEmail = email.trim();

    setError("");
    setSuccess("");

    if (!trimmedEmail) {
      setError("Email is required.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Subscriber",
          email: trimmedEmail,
          phone: undefined,
          message: "Newsletter subscription",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }
      toastAlert("Congratulations! You are subscribed!", true);
      setSuccess("Subscribed successfully.");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 flex-wrap">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-base text-[#717680] outline-0 bg-white border border-[#D5D7DA] rounded-lg py-2.5 px-3.5"
          placeholder="Enter your email"
        />

        <button
          type="submit"
          onClick={handleSubscribe}
          disabled={loading}
          className="cursor-pointer rounded-full py-2.5 px-6 drop-shadow text-white font-semibold text-lg disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: theme.logo.fill3 }}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      {success && <p className="mt-2 text-sm text-green-600">{success}</p>}
    </div>
  );
}
