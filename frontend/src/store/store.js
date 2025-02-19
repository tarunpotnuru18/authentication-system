import { create } from "zustand";
let url = "http://localhost:8080/";
export let useStore = create(function (set) {
  return {
    isLoggedin: false,
    user: null,
    isAuthenticated: false,
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
    authenticateUser: async function ({ email, token }) {
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
        console.log("error from authenticate-check");
        return { success: false, message: error.message };
      }
    },
  };
});
