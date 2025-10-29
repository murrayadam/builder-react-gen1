import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import PricingCard from "./components/PricingCard/PricingCard";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Testimonial from "./components/Testimonial/Testimonial";
import ContactForm from "./components/ContactForm/ContactForm";

Builder.register('insertMenu', {
  name: 'Custom Components',
  items: [
    { name: 'Counter', item: 'Counter' },
    { name: 'Progress Bar', item: 'Progress Bar' },
    { name: 'Pricing Card', item: 'Pricing Card' },
    { name: 'Image Carousel', item: 'Image Carousel' },
    { name: 'Testimonial', item: 'Testimonial' },
    { name: 'Contact Form', item: 'Contact Form' },
    { name: 'Accordion', item: 'Accordion' },
  ],
})

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ProgressBar, {
  name: "Progress Bar",
  inputs: [
    {
      name: "value",
      type: "number",
      defaultValue: 50,
      helperText: "Current progress value"
    },
    {
      name: "max",
      type: "number",
      defaultValue: 100,
      helperText: "Maximum value"
    },
    {
      name: "color",
      type: "color",
      defaultValue: "#007bff",
      helperText: "Progress bar color"
    },
    {
      name: "height",
      type: "number",
      defaultValue: 20,
      helperText: "Height in pixels"
    },
    {
      name: "showLabel",
      type: "boolean",
      defaultValue: true,
      helperText: "Show percentage label"
    },
    {
      name: "animated",
      type: "boolean",
      defaultValue: false,
      helperText: "Enable animated stripes"
    }
  ],
});

Builder.registerComponent(PricingCard, {
  name: "Pricing Card",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Basic Plan",
      helperText: "Plan title"
    },
    {
      name: "price",
      type: "number",
      defaultValue: 29,
      helperText: "Price amount"
    },
    {
      name: "currency",
      type: "string",
      defaultValue: "$",
      helperText: "Currency symbol"
    },
    {
      name: "period",
      type: "string",
      defaultValue: "month",
      helperText: "Billing period"
    },
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "text",
          type: "string",
          helperText: "Feature description"
        },
        {
          name: "included",
          type: "boolean",
          defaultValue: true,
          helperText: "Is this feature included?"
        }
      ],
      defaultValue: [
        { text: "5 Projects", included: true },
        { text: "10GB Storage", included: true },
        { text: "Email Support", included: true },
        { text: "Priority Support", included: false }
      ]
    },
    {
      name: "highlighted",
      type: "boolean",
      defaultValue: false,
      helperText: "Highlight this card as popular"
    },
    {
      name: "buttonText",
      type: "string",
      defaultValue: "Get Started",
      helperText: "Call-to-action text"
    },
    {
      name: "buttonUrl",
      type: "url",
      defaultValue: "#",
      helperText: "Button destination URL"
    }
  ],
});

Builder.registerComponent(ImageCarousel, {
  name: "Image Carousel",
  inputs: [
    {
      name: "images",
      type: "list",
      subFields: [
        {
          name: "src",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
          helperText: "Image file"
        },
        {
          name: "alt",
          type: "string",
          helperText: "Alt text for accessibility"
        },
        {
          name: "caption",
          type: "string",
          helperText: "Optional image caption"
        }
      ],
      defaultValue: [
        { src: "https://via.placeholder.com/800x400/007bff/white?text=Slide+1", alt: "Slide 1", caption: "First slide" },
        { src: "https://via.placeholder.com/800x400/28a745/white?text=Slide+2", alt: "Slide 2", caption: "Second slide" },
        { src: "https://via.placeholder.com/800x400/dc3545/white?text=Slide+3", alt: "Slide 3", caption: "Third slide" }
      ]
    },
    {
      name: "autoPlay",
      type: "boolean",
      defaultValue: false,
      helperText: "Auto-advance slides"
    },
    {
      name: "autoPlayInterval",
      type: "number",
      defaultValue: 3000,
      helperText: "Auto-play interval in milliseconds"
    },
    {
      name: "showDots",
      type: "boolean",
      defaultValue: true,
      helperText: "Show navigation dots"
    },
    {
      name: "showArrows",
      type: "boolean",
      defaultValue: true,
      helperText: "Show navigation arrows"
    },
    {
      name: "height",
      type: "number",
      defaultValue: 400,
      helperText: "Carousel height in pixels"
    }
  ],
});

Builder.registerComponent(Testimonial, {
  name: "Testimonial",
  inputs: [
    {
      name: "quote",
      type: "longText",
      defaultValue: "This product has completely transformed how we work. The team is more productive and our clients are happier than ever.",
      helperText: "Customer testimonial quote"
    },
    {
      name: "author",
      type: "string",
      defaultValue: "Sarah Johnson",
      helperText: "Author name"
    },
    {
      name: "position",
      type: "string",
      defaultValue: "Product Manager",
      helperText: "Author's job title"
    },
    {
      name: "company",
      type: "string",
      defaultValue: "TechCorp Inc.",
      helperText: "Author's company"
    },
    {
      name: "avatar",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
      defaultValue: "https://via.placeholder.com/80x80/007bff/white?text=SJ",
      helperText: "Author's photo"
    },
    {
      name: "rating",
      type: "number",
      defaultValue: 5,
      min: 1,
      max: 5,
      helperText: "Star rating (1-5)"
    },
    {
      name: "variant",
      type: "string",
      enum: ["card", "minimal", "centered"],
      defaultValue: "card",
      helperText: "Display style"
    },
    {
      name: "tagsRequired",
      type: "Tags",
      enum: ["tag1", "tag2", "tag3"],
      required: true,
    },
  ],
});

Builder.registerComponent(ContactForm, {
  name: "Contact Form",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Get in Touch",
      helperText: "Form title"
    },
    {
      name: "subtitle",
      type: "longText",
      defaultValue: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      helperText: "Form subtitle/description"
    },
    {
      name: "showPhone",
      type: "boolean",
      defaultValue: true,
      helperText: "Include phone number field"
    },
    {
      name: "showCompany",
      type: "boolean",
      defaultValue: false,
      helperText: "Include company field"
    },
    {
      name: "showMessage",
      type: "boolean",
      defaultValue: true,
      helperText: "Include message textarea"
    },
    {
      name: "submitText",
      type: "string",
      defaultValue: "Send Message",
      helperText: "Submit button text"
    },
    {
      name: "successMessage",
      type: "longText",
      defaultValue: "Thank you! We'll get back to you soon.",
      helperText: "Success confirmation message"
    },
    {
      name: "layout",
      type: "string",
      enum: ["vertical", "horizontal"],
      defaultValue: "vertical",
      helperText: "Form field layout"
    }
  ],
});
