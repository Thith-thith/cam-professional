import { Component, createSignal } from "solid-js";

const Contact: Component<{}> = (props) => {
  const [fullname, setFullname] = createSignal("");
  const [email, setEmail] = createSignal("");
  const handleSubmit = (event: Event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div class="md:mx-44 mx-3">
      <div class="mt-12">
        <div class="text-center">
          <h1 class="text-6xl text-[#98A2AE] font-bold">Contact Us</h1>
          <p>We Would Be Happy To Assist You</p>
        </div>
        <div class="mt-12 flex justify-center">
          <div class="bg-base-200 rounded-md md:w-[750px] md:p-12 p-3">
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
          <h1 class="text-center text-primary font-extrabold md:text-2xl md:w-auto w-96">
            We Would Be Happy To Meet You And Cooperate Together
          </h1>
          <p class="mt-3 text-center  text-gray-600">
            We Are Always Available On Workday For You
          </p>
        </div>
        <div class="mt-12">
          <div class="grid md:grid-cols-2 md:px-72 gap-4">
            <div class="bg-base-200 p-10">
              <div class="flex justify-center">
                <img class="w-12" src="/images/24-7.png" />
              </div>
              <div class="text-center mt-5 font-bold">
                <p>Monday - Friday</p>
                <p class="text-blue-900">(Public Holiday We Don't Work)</p>
              </div>
            </div>
            <div class="bg-base-200 p-10">
              <div class="flex justify-center">
                <img class="w-12" src="/images/extra-time.png" />
              </div>
              <div class="text-center mt-5 font-bold">
                <p>Monday - Friday</p>
                <p class="text-blue-900">(Public Holiday We Don't Work)</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-32">
          <h1 class="text-center text-primary font-extrabold md:text-2xl w-96 m-auto">
            Let's Meet
          </h1>
          <p class="mt-3 text-center  text-gray-600">
            Our Connections Are Below
          </p>
          <div class="mt-12">
            <div class="grid md:grid-cols-3 gap-4 md:px-44">
              <div class="p-8">
                <div>
                  <div class="flex justify-center">
                    <img class="w-14" src="/images/map.png" />
                  </div>
                  <p class="text-center mt-5 text-sm">
                    #18C1, Tuek Thlar, Sen Sok, Phnom Penh Cambodia.​​
                  </p>
                </div>
              </div>
              <div class="p-8">
                <div>
                  <div class="flex justify-center">
                    <img class="w-14" src="/images/phone.png" />
                  </div>
                  <p class="text-center mt-5 text-sm">023 884 789</p>
                </div>
              </div>
              <div class="p-8">
                <div>
                  <div class="flex justify-center">
                    <img class="w-14" src="/images/gmail.png" />
                  </div>
                  <p class="text-center mt-5 text-sm">
                    mailto:info@camprotec.com.kh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
