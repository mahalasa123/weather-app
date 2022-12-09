import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { required, mustBeTextOnly, composeValidators } from '../../validators';
import { Input, ErrorMsg, Button } from './styles';

const SearchInput = ({ onSearch }) => {
  const onSubmit = (value) => {
    onSearch(value.location);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="location"
              id="location"
              value={values.location}
              validate={composeValidators(required, mustBeTextOnly)}
            >
              {({ input, meta }) => (
                <>
                  <Input
                    {...input}
                    id="location"
                    type="text"
                    placeholder="Search for location"
                  />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <ErrorMsg tabIndex="0">
                      {meta.error || meta.submitError}
                    </ErrorMsg>
                  )}
                </>
              )}
            </Field>

            <Button type="submit">Search</Button>
          </form>
        )}
      />
    </>
  );
};

SearchInput.propTypes = {
  weatherData: PropTypes.func,
};

export default SearchInput;
