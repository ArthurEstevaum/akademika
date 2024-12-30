import { Subject } from "../types/subject.ts";

export default async function CreateSubjectRequest(subject: Subject) {
  const endpoint = "http://localhost:3000/subjects";
  const options = {
    method: "POST",
    body: JSON.stringify(subject),
  };

  try {
    const response = await fetch(endpoint, options);
    return response.json();
  } catch (error) {
    return (error as Error).message;
  }
}
