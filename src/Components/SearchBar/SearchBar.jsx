import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      return toast.error("Enter a search query");
    }

    onSearch(values.query);
  };
  return (
    <header className={css.header}>
      <div>
        <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
          <Form className={css.searchForm}>
            <Field
              className={css.searchInput}
              type="text"
              name="query"
              placeholder="Search images and photos"
              autoComplete="off"
              autoFocus
            ></Field>
            <button type="submit" className={css.searchBtn}>
              <FaSearch />
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
};

export default SearchBar;
