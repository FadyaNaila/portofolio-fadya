import Navbar from "./Navbar";

interface WrapperProps {
    children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-[90px]">
                {children}
            </div>
        </div>
    );
}
