const ErrorInterceptor = () => {
  // axios.interceptors.response.use(
  //   response => {
  //     if (response?.status === HttpStatusCodeEnum.BAD_REQUEST) {
  //       console.log(response.status);
  //     }
  //     console.log(response);
  //     return response;
  //   },
  //   error => Promise.reject(error)
  // );
};

export default ErrorInterceptor;
