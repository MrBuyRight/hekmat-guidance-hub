
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarClock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

interface BookingFormProps extends Omit<ButtonProps, 'children'> {
  buttonText?: string;
}

export function BookingForm({ buttonText = "Book Your Call", ...buttonProps }: BookingFormProps) {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await supabase
        .from('call_bookings')
        .insert([{ 
          name: values.name,
          phone: values.phone,
        }]);

      if (error) throw error;

      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you soon to confirm your call.",
      });

      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-wisdom-600 hover:bg-wisdom-700 text-white px-8 py-6 text-lg" {...buttonProps}>
          <CalendarClock className="w-5 h-5 mr-2" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6 bg-white rounded-lg shadow-xl border-0">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-gray-900 mb-4">Schedule Your Guidance Call</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your name" 
                      {...field} 
                      className="py-6 px-4 border-gray-200 focus:border-wisdom-500 focus:ring-wisdom-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your phone number" 
                      type="tel" 
                      {...field}
                      className="py-6 px-4 border-gray-200 focus:border-wisdom-500 focus:ring-wisdom-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full bg-wisdom-600 hover:bg-wisdom-700 text-white py-6 text-lg font-medium transition-colors"
            >
              Submit Request
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
