export default function Form() {
  return (
    <>
      <form>
        <fieldset>
          <legend>Register</legend>
          <input
            required
            type="text"
            name="personal-info"
            id="first-name"
            placeholder="first name"
          />
          <input
            required
            type="text"
            name="personal-info"
            id="first-name"
            placeholder="last name"
          />
          <button type="button">Submit</button>
        </fieldset>
      </form>
    </>
  );
}
