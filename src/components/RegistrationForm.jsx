import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dane rejestracyjne:", data);
    
    navigate("/"); 
  };

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
      <h2 style={{ textAlign: "center", color: "darkgoldenrod",textStroke: '1px black', WebkitTextStroke: '1px black',}}>Rejestracja</h2>
       
      {/* Pole: Nazwa użytkownika */}
      <label htmlFor="username">Nazwa użytkownika:</label>
      <input
        type="text"
        id="username"
        {...register("username", { required: "Nazwa użytkownika jest wymagana" })}
        placeholder="Podaj nazwę użytkownika"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />
      {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}

      {/* Pole: Email */}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: "Email jest wymagany" })}
        placeholder="Podaj email"
        style={{ display: "block", width: "100%", margin: "10px 0" }}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      {/* Pole: Hasło */}
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

      {/* Pole: Potwierdź hasło */}
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

      {/* Przycisk: Zarejestruj się */}
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
        Zarejestruj się
      </button>
    </form>
  );
};

export default RegistrationForm;


