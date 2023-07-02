const useConstants = () => {
  const URL = import.meta.env.VITE_URL;
  const mode = import.meta.env.MODE;

  const isDev = mode === "development";

  const cert = "/data/certification.json";
  const contact = "/data/contacts.json";
  const edu = "/data/education.json";
  const exp = "/data/experiences.json";
  const proj = "/data/projects.json";
  const bio = "/data/short-bio.json";

  const json_certification = isDev ? `${URL}/${cert}` : cert;
  const json_contact = isDev ? `${URL}/${contact}` : contact;
  const json_education = isDev ? `${URL}/${edu}` : edu;
  const json_experiences = isDev ? `${URL}/${exp}` : exp;
  const json_projects = isDev ? `${URL}/${proj}` : proj;
  const json_bio = isDev ? `${URL}/${bio}` : bio;

  return {
    URL,
    json_certification,
    json_contact,
    json_education,
    json_experiences,
    json_projects,
    json_bio,
  };
};

export default useConstants;
