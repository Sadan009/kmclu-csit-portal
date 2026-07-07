import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-700 focus-visible:ring-primary-300",
  accent:
    "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent-light",
  outline:
    "border border-primary-200 text-primary bg-white hover:bg-primary-50 focus-visible:ring-primary-200",
  ghost:
    "text-primary hover:bg-primary-50 focus-visible:ring-primary-200",
};

const sizes = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-6 py-3",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  icon: Icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={16} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
