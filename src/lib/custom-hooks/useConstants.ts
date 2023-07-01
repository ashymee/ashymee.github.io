const useConstants = () => {
  const URL = import.meta.env.VITE_URL;

  const json_certification = `${URL}/data/certification.json`;
  const json_contact = `${URL}/data/contacts.json`;
  const json_education = `${URL}/data/education.json`;
  const json_experiences = `${URL}/data/experiences.json`;
  const json_projects = `${URL}/data/projects.json`;

  return {
    URL,
    json_certification,
    json_contact,
    json_education,
    json_experiences,
    json_projects,
  };
};

export default useConstants;
