exports.constants = {
  handleErr: (err, res) => {

    if(err.isArray) {
      const errObj = {};

      err.errors.map((error) => {
        errObj[error.path] = error.message;
      });

      return res.status(400).send(errObj);
    }
}
}
