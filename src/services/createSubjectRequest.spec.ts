import { describe, expect, it, vi } from "vitest";
import { Subject } from "../types/subject";
import CreateSubjectRequest from "../services/createSubjectRequest";

describe("Request for creating a subject", () => {
  it("Should make a request with correct parameters", async () => {
    const subject: Subject = {
      name: "Introdução à estatística",
      quarter: 2,
      state: "cursando",
      horary: ["Quarta-feira"],
      location: "Sala A5",
      syllabus: "Introdução à estatística",
      teacher: "Não Lembro",
    };

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockImplementationOnce(
      () => {
        return Promise.resolve({
          json: () => Promise.resolve(subject),
        } as Response);
      },
    );

    const response = await CreateSubjectRequest(subject);

    expect(fetchSpy).toBeCalled();
    expect(fetchSpy).toHaveBeenCalledWith(
      "http://localhost:3000/subjects",
      {
        method: "POST",
        body: JSON.stringify(subject),
      },
    );
    expect(response).toStrictEqual(subject);
  });
  it("Should return an error message when request failed", async () => {
    const subject: Subject = {
      name: "Introdução à estatística",
      quarter: 2,
      state: "cursando",
      horary: ["Quarta-feira"],
      location: "Sala A5",
      syllabus: "Introdução à estatística",
      teacher: "Não Lembro",
    };

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockRejectedValue(
      new Error("Internal server error"),
    );

    const response = await CreateSubjectRequest(subject);

    expect(fetchSpy).toBeCalled();
    expect(response).toBe("Internal server error");
  });
});
