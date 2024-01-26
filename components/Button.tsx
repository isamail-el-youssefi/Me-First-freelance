import Image from "next/image";


type ButtonProps = {
    title: string;
    icon?: string;
    variant: string;
}
const Button = ({ title, variant} : ButtonProps) => {
  return (
    <button className={`flexCenter gap-2 border rounded-full ${variant}`}
  
    >
        <label className="whitespace-nowrap cursor-pointer bold-16">{title}</label>
    </button>
  )
}

export default Button