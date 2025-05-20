import React, { useState, useEffect } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Define the form validation schema
const bookingFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  phoneNumber: z.string().min(6, { message: 'Phone number must be at least 6 digits.' }),
  date: z.date({
    required_error: "Please select a date for your booking.",
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

interface BookingCalendarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tripId: string;
  tripName: string;
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  open,
  onOpenChange,
  tripId,
  tripName,
}) => {
  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Initialize form
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
    },
  });

  // Fetch booked dates when component mounts
  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        // Replace with your actual API call to fetch booked dates
        const response = await fetch(`/api/booked-dates?tripId=${tripId}`);
        const data = await response.json();
        
        // Convert string dates to Date objects
        const dates = data.dates.map((dateStr: string) => new Date(dateStr));
        setBookedDates(dates);
      } catch (error) {
        console.error("Failed to fetch booked dates:", error);
      }
    };

    if (open) {
      fetchBookedDates();
      form.reset(); // Reset form when dialog opens
      setBookingSuccess(false);
    }
  }, [open, tripId, form]);

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API call to book the date
      const response = await fetch('/api/book-date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tripId,
          tripName,
          date: data.date.toISOString(),
          fullName: data.fullName,
          phoneNumber: data.phoneNumber,
        }),
      });
      
      if (response.ok) {
        setBookingSuccess(true);
        // Add the newly booked date to the bookedDates array
        setBookedDates([...bookedDates, data.date]);
      } else {
        const errorData = await response.json();
        form.setError('root', { 
          message: errorData.error || 'Failed to book date' 
        });
      }
    } catch (error) {
      console.error("Booking failed:", error);
      form.setError('root', { 
        message: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to check if a date is disabled
  const isDateDisabled = (date: Date) => {
    // Check if the date is already booked
    return bookedDates.some(bookedDate => 
      bookedDate.getFullYear() === date.getFullYear() &&
      bookedDate.getMonth() === date.getMonth() &&
      bookedDate.getDate() === date.getDate()
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-amber-50">
        <DialogHeader>
          <DialogTitle className="text-amber-900">Book Your Trip</DialogTitle>
        </DialogHeader>
        
        {bookingSuccess ? (
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-green-100 p-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-amber-900">Booking Successful!</h3>
            <p className="text-center text-amber-800">
              Thank you, {form.getValues('fullName')}! Your trip is reserved for {form.getValues('date')?.toLocaleDateString()}.
              We will contact you shortly at {form.getValues('phoneNumber')} to confirm the details.
            </p>
            <Button 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-amber-900">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field} 
                        className="border-amber-200 focus:border-amber-400"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-amber-900">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your phone number" 
                        {...field} 
                        className="border-amber-200 focus:border-amber-400"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col pt-2">
                    <FormLabel className="text-amber-900 mb-2">Select Date</FormLabel>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={isDateDisabled}
                      className="border-amber-200 rounded-md"
                      fromDate={new Date()} // Can't select dates in the past
                    />
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              
              {form.formState.errors.root && (
                <p className="text-red-500 text-sm">{form.formState.errors.root.message}</p>
              )}
              
              <div className="flex justify-between mt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="border-amber-600 text-amber-800"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                
                <Button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Now"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingCalendar;