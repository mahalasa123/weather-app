const required = (value) => (value ? undefined : 'User input required');

const mustBeTextOnly = (value) =>
  value.match(/^[A-Za-z\s]*$/) ? undefined : 'Location must be text only';
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

export { required, mustBeTextOnly, composeValidators };
