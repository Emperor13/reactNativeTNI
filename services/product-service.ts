import { AxiosResponse } from "axios";
import { http } from "./http-service";

export async function findAllProduct(): Promise<AxiosResponse<any>> {
  try {
    const res = await http.get<any>(
      "https://api.codingthailand.com/api/course"
    );
    return res;
  } catch (error) {
    throw error;
  }
}

export async function findProducbyId(id: number): Promise<AxiosResponse<any>> {
  try {
    const response = await http.get<any>(
      "https://api.codingthailand.com/api/course/" + id
    );
    return response;
  } catch (error) {
    throw error;
  }
  93;
}
