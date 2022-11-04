import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { SearchHeader, Forma, Button, Input } from './PixabaySearch.styled';

export const PixabaySearch = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <SearchHeader>
          <Forma>
            <Input name="query" placeholder="Type query to find" />

            <Button type="submit" disabled={isSubmitting}></Button>
          </Forma>
        </SearchHeader>
      )}
    </Formik>
  );
};

PixabaySearch.propTypes = { onSubmit: PropTypes.func.isRequired };
