import { Component, createSignal } from "solid-js";

const Contact: Component<{}> = (props) => {
  const [fullname, setFullname] = createSignal("");
  const [email, setEmail] = createSignal("");
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div class="px-44">
      <div class="mt-12">
        <div class="text-center">
          <h1 class="text-6xl text-[#98A2AE] font-bold">Contact Us</h1>
          <p>We Would Be Happy To Assist You</p>
        </div>
        <div class="mt-12 flex justify-center">
          <div class="bg-base-200 rounded-md w-[750px] p-12">
            <form onSubmit={handleSubmit}>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <input
                    placeholder="Fullname"
                    class="py-3 px-3 w-full rounded-lg bg-base-100"
                    type="text"
                    id="name"
                    value={fullname()}
                    onInput={(e) => {
                      setFullname(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <input
                    placeholder="Email"
                    type="email"
                    class="py-3 px-3 bg-base-100 w-full rounded-lg"
                    id="email"
                    value={email()}
                    onInput={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <br />
              <div>
                <textarea
                  class="textarea textarea-bordered w-full h-32"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="flex justify-end mt-3">
                <button
                  type="submit"
                  class="py-2 px-16 text-center text-base-100 bg-primary rounded"
                >
                  Just send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="mt-32">
          <h1 class="text-center text-primary font-extrabold md:text-2xl w-96 m-auto">
            We Would Be Happy To Meet You And Cooperate Together
          </h1>
          <p class="mt-3 text-center  text-gray-600">
            We Are Always Available On Workday For You
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
