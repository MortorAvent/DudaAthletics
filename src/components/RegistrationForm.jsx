import React from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const password = watch("password");

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
      <h2 style={{ textAlign: "center", color: "darkgoldenrod" }}>Rejestracja</h2>

      <label htmlFor="username">Nazwa Użytkownika:</label>
      <input
        type="text"
        id="username"
        {...register("username", { required: "Nazwa użytkownika jest wymagana" })}
        placeholder="Podaj nazwę użytkownika"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: "Email jest wymagany" })}
        placeholder="Podaj email"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      <label htmlFor="password">Hasło:</label>
      <input
        type="password"
        id="password"
        {...register("password", {
          required: "Hasło jest wymagane",
          minLength: { value: 6, message: "Hasło musi mieć co najmniej 6 znaków" },
        })}
        placeholder="Podaj hasło"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />
      {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

      <label htmlFor="confirmPassword">Potwierdź hasło:</label>
      <input
        type="password"
        id="confirmPassword"
        {...register("confirmPassword", {
          validate: (value) =>
            value === password || "Hasła muszą być takie same",
        })}
        placeholder="Potwierdź hasło"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />
      {errors.confirmPassword && (
        <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
      )}

      <button
        type="submit"
        style={{
          backgroundColor: "darkgoldenrod",
          color: "black",
          border: "2px solid black",
          fontWeight: "bold",
          padding: "10px",
          width: "100%",
        }}
      >
        Zarejestruj się
      </button>
    </form>
  );
};

export default RegistrationForm;

