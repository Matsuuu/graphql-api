import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Matias Huhta",
  about: "Matias is a Web Components enthusiast actively working on framework agnostic Open Source JavaScript tooling.",
  image: {
    url: "people/matias.jpeg",
  },
  social: {
    homepage: "https://matsu.fi/",
    twitter: "matsuuu_",
    github: "Matsuuu",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/matias-huhta-b0b159106/",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Turku",
  },
  keywords: [Keyword.REACT, Keyword.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
