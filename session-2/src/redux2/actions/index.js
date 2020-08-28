import { ADD_SAMPLE } from "../../redux/constants/action-types";

export function addSample(payload) {
  return { type: ADD_SAMPLE, payload };
}
