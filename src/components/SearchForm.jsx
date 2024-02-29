import Wrapper from "../assets/wrappers/searchForm"
import { Form, useNavigation } from "react-router-dom"

export default function SearchForm({ searchTerm }) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  )
}
