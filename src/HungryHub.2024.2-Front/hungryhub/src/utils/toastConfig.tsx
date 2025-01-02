import Toast, { BaseToast, BaseToastProps, ErrorToast } from "react-native-toast-message";

function toastConfig() {
  return {
    success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "green" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{ fontSize: 15 }}
        text2Style={{ fontSize: 13 }}
      />
    ),
    error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
      <ErrorToast
        {...props}
        style={{ borderLeftColor: "red" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{ fontSize: 15 }}
        text2Style={{ fontSize: 13 }}
      />
    ),
  };
}

export default toastConfig();