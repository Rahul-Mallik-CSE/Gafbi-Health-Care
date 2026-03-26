/** @format */

"use client";

import React, { useState } from "react";
import ProductSelectionStep from "./ProductSelectionStep";
import DataEntryStep from "./DataEntryStep";
import ApplicationStep from "./ApplicationStep";
import DoneStep from "./DoneStep";

const steps = [
  { id: 1, label: "Product Selection" },
  { id: 2, label: "Data Entry" },
  { id: 3, label: "Application" },
  { id: 4, label: "Done" },
];

interface FormData {
  selectedProducts: Array<{
    id: string;
    name: string;
    quantity: number;
    volume: string;
    price?: number;
  }>;
  personalDetails: {
    gender: "Mr" | "Mrs" | "";
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    careLevel: string;
  };
  address: {
    street: string;
    area: string;
    city: string;
    zipCode: string;
    differentDelivery: boolean;
    deliveryStreet: string;
    deliveryArea: string;
    deliveryCity: string;
    deliveryZipCode: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  consultation: {
    needsConsultation: boolean;
    consultationReason?: string;
    alreadyHasAids: boolean;
  };
  insurance: {
    type: "legal" | "private" | "local" | "";
    number: string;
  };
  applicationSign: {
    hasSignedCost: boolean;
    hasSignedSupplier: boolean;
  };
}

export default function ApplyBoxStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    selectedProducts: [],
    personalDetails: {
      gender: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      careLevel: "",
    },
    address: {
      street: "",
      area: "",
      city: "",
      zipCode: "",
      differentDelivery: false,
      deliveryStreet: "",
      deliveryArea: "",
      deliveryCity: "",
      deliveryZipCode: "",
    },
    contact: {
      email: "",
      phone: "",
    },
    consultation: {
      needsConsultation: false,
      consultationReason: "",
      alreadyHasAids: false,
    },
    insurance: {
      type: "",
      number: "",
    },
    applicationSign: {
      hasSignedCost: false,
      hasSignedSupplier: false,
    },
  });

  const handleNext = (updatedData?: Partial<FormData>) => {
    if (updatedData) {
      setFormData((prev) => ({ ...prev, ...updatedData }));
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Handle completion
    console.log("Application completed with data:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProductSelectionStep
            data={formData.selectedProducts}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <DataEntryStep
            data={formData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 3:
        return (
          <ApplicationStep
            data={formData}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        );
      case 4:
        return <DoneStep onComplete={handleComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-background pb-8 sm:pb-12">
      {/* Stepper */}
      <div className="mx-auto w-full max-w-300 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 mt-6 sm:mt-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center justify-center">
                  <div
                    className={`flex h-9  px-2 items-center justify-center rounded-sm border-2 transition-all duration-300 ${
                      currentStep >= step.id
                        ? "border-button-bg bg-button-bg text-white"
                        : "border-gray-300 bg-white text-gray-400"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <span className="text-base sm:text-lg">✓</span>
                    ) : (
                      <span className="text-xs  sm:text-sm font-semibold">
                        {step.id} {step.label}
                      </span>
                    )}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-2 sm:mx-4 transition-all duration-300 ${
                      currentStep > step.id ? "bg-button-bg" : "bg-gray-300"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-8">
        {renderStep()}
      </div>
    </div>
  );
}
