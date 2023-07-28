import { describe, test, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login/Login";
import { authService } from "../services/user.service";

describe("Login component", () => {
    beforeEach(() => {
        render(<Login />);
    });

    test("updates form data when input values change", () => {
        const emailInput = screen.getByLabelText("Email address") as HTMLInputElement;
        const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });

        expect(emailInput.value).toBe("test@example.com");
        expect(passwordInput.value).toBe("testpassword");
    });

    test("calls authService.login when form is submitted", async () => {
        const emailInput = screen.getByLabelText("Email address") as HTMLInputElement;
        const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;
        const submitButton = screen.getByRole("button", { name: "Iniciar sesión" });

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "testpassword" } });

        const mockResponse = {
            data: {
                access_token: "mocked-token",
                name: "John Doe",
                wallet_balance: 1000,
            },
        };
        authService.login = vitest.fn().mockResolvedValue(mockResponse);

        fireEvent.click(submitButton);

        expect(authService.login).toHaveBeenCalledWith({
            email: "test@example.com",
            password: "testpassword",
        });

        // Simulate the response from authService.login and check the localStorage
        expect(localStorage.getItem("name")).toBe("John Doe");
    });
});
