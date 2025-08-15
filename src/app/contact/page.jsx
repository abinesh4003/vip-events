'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form'
import { Phone, Mail, MapPin, Calendar, User } from 'lucide-react'
import { toast } from 'sonner'
import AnimateOnScroll from '../components/animations/AnimateOnScroll'
import TextReveal from '../components/animations/TextReveal'
import dynamic from 'next/dynamic'



const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Please provide an estimated date'),
  guests: z.string().min(1, 'Please estimate number of guests'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      guests: '',
      message: ''
    }
  })

async function onSubmit(values) {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })

    const result = await res.json()

    if (res.ok && result.success) {
      toast.success('Message sent successfully! We will contact you within 24 hours.')
      form.reset()
    } else {
      throw new Error(result.error || 'Failed to send message')
    }
  } catch (error) {
    toast.error(error.message || 'Failed to send message')
  }
}

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center bg-gray-900">
        <div className="absolute inset-0 bg-[url('/assets/images/contact/hero-bg.webp')] bg-cover bg-center opacity-60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimateOnScroll yOffset={30}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <TextReveal text="Contact Us" animationType="slideUp" />
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll yOffset={30} delay={0.2}>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can make your event unforgettable
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimateOnScroll yOffset={30} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-lg text-gray-600">
                  Have questions about planning your event? Contact us today for a free consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Call Us</h3>
                    <a
                      href="tel:8778304145"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      8778304145
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Mon-Sun, 8AM-10PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email Us</h3>
                    <a
                      href="mailto:contact@vipfunctionplanners.com"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      contact@vipfunctionplanners.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="text-accent w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      13/71 South Street keezha Asaripallam, Nagercoil, Tamil Nadu 629201
                    </p>
                    <p className="text-sm text-gray-400 mt-1">By appointment only</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium text-gray-900 mb-3">Working Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Form */}
            <AnimateOnScroll yOffset={30} delay={0.2}>
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <Input
                                placeholder="Your name"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                  type="tel"
                                  placeholder="9876543210"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="eventType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Event Type</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="">Select event type</option>
                                <option value="wedding">Wedding</option>
                                <option value="engagement">Engagement</option>
                                <option value="birthday">Birthday</option>
                                <option value="corporate">Corporate Event</option>
                                <option value="other">Other</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="eventDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estimated Event Date</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <Input
                                  type="date"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Number of Guests</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              placeholder="100"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your event..."
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 md:pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimateOnScroll yOffset={30}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our office in Nagercoil to discuss your event in person
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll yOffset={50} delay={0.2}>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-[400px] md:h-[500px]">
              {/* map */}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}