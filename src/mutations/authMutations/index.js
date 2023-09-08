import { useMutation } from "@tanstack/react-query";

const { default: axiosInstance } = require("../../../axiosInstance");

const LOGIN_QUERY = "/signin";

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
