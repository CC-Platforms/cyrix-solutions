interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const teamList: TeamProps[] = [
  {
    imageUrl:
      "/avatars/mesueh_christien_ndumbe.jpg",
    firstName: "Mesueh Christien",
    lastName: "Ndumbe",
    positions: ["WordPress", "Full-Stack Developer", "Frontend Developer"],
    socialNetworks: [
      // {
      //   name: "LinkedIn",
      //   url: "#",
      // },
      {
        name: "Github",
        url: "https://github.com/christienMD",
      },
      {
        name: "Website",
        url: "https://mdchristien-portfolio.vercel.app/",
      },
    ],
  },
  {
    imageUrl:
      "/avatars/nkwi_cyril_akinimbom.jpg",
    firstName: "Nkwi Cyril",
    lastName: "Akinimbom",
    positions: ["WordPress", "Full-Stack Developer", "Mobile App Developer"],
    socialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nkwicyril/",
      },
      {
        name: "Github",
        url: "https://github.com/NkwiCyril",
      },
      {
        name: "X",
        url: "https://x.com/NkwiCyril",
      },
    ],
  }
];
