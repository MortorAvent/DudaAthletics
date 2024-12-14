import React from "react";
import { useForm } from "react-hook-form";

const ProfileForm = ({ defaultEmail = "test@example.com" }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: defaultEmail,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        border: "2px solid black",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "white",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center", color: "darkgoldenrod", textStroke: '1px black', WebkitTextStroke: '1px black',}}>Profil</h2>

      <label htmlFor="username">Nazwa użytkownika:</label>
      <input
        type="text"
        id="username"
        {...register("username", { required: "Nazwa użytkownika jest wymagana" })}
        placeholder="Podaj nazwę użytkownika"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />

      <label htmlFor="photoURL">URL zdjęcia profilowego:</label>
      <input
        type="text"
        id="photoURL"
        {...register("photoURL", {
          required: "URL zdjęcia jest wymagany",
          pattern: {
            value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/,
            message: "Podaj poprawny URL zdjęcia",
          },
        })}
        placeholder="Podaj URL zdjęcia"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />

      <label htmlFor="email">Email (nieaktywny):</label>
      <input
        type="email"
        id="email"
        {...register("email")}
        disabled
        style={{
          display: "block",
          width: "100%",
          margin: "10px 0",
          backgroundColor: "#f0f0f0",
        }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: 'darkgoldenrod',
          color: 'black',
          border: '2px solid black',
          fontWeight: 'bold',
          padding: '10px 20px',
          width: '100%',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'gold';
          e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'darkgoldenrod';
          e.target.style.boxShadow = 'none';
        }}
      >
        Zapisz zmiany
      </button>
    </form>
  );
};

export default ProfileForm;
