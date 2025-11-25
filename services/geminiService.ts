
import { GoogleGenAI, Type } from "@google/genai";
import type { FilterCriteria, Scheme } from '../types';

// FIX: Initialize GoogleGenAI client directly with process.env.API_KEY as per coding guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSchemes(filters: FilterCriteria): Promise<Scheme[]> {
  const prompt = `
    You are a helpful assistant that provides information about fictional Indian government schemes. 
    Based on the following eligibility criteria, generate a list of 5 relevant schemes.

    Eligibility Criteria:
    - Target Gender: ${filters.gender === 'Any' ? 'All Genders' : filters.gender}
    - Target Caste: ${filters.caste === 'Any' ? 'All Castes' : filters.caste}
    - Target State: ${filters.state}
    - Applicant's Age: ${filters.age} years

    For each scheme, provide a name, a concise description, detailed eligibility criteria (gender, caste, age range, state), a summary of benefits, and instructions on how to apply.
    Ensure the schemes are creative and plausible for the given criteria.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING, description: 'A unique identifier for the scheme, e.g., scheme-123' },
              name: { type: Type.STRING, description: 'The official name of the scheme.' },
              description: { type: Type.STRING, description: 'A concise, one-paragraph description of the scheme.' },
              eligibility: {
                type: Type.OBJECT,
                properties: {
                  gender: { type: Type.ARRAY, items: { type: Type.STRING } },
                  caste: { type: Type.ARRAY, items: { type: Type.STRING } },
                  minAge: { type: Type.INTEGER },
                  maxAge: { type: Type.INTEGER },
                  state: { type: Type.STRING },
                },
                required: ['gender', 'caste', 'minAge', 'maxAge', 'state'],
              },
              benefits: { type: Type.STRING, description: 'A short summary of the benefits provided.' },
              howToApply: { type: Type.STRING, description: 'Brief instructions on how to apply for the scheme.' },
            },
            required: ['id', 'name', 'description', 'eligibility', 'benefits', 'howToApply'],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
      console.error("Gemini API returned an empty response.");
      return [];
    }
    
    return JSON.parse(jsonText);

  } catch (error) {
    console.error("Error fetching schemes from Gemini API:", error);
    throw new Error("Failed to generate schemes. Please check the API configuration and prompt.");
  }
}
