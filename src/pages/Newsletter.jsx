import { Form, redirect } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter"

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  const response = await axios.post(newsletterUrl, data)
  toast.success(response.data.msg)
  console.log(response)
  return redirect("/")
}

export default function Newsletter() {
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>

      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
          defaultValue="Webster"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastname" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastname"
          required
          defaultValue="Munoz"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </Form>
  )
}
