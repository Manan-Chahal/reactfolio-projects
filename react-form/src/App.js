import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "india",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    console.log(`Updated "${name}" to:`, type === "checkbox" ? checked : value);
  }

  function submitHandler(event) {
    event.preventDefault();
    
    console.log("📌 Saved Form Data:", JSON.stringify(formData, null, 2));

    alert("✅ Saved Successfully! Check the console for data.");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "india",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications: "",
    });
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <h2 className="text-lg font-semibold">User Registration Form</h2>
      <form className="space-y-4" onSubmit={submitHandler}>
        {/* First Name */}
        <label className="block text-sm font-medium text-gray-700">
          First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
            placeholder="John"
            className="w-full border rounded-md p-2 mt-1"
          />
        </label>

        {/* Last Name */}
        <label className="block text-sm font-medium text-gray-700">
          Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
            placeholder="Doe"
            className="w-full border rounded-md p-2 mt-1"
          />
        </label>

        {/* Email */}
        <label className="block text-sm font-medium text-gray-700">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="john.doe@example.com"
            className="w-full border rounded-md p-2 mt-1"
          />
        </label>

        {/* Country */}
        <label className="block text-sm font-medium text-gray-700">
          Country
          <select
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full border rounded-md p-2 mt-1"
          >
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="belgium">Belgium</option>
            <option value="france">France</option>
            <option value="singapore">Singapore</option>
          </select>
        </label>

        {/* Street Address */}
        <label className="block text-sm font-medium text-gray-700">
          Street Address
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={changeHandler}
            placeholder="123 Main Street"
            className="w-full border rounded-md p-2 mt-1"
          />
        </label>

        {/* City */}
        <label className="block text-sm font-medium text-gray-700">
          City
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={changeHandler}
            placeholder="New York"
            className="w-full border rounded-md p-2 mt-1"
          />
        </label>

        {/* State */}
        <label className="block text-sm font-medium text-gray-700">
          State / Province
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={changeHandler}
            placeholder="New York"
            className="w-full border rounded-md p-2 mt-1"
          />
        </label>

        {/* ZIP / Postal Code */}
        <label className="block text-sm font-medium text-gray-700">
          ZIP / Postal Code
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={changeHandler}
            placeholder="10001"
            className="w-full border rounded-md p-2 mt-1"
          />
        </label>

        {/* Email Notifications */}
        <fieldset>
          <legend className="text-sm font-semibold">Email Notifications</legend>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              onChange={changeHandler}
              className="mr-2"
            />
            <label>Comments</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
            <label>Candidates</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <label>Offers</label>
          </div>
        </fieldset>

        {/* Push Notifications */}
        <fieldset>
          <legend className="text-sm font-semibold">Push Notifications</legend>
          <div className="flex items-center">
            <input
              type="radio"
              name="pushNotifications"
              value="Everything"
              checked={formData.pushNotifications === "Everything"}
              onChange={changeHandler}
              className="mr-2"
            />
            <label>Everything</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="pushNotifications"
              value="Same as email"
              checked={formData.pushNotifications === "Same as email"}
              onChange={changeHandler}
              className="mr-2"
            />
            <label>Same as email</label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="pushNotifications"
              value="No push notifications"
              checked={formData.pushNotifications === "No push notifications"}
              onChange={changeHandler}
              className="mr-2"
            />
            <label>No push notifications</label>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Save
        </button>
      </form>
    </div>
  );
};

export default App;
