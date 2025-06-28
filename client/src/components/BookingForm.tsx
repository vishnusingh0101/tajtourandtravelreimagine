import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const tourPackages = [
  "Golden Triangle Tour",
  "Same Day Agra Tour",
  "Same Day Jaipur Tour",
  "Delhi Vrindavan Package",
  "Rajasthan Cultural Tour",
  "Kerala Backwaters Tour",
];

const travelerOptions = [
  "1 Person",
  "2 People",
  "3-4 People",
  "5-8 People",
  "8+ People",
];

const budgetRanges = [
  "₹3,000 - ₹5,000",
  "₹5,000 - ₹10,000",
  "₹10,000 - ₹15,000",
  "₹15,000 - ₹25,000",
  "₹25,000+",
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Singapore",
  "Other",
];

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      tourPackage: "",
      numberOfTravelers: "",
      preferredStartDate: "",
      budgetRange: "",
      specialRequests: "",
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Booking Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your tour details.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Booking Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBooking) => {
    createBookingMutation.mutate(data);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const getProgressValue = () => {
    return (step / 3) * 100;
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <i className="fas fa-check text-green-600 text-3xl"></i>
        </div>
        <h2 className="text-3xl font-bold text-royal-blue mb-4">Thank You!</h2>
        <p className="text-warm-gray text-lg mb-6">
          Your booking request has been submitted successfully. Our team will contact you within 24 hours.
        </p>
        <div className="bg-soft-cream p-6 rounded-lg inline-block">
          <p className="text-sm text-warm-gray">
            <strong>Booking ID:</strong> TIT{Date.now()}
          </p>
          <p className="text-sm text-warm-gray mt-2">
            <strong>Contact:</strong> +91 98765 43210
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-warm-gray mb-2">
          <span className={step >= 1 ? "text-royal-blue font-semibold" : ""}>Personal Details</span>
          <span className={step >= 2 ? "text-royal-blue font-semibold" : ""}>Tour Preferences</span>
          <span className={step >= 3 ? "text-royal-blue font-semibold" : ""}>Confirmation</span>
        </div>
        <Progress value={getProgressValue()} className="h-2" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-royal-blue mb-6">Personal Details</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Country</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Country" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="button" onClick={nextStep} className="bg-ocean-blue hover:bg-blue-800">
                    Next Step
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Tour Preferences */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-royal-blue mb-6">Tour Preferences</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="tourPackage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tour Package *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Package" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tourPackages.map((pkg) => (
                              <SelectItem key={pkg} value={pkg}>
                                {pkg}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="numberOfTravelers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Travelers *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Travelers" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {travelerOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="preferredStartDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budgetRange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specialRequests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requests or Preferences</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or preferences..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <i className="fas fa-arrow-left mr-2"></i>
                    Previous
                  </Button>
                  <Button type="button" onClick={nextStep} className="bg-ocean-blue hover:bg-blue-800">
                    Review Booking
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-royal-blue mb-6">Review & Confirm</h3>
                
                {/* Booking Summary */}
                <div className="bg-soft-cream p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-royal-blue mb-4">Booking Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Name:</span>
                      <span>{form.watch("fullName")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email:</span>
                      <span>{form.watch("email")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tour Package:</span>
                      <span>{form.watch("tourPackage")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travelers:</span>
                      <span>{form.watch("numberOfTravelers")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Start Date:</span>
                      <span>{form.watch("preferredStartDate") || "To be confirmed"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Budget Range:</span>
                      <span>{form.watch("budgetRange") || "To be discussed"}</span>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="mb-6">
                  <label className="flex items-start space-x-3">
                    <Checkbox required className="mt-1" />
                    <span className="text-sm text-gray-700">
                      I agree to the Terms and Conditions and Privacy Policy. I understand that this is an inquiry and final pricing will be confirmed by our team.
                    </span>
                  </label>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    <i className="fas fa-arrow-left mr-2"></i>
                    Previous
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-sunset-orange hover:bg-orange-600 conversion-gradient"
                    disabled={createBookingMutation.isPending}
                  >
                    {createBookingMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Submit Booking Request
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </motion.div>
  );
}
