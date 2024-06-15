import {
  PostSignInType,
  PostSignUpType,
  PostVerifyOTPType,
} from "@/interfaces/auth";
import fetcher from "@/lib/fetcher";
// import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { toast } from "sonner";
import { create } from "zustand";
import Cookies from "js-cookie";

type ConfettiStore = {
  isLoading: boolean;
  onOpen: () => void;
  onClose: () => void;
  postSignIn: (body: PostSignInType) => Promise<any>;
  postSignUp: (body: PostSignUpType) => Promise<any>;
  postVerifyOTP: (body: PostVerifyOTPType) => Promise<any>;
};

export const useAuth = create<ConfettiStore>((set) => ({
  isLoading: false,
  onOpen: () => set({ isLoading: true }),
  onClose: () => set({ isLoading: false }),
  postSignIn: async (body) => {
    // const { toast } = useToast();

    set({ isLoading: true });
    try {
      const result = await fetcher.post("/users/sign-in", body);
      // toast.success("Sign Up Success");
      console.log({ result });
      set({ isLoading: false });
      Cookies.set("token", result.data.acces_token);

      //   toast({ title: "Login Berhasil" });
      return Promise.resolve(result);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Sign Up Error");

      set({ isLoading: false });
      return Promise.reject(error);
    }
  },
  postSignUp: async (body): Promise<any> => {
    // const router = useRouter();
    set({ isLoading: true });
    try {
      // toast.error("Error");
      const result = await fetcher.post("/users/sign-up", body);
      set({ isLoading: false });
      toast.success("Sign Up Success");
      return Promise.resolve(result);
    } catch (error: any) {
      set({ isLoading: false });
      console.log({ error });
      toast.error(error.response?.data?.message || "Sign Up Error");

      // toast.error("Error");
      return Promise.reject(error);
    }
  },
  postVerifyOTP: async (body): Promise<any> => {
    // const router = useRouter();
    set({ isLoading: true });
    try {
      // toast.error("Error");
      const result = await fetcher.post("/users/otp-verification", body);
      set({ isLoading: false });
      toast.success("Verify OTP Success");
      return Promise.resolve(result);
    } catch (error: any) {
      set({ isLoading: false });
      console.log({ error });
      toast.error(error.response?.data?.message || "Verify OTP Error");

      // toast.error("Error");
      return Promise.reject(error);
    }
  },
}));
