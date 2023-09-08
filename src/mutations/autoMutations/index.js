import { POST_CAR } from "@/components/dependencies/constants";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../axiosInstance";

const postCar = async (carInfo) => {
  try {
    const response = axiosInstance.post(POST_CAR, carInfo);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const usePostCarMutation = (props) => {
  return useMutation(postCar, { ...props });
};
