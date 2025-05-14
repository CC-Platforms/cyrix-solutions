interface RouteProps {
  href: string;
  label: string;
}

interface ProductProps {
  title: string;
  icon: string;
  description: string;
}

export const routeList: RouteProps[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#portfolio",
    label: "Portfolio",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const productList: ProductProps[] = [
  {
    title: "Custom Websites",
    icon: "Globe",
    description: "Build stunning, responsive websites tailored to your brand.",
  },
  {
    title: "E-Commerce Solutions",
    icon: "ShoppingCart",
    description: "Launch secure, scalable online stores to boost sales.",
  },
  {
    title: "Web Applications",
    icon: "Code",
    description: "Develop custom web apps for streamlined operations.",
  },
];

