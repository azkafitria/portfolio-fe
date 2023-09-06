import { useState, useEffect } from "react";

const parseProfile = (mdContent) => {
  const profile = {
    siteName: "",
    headerName: "",
    headerRole: "",
    headerDesc: "",
    headerMoreDesc: "",
    about: "",
    skill: [],
    contact: "",
    linkedin: "",
    github: "",
    email: "",
    logo: "",
  };

  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const section = line.substr(3).trim();

      switch (section) {
        case "Header":
          profile.headerName = lines[++i].substr(2).trim();
          profile.headerRole = lines[++i].substr(2).trim();
          profile.headerDesc = lines[++i].substr(2).trim();
          profile.headerMoreDesc = lines[++i].substr(2).trim();
          break;
        case "About":
          profile.about = lines[++i].trim();
          break;
        case "Skill":
          // profile.skill = lines[++i].trim();
          while (lines[++i] && lines[i].startsWith("- ")) {
            const imageLine = lines[i];
            const image = imageLine.match(/!\[(.*)\]\((.*)\)/)[2];
            profile.skill.push(image);
            // const badgeLine = lines[i].substr(4).split("[");
            // const badgeName = badgeLine[0].trim();
            // const badgeColor = badgeLine[1].split("]")[0].trim();
            // badges.push({ text: badgeName, colorScheme: badgeColor });
          }
    
          break;
        case "Contact":
          profile.contact = lines[++i].trim();
          const contactLinks = ["Name", "Address", "LinkedIn", "GitHub", "Email", "Phone"];
          for (const link of contactLinks) {
            const linkLine = lines[++i].substr(2).trim();
            if (linkLine.startsWith(link)) {
              profile[link.toLowerCase()] = linkLine.split(": ")[1].trim();
            }
          }
          break;
        case "Logo":
          profile.logo = lines[++i].substr(2).trim();
          break;
        default:
          // do nothing
          break;
      }
    }
  }

  return profile;
};

const ProfileArray = () => {
  const [profile, setProfile] = useState({
    siteName: "",
    headerName: "",
    headerRole: "",
    headerDesc: "",
    headerMoreDesc: "",
    about: "",
    skill: [],
    contact: "",
    linkedin: "",
    github: "",
    email: "",
    logo: "",
  });

  useEffect(() => {
    fetch("/content/Profile.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setProfile(parseProfile(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return profile;
};

export default ProfileArray;
