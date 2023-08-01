import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login/Login";
import { authService } from "../services/user.service";
import { BrowserRouter } from "react-router-dom";

describe("Login component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    // Restaura localStorage después de cada prueba
    localStorage.clear();
  });

  test("updates form data when input values change", () => {
    const emailInput = screen.getByLabelText("Correo electónico") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Contraseña") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("testpassword");
  });

  test("calls authService.login when form is submitted", async () => {
    const emailInput = screen.getByLabelText("Correo electónico") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("Contraseña") as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "Iniciar sesión" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    const mockResponse = {
      data: {
        access_token: "mocked-token",
        name: "Tito",
        wallet_balance: 1000,
      },
    };

    // Simular la respuesta de la función authService.login
    authService.login = vitest.fn().mockResolvedValue(mockResponse);

    fireEvent.click(submitButton);

    expect(authService.login).toHaveBeenCalledWith({
      email: "test@example.com",
      password: "testpassword",
    });

    // Simular la espera de la promesa
    await screen.findByText("Iniciar sesión");

    // Verificar que se haya almacenado correctamente el nombre en localStorage
    expect(localStorage.getItem("name")).toBe("Tito");
  });
});
