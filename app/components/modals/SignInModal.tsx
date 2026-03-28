"use client";

import { images } from "@/app/ui";
import Image from "next/image";
import React, { useState } from "react";
import * as Yup from "yup";
import { toastAlert } from "../ToastAlert";
import { ModalCrossIcon } from "@/public/icons";

const schema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "At least 2 characters required")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "At least 2 characters required")
    .required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),
});

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setReason("");
    setErrors({});
  };

  const handleClose = () => {
    if (loading) return;
    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    try {
      setErrors({});

      await schema.validate(
        { firstName, lastName, email, phone, reason },
        { abortEarly: false },
      );

      setLoading(true);

      const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: fullName,
          email: email.trim(),
          phone: phone.trim(),
          reason: reason.trim(),
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.message || "Request failed. Please try again.");
      }

      toastAlert("Request submitted successfully", true);
      handleClose();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const fieldErrors: Record<string, string> = {};
        err.inner.forEach((e) => {
          if (e.path) fieldErrors[e.path] = e.message;
        });
        setErrors(fieldErrors);
        return;
      }

      const message =
        err instanceof Error ? err.message : "Something went wrong";
      toastAlert(message, false);
      console.error("Contact form error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-500 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="mx-4 relative flex w-full max-w-130 flex-col gap-3 overflow-hidden rounded-2xl bg-linear-to-br from-[#F5F7FA] to-[#C3CFE2] p-5 shadow-xl md:gap-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center">
          <Image alt="" src={images.landingImages.logo} className="" />

          <button
            onClick={handleClose}
            disabled={loading}
            className="absolute top-4 inset-e-4 cursor-pointer rounded-md p-1 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ModalCrossIcon />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-center text-lg font-bold text-gray-900 md:text-xl">
            Request a Demo
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                disabled={loading}
                className={`w-full rounded-lg border px-3 py-2 text-base outline-none focus:border-transparent focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70 ${
                  errors.firstName
                    ? "border-red-400 bg-red-50 focus:ring-1 focus:ring-red-300"
                    : "border-gray-300 bg-white focus:ring-gray-300"
                }`}
              />
              {errors.firstName && (
                <p className="text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                disabled={loading}
                className={`w-full rounded-lg border px-3 py-2 text-base outline-none focus:border-transparent focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70 ${
                  errors.lastName
                    ? "border-red-400 bg-red-50 focus:ring-1 focus:ring-red-300"
                    : "border-gray-300 bg-white focus:ring-gray-300"
                }`}
              />
              {errors.lastName && (
                <p className="text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              disabled={loading}
              className={`w-full rounded-lg border px-3 py-2 text-base outline-none focus:border-transparent focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.email
                  ? "border-red-400 bg-red-50 focus:ring-1 focus:ring-red-300"
                  : "border-gray-300 bg-white focus:ring-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              disabled={loading}
              className={`w-full rounded-lg border px-3 py-2 text-base outline-none focus:border-transparent focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.phone
                  ? "border-red-400 bg-red-50 focus:ring-1 focus:ring-red-300"
                  : "border-gray-300 bg-white focus:ring-gray-300"
              }`}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Reason for Inquiry
            </label>
            <textarea
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              disabled={loading}
              rows={4}
              className={`w-full rounded-lg border px-3 py-2 text-base outline-none focus:border-transparent focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70 ${
                errors.reason
                  ? "border-red-400 bg-red-50 focus:ring-1 focus:ring-red-300"
                  : "border-gray-300 bg-white focus:ring-gray-300"
              }`}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          type="button"
          className="h-10 w-full cursor-pointer rounded-full bg-linear-to-r from-teal to-dark-teal px-4 text-sm font-medium text-white hover:from-dark-teal hover:to-teal disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Submitting..." : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
