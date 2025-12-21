import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function SubmitBtn() {
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl font-medium outline-none transition-all focus:scale-105 hover:scale-105 hover:shadow-lg active:scale-100 disabled:scale-100 disabled:opacity-65"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send Message{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}

