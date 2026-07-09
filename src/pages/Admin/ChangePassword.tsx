import { useState } from "react";
import { Eye, EyeOff, KeyRound } from "lucide-react";

import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

import { auth } from "../../../firebase";
import toast from "react-hot-toast";

export default function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("Please fill all fields.");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const user = auth.currentUser;

    if (!user || !user.email) {
      toast.error("No authenticated user found.");
      return;
    }

    try {
      setLoading(true);

      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword,
      );

      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);

      toast.success("Password updated successfully.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
        case "auth/invalid-credential":
          toast.error("Current password is incorrect.");
          break;

        case "auth/weak-password":
          toast.error("Password should be at least 6 characters.");
          break;

        case "auth/requires-recent-login":
          toast.error("Please log in again and try changing your password.");
          break;

        default:
          toast.error("Failed to update password.");
          console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl">
      <div className="mb-3">
        <h1 className="text-3xl font-bold text-slate-800">Change Password</h1>

        <p className="text-slate-500 mt-2">
          Update your administrator password to keep your account secure.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
            <KeyRound className="text-[#0F4C81]" />
          </div>

          <div>
            <h2 className="font-semibold text-lg">Password Information</h2>

            <p className="text-sm text-slate-500">
              Your password must contain at least 6 characters.
            </p>
          </div>
        </div>

        {/* Current Password */}

        <div className="mb-6">
          <label className="block mb-2 font-medium">Current Password</label>

          <div className="relative">
            <input
              type={showCurrent ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
              type="button"
              onClick={() => setShowCurrent(!showCurrent)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* New Password */}

        <div className="mb-6">
          <label className="block mb-2 font-medium">New Password</label>

          <div className="relative">
            <input
              type={showNew ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}

        <div className="mb-8">
          <label className="block mb-2 font-medium">Confirm Password</label>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-blue-300"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          onClick={handleUpdatePassword}
          disabled={loading}
          className="w-full rounded-xl bg-[#0F4C81] py-3 font-semibold text-white transition hover:bg-[#0d3e68] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "🔄 Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
}
