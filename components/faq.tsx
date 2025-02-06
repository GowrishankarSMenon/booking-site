import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FAQ() {
  return (
    <section className="w-full py-12 bg-background-100 dark:bg-background-900 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-color1-500 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-background-800 dark:text-background-200 font-medium">
              How do I book a flight?
            </AccordionTrigger>
            <AccordionContent className="text-background-600 dark:text-background-400">
              To book a flight, simply use our search tool to find available flights, select your preferred option, and
              follow the booking process. You'll need to provide passenger details and payment information to complete
              your booking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-background-800 dark:text-background-200 font-medium">
              Can I cancel or change my booking?
            </AccordionTrigger>
            <AccordionContent className="text-background-600 dark:text-background-400">
              Yes, you can cancel or change your booking, but the terms may vary depending on the type of ticket you've
              purchased. Please check the specific terms and conditions for your booking or contact our customer support
              for assistance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-background-800 dark:text-background-200 font-medium">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="text-background-600 dark:text-background-400">
              We accept various payment methods including major credit cards (Visa, MasterCard, American Express),
              PayPal, and in some cases, bank transfers. The available payment options will be displayed during the
              checkout process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-background-800 dark:text-background-200 font-medium">
              Is my personal information secure?
            </AccordionTrigger>
            <AccordionContent className="text-background-600 dark:text-background-400">
              Yes, we take the security of your personal information very seriously. We use industry-standard encryption
              technologies and follow strict data protection policies to ensure your information is kept safe and
              secure.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

