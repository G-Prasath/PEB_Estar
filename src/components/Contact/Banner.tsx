import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  phone: string;
  service: string;
}

const Banner = () => {
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Partial<FormData> = {};

    if (!formData.username.trim()) {
      newErrors.username = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select an option";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        setSubmitting(true);
        const response = await fetch(
          "https://email-server-aoiw.onrender.com/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          setFormData({
            username: "",
            email: "",
            phone: "",
            service: "",
          });
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="w-full aspect-video">
      <img src="/banner-3.jpeg" alt="" className="w-full aspect-video" />

      <div className="bg-primary py-10">
        <h2 className="uppercase text-center text-[30px] font-[600] mb-3">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between max-h-screen bg-teal-500 bg-secondary py-10 lg:px-10">
          <form
            onSubmit={handleSubmit}
            className="bg-teal-600 p-6 rounded-lg w-full md:w-1/2 lg:w-3/6 space-y-4 max-md:order-2 flex flex-col justify-center items-center"
          >
            <input
              id="fName"
              type="text"
              placeholder="Name"
              className="w-full py-3 px-5 rounded-lg bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary"
              name="username"
              autoComplete="off"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="text-white my-2">{errors.username}</p>}

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full  py-3 px-5 rounded-lg bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-white my-2">{errors.email}</p>}

            <input
              type="text"
              placeholder="Contact Number"
              className="w-full  py-3 px-5 rounded-lg bg-teal-700 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary"
              name="phone"
              autoComplete="off"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-white my-2">{errors.phone}</p>}

            
              <select
                id="select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  borderRadius: "0.50rem",
                  width: "100%",
                  padding: "9px 2.5rem",
                }}
                className="bg-primary outline-none"
              >
                <option value="">Select Service*</option>
                <option value="Pre Engineered Buildings">
                  Pre Engineered Buildings
                </option>
                <option value="Conventional Building">
                  Conventional Building
                </option>
              </select>
            {errors.service && <p className="text-white my-2">{errors.service}</p>}

            <button
              type="submit"
              className="max-w-max py-3 px-10 rounded-full bg-teal-800 text-white font-[600] hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 bg-primary flex items-center"
               disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Now"}
            </button>
          </form>

          <div className="md:block lg:w-3/6 py-4 max-md:order-1 max-sm:px-5 border border-white">
            <img
              src="https://placehold.co/800x400"
              alt="Customer Service"
              className="rounded-lg object-cover w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
