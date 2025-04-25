import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const Contactus = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
      }
  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-2xl mb-[100px] shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Your Name" required />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="you@example.com" required />
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" className="resize-none" name="message" placeholder="Your message..." required />
      </div>

      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  </div>
  )
}

export default Contactus
