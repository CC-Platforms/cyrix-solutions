"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "../section-header";
import SectionContainer from "../section-container";

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Custom Website Development",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    console.log(values);

    const mailToLink = `mailto:info@cyrixtechsolutions.com?subject=${subject}&body=Hello, I am ${firstName} ${lastName}, my Email is ${email}. %0D%0A${message}`;

    window.location.href = mailToLink;
  }

  return (
    <SectionContainer id="contact">
      <SectionHeader
        subTitle="Get in Touch"
        title="Connect with Cyrix Tech Solutions"
        description="Ready to transform your business with a custom website or web app? Contact us today for expert solutions and personalized support."
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex flex-col gap-6 *:rounded-lg *:p-6 *:border">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="size-5" />
                <div className="font-bold">Location:</div>
              </div>
              <div className="text-muted-foreground">
                Buea, Cameroon
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Phone className="size-5" />
                <div className="font-bold">Chat with us:</div>
              </div>
              <div className="text-muted-foreground">
                <a
                  href="https://wa.me/+237651085550?text=Hello%20Cyrix%20Tech%20Solutions,%20I'm%20interested%20in%20your%20services!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="size-5" />
                <div className="font-bold">Email us:</div>
              </div>
              <div className="text-muted-foreground">
                <a 
                  href="mailto:info@cyrixtechsolutions.com"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  info@cyrixtechsolutions.com
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Clock className="size-5" />
                <div className="font-bold">Business Hours:</div>
              </div>
              <div className="text-muted-foreground">
                Monday to Saturday, 9 AM - 6 PM
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted">
          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john.doe@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Custom Website Development">
                              Website Development
                            </SelectItem>
                            <SelectItem value="E-Commerce Solutions">
                              E-Commerce Solutions
                            </SelectItem>
                            <SelectItem value="Web App Development">
                              Web App Development
                            </SelectItem>
                            <SelectItem value="App Development">
                              App Development
                            </SelectItem>
                            <SelectItem value="SEO Optimization">
                              SEO Optimization
                            </SelectItem>
                            <SelectItem value="Consultation">
                              Consultation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Tell us about your project..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button className="mt-4">Send Message</Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </SectionContainer>
  );
};