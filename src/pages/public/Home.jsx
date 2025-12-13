import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to TenantScore
      </h1>
      <p className="text-gray-600 mb-6">
        Smart tenant scoring, property management,
        and short-stay bookings in one platform.
      </p>

      <div className="flex justify-center gap-4">
        <Link to="/login">
          <Button text="Login" />
        </Link>
        <Link to="/signup">
          <Button text="Sign Up" variant="secondary" />
        </Link>
      </div>
    </div>
  );
}
