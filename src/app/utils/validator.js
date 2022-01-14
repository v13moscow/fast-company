export function validator(data, config) {
  const errors = {};
  const validate = (validateMethod, data, config) => {
    let statusValidate;
    switch (validateMethod) {
    case "isRequired":
      statusValidate = data.trim() === "";
      break;
    case "isEmail": {
      const emailRegExp = /^\S+@\S+\.\S+$/g;
      statusValidate = !emailRegExp.test(data);
      break;
    }
    case "isCapitalSimvol": {
      const capitalRegExp = /[A-Z]+/g;
      statusValidate = !capitalRegExp.test(data);
      break;
    }
    case "isContainDijit": {
      const dijitRegExp = /\d+/g;
      statusValidate = !dijitRegExp.test(data);
      break;
    }
    case "min": {
      statusValidate = data.length < config.value;
      break;
    }
    }
    if (statusValidate) return config.massage;
  };
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
};
