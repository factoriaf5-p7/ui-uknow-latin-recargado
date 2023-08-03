// import { describe, test, expect, beforeEach } from "vitest";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import Register from "../components/Register/Register";
// import { registerService } from "../services/user.service";

// interface CustomStorage {
//   [key: string]: string | null;
// }

// let localStorageMock: CustomStorage = {};

// globalThis.localStorage = {
//   getItem: (key: string) => localStorageMock[key] || null,
//   setItem: (key: string, value: string) => {
//     localStorageMock[key] = value;
//   },
//   removeItem: (key: string) => {
//     delete localStorageMock[key];
//   },
// };

// describe("Register component", () => {
//   beforeEach(() => {
//     render(
//       <BrowserRouter>
//         <Register />
//       </BrowserRouter>
//     );
//   });

//   afterEach(() => {
//     // Limpia el localStorageMock después de cada prueba
//     localStorageMock = {};
//   });

//   test("renders the form correctly", () => {
//     const nameInput = screen.getByPlaceholderText("Your name") as HTMLInputElement;
//     const emailInput = screen.getByPlaceholderText("name@example.com") as HTMLInputElement;
//     const passwordInput = screen.getByPlaceholderText("password") as HTMLInputElement;
//     const submitButton = screen.getByRole("button", { name: "Join Now" });

//     expect(nameInput).toBeDefined();
//     expect(emailInput).toBeDefined();
//     expect(passwordInput).toBeDefined();
//     expect(submitButton).toBeDefined();
//   });

//   test("displays an error message when registerService.signup throws an error", async () => {
//     // Sobrescribe registerService.signup con una función que devuelve una promesa rechazada
//     registerService.signup = async () => {
//       throw new Error("Some error");
//     };

//     const submitButton = screen.getByRole("button", { name: "Join Now" });

//     fireEvent.click(submitButton);

//     // Espera a que se muestre el mensaje de error
//     await screen.findByText("Email or username already exists");

//     // Verifica que localStorage no tenga ningún dato almacenado
//     expect(localStorageMock).toEqual({});
//   });
// });
 