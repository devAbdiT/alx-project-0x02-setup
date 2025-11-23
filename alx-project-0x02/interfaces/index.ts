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
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
