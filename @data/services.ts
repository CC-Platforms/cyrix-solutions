export enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

export const serviceList: ServiceProps[] = [
  {
    title: "Free Project Consultation",
    description:
      "Get expert guidance to define your vision and strategize the perfect website or software solution.",
    pro: 0,
  },
  {
    title: "Custom Website Design",
    description:
      "Create a stunning, responsive website tailored to your brand for a professional online presence.",
    pro: 0,
  },
  {
    title: "Basic SEO Setup",
    description:
      "Kickstart your visibility with essential SEO strategies to attract your target audience.",
    pro: 0,
  },
  {
    title: "E-Commerce Development",
    description:
      "Launch a secure, scalable online store with advanced features to boost sales and engagement.",
    pro: 0,
  },
  {
    title: "Custom Web App Development",
    description:
      "Build bespoke web applications to streamline operations and enhance user experiences.",
    pro: 0,
  },
  {
    title: "Premium Support & Maintenance",
    description:
      "Enjoy 24/7 support and ongoing updates to keep your website or app running smoothly.",
    pro: 0,
  },
];