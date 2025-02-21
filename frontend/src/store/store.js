import { create } from "zustand";
let url = "http://localhost:8080/";
export let useStore = create(function (set, get) {
  return {
    isLoggedIn: false,
    user: null,
    isAuthenticated: false,
    email: "",
    signUp: async function ({ email, password, userName }) {
      try {
        let data = await fetch(url + "signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password, userName }),
        });
        let response = await data.json();
        if (!response.success) {
          throw new Error(response.message);
        }
        return { success: true, message: response.message };
      } catch (error) {
        console.log("error from signUp");
        return { success: false, message: error.message };
      }
    },
    signIn: async function ({ email, password }) {
      try {
        let data = await fetch(url + "signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        });
        let response = await data.json();
        set((state) => ({ email }));
        if (!response.success) {
          throw new Error(response.message);
        }
        return { success: true, message: response.message };
      } catch (error) {
        console.log("error from signin");
        return { success: false, message: error.message };
      }
    },
    verifyEmail: async function ({ email, token }) {
      try {
        let data = await fetch(url + "verify-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, token }),
        });
        let response = await data.json();
        if (!response.success) {
          throw new Error(response.message);
        }
        return {
          success: true,
          message: response.message,
          user: response.user,
        };
      } catch (error) {
        console.log("error from verify-email");

        return { success: false, message: error.message };
      }
    },
    authenticateUser: async function ({ token, email }) {
      try {
        let data = await fetch(url + "authenticate-User", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, token }),
        });
        let response = await data.json();
        if (!response.success) {
          throw new Error(response.message);
        }
        return {
          success: true,
          message: response.message,
          user: response.user,
        };
      } catch (error) {
        console.log("error from authenticate-user");
        return { success: false, message: error.message };
      }
    },
    checkAuth: async function () {
      try {
        let data = await fetch(url + "authcheck", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        let response = await data.json();
        if (!response.success) {
          throw new Error(response.message);
        }
        return {
          success: true,
          message: response.message,
          user: response.user,
        };
      } catch (error) {
        console.log("error from authenticate-check");
        return { success: false, message: error.message };
      }
    },
    logOut: async function () {
      try {
        let data = await fetch(url + "logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        let response = await data.json();
        if (!response.success) {
          throw new Error(response.message);
        }
        set((state) => ({
          isLoggedIn: false,
          isAuthenticated: false,
          email: "",
        }));
        return {
          success: true,
          message: response.message,
        };
      } catch (error) {
        console.log("error from logout");
        return { success: false, message: error.message };
      }
    },
    forgotPassword: async function ({ email }) {
      try {
        let data = await fetch(url + "forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email }),
        });
        let response = await data.json();
        if (!response.success) {
          throw new Error(response.message);
        }

        return {
          success: true,
          message: response.message,
        };
      } catch (error) {
        console.log("error from forgot-password");
        console.log(error);
        return { success: false, message: error.message };
      }
    },
    resetPassword: async function ({ email, token, password }) {
      try {
        let data = await fetch(url + "reset-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email,
            token,
            newPassword: password,
          }),
        });
        let response = await data.json();
        if (!response.success) {
          throw new Error(response.message);
        }
        set((state) => ({
          isLoggedIn: false,
          isAuthenticated: false,
          email: "",
        }));

        return {
          success: true,
          message: response.message,
        };
      } catch (error) {
        console.log("error from reset-password");
        console.log(error);
        return { success: false, message: error.message };
      }
    },
  };
});
