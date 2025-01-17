interface PostSignInType {
  email: string;
  password: string;
}

interface PostSignUpType {
  user_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface PostVerifyOTPType {
  otp: number;
  email: string;
}

export type { PostSignInType, PostSignUpType, PostVerifyOTPType };
