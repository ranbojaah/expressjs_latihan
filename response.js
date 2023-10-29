const response = (statusCode, data, message, res) => {
  res.status(statusCode).json([
    {
      payload: {
        message,
        data,
      },
      metaData: {
        prev: "",
        next: "",
        current: "",
      },
    },
  ]);
};

module.exports = response;
