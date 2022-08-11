import { getTextsFirebase } from "src/services/textsService";

export async function getTexts() {
  const responseGetTexts = await getTextsFirebase();
  return responseGetTexts;
}
