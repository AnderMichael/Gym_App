import React from "react";
import { TextInput } from "flowbite-react";
import Button from "@/components/Button";

const LoginForm = () => {
  return (
    <div className="flex bg-black p-10 rounded-md">
      <form className="flex flex-col space-y-4 md:space-y-6" action="#">
        <div>
          <div className="mb-2 block">
            <label className="text-white">Email</label>
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <label className="text-white">Password</label>
          </div>
          <TextInput
            id="password1"
            placeholder="°°°°°°°°°"
            required
            type="password"
          />
        </div>
        <Button title="Sign up"/>
      </form>
    </div>
  );
};

export default LoginForm;
