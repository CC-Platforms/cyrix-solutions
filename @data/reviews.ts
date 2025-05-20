interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

export const reviewList: ReviewProps[] = [
  {
    image: "/avatars/7.png",
    name: "Fotsing Tchinda",
    userName: "CEO, Douala Digital Solutions",
    comment:
      "Cyrix Solutions transformed our outdated website into a high-converting platform. Their expertise is unmatched!",
    rating: 5.0,
  },
  {
    image: "https://bricoree.com/assets/img/brillian/company_logo_circle.png",
    name: "Pah Brillian Beng",
    userName: "Founder, Brillian & Co Real Estate",
    comment:
      "The website Cyrix built helped us market ourselves in the Real Estate space. Amazing features and irresistable design.",
    rating: 4.0,
  },
  {
    image: "/avatars/5.png",
    name: "Aminata Diallo",
    userName: "CTO, Sahel Innovations",
    comment:
      "Their custom web app streamlined our operations, saving us hours daily. Highly professional service!",
    rating: 4.9,
  },
];