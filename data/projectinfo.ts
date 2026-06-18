export interface Project {
  slug: string;
  name: string;
  smalldescription: string;
  largerdescription?: string;
  image: string;
  link?: string;
  skills: string[];
  gallery?: string[];
  github? : string;

}




const projectinfo: Project[] = [

  {
      slug: "RoamAI",
      name: "RoamAI",
      smalldescription: "A cutting-edge AI-powered travel planning application.",
      largerdescription: "RoamAI is a revolutionary travel planning application that leverages the power of artificial intelligence to create personalized itineraries for your next adventure.it uses the Gemini API to understand your travel preferences and NeonDB to store and manage your travel data securely. With a sleek interface built using React and Next.js, RoamAI makes planning your dream trip easier than ever before.",
      image: "/web.png",
      link: "https://roam-ai-iy2l.vercel.app/",
      skills: ["React", "Next.js", "Tailwind CSS","NeonDB", "Gemini API"],
      gallery: ["/web.png", "/r1.png", "/r2.png", "/r3.png"],
      github: "https://github.com/Hamees123/RoamAI"

    },
    {
      slug: "bakery-web",
      name: "Bakery Web",
      smalldescription: "A modern bakery website that showcases delicious pastries and cakes.",
      largerdescription: "A modern bakery website that showcases delicious pastries and cakes.made using React and Tailwind CSS, this website offers a visually appealing and user-friendly experience for customers to explore the bakery's offerings. With a clean design and intuitive navigation, visitors can easily browse through the menu, view high-quality images of the baked goods, and find information about the bakery's location and hours of operation.",
      image: "/w1.png",
      link: "https://bakery-website-murex-ten.vercel.app/",
      skills: ["React","Tailwind CSS"],
      github: "https://github.com/Hamees123/BakeryWebsite"

    },
    {
      slug: "pet-shop",
      name: "Pet Shop",
      smalldescription: "A beautiful pet shop website that lists all the pets available for purchase.",
      largerdescription: "A beautiful pet shop website that lists all the pets available for purchase.A beautiful web design ",
      image: "/wp4.png",
      link: "https://pet-web-seven.vercel.app/",
      skills: ["React","Tailwind CSS"],
      gallery: ["/wp1.png", "/wp2.png", "/wp3.png", "/wp4.png"]


    },
    
  ]


export {projectinfo};