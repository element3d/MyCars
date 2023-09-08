import { LOGIN_QUERY } from "@/components/dependencies/constants";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../../axiosInstance";

const login = async ({ username, password }) => {
  try {
    const response = axiosInstance.post(LOGIN_QUERY, {
      username,
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const useLoginMutation = (props) => {
  return useMutation(login, { ...props });
};
