// Comment
export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: PostData) => void;
}
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}
