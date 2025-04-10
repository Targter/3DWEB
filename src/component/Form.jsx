import { easeIn, motion } from "framer-motion";

const Form = ({ changebackground }) => {
  const arrimage = [
    {
      path: "public/moving1.png",
      positionX: [-200, 1700],
      positionY: [-100, 200],
    },
    {
      path: "public/moving2.png",
      positionX: [1700, -500],
      positionY: [-100, 200],
    },
    {
      path: "public/moving3.png",
      positionY: [800, 0],
      positionX: [-100, 1500],
    },
    {
      path: "public/moving4.jpg",
      positionY: [1000, 0],
      positionX: [1200, -1000],
    },
  ];
  return (
    <>
      <motion.div
        className="formcontainer"
        style={{
          backgroundColor: changebackground === true ? "black" : "white",
        }}
      >
        {arrimage.map((image) => (
          <motion.div
            className="formcoinbox"
            animate={{ x: image.positionX, y: image.positionY }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "ease",
            }}
          >
            <motion.img src={image.path} />
          </motion.div>
        ))}
        <motion.div
          class="container"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h2>Check eligibility</h2>
          <form>
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Email Address:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your e-mailAddress"
                  required
                />
              </div>
              <div class="form-group">
                <label for="phone">Enter required Amount:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter required amount"
                  required
                />
              </div>
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <select id="gender" name="gender" required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button className="formbtn" type="submit">
              Submit
            </button>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Form;
