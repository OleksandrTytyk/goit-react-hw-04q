import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      return toast.error("Enter a search query");
    }

    onSearch(values.query);
  };
  return (
    <div>
      <Toaster position="top-center" />
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
