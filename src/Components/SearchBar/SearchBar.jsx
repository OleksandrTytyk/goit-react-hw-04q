import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values) => {
    onSearch(values.query);
  };
  return (
    <div>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          ></Field>
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
