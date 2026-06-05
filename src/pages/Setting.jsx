import { useSelector, useDispatch } from "react-redux";
import { MdDarkMode, MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { updatePreferences } from "../redux/actions/authenticationAction";

const Setting = () => {
  const { preferences, usersData, isAuthenticated } = useSelector(
    (state) => state.authenticationReducer,
  );

  const dispatch = useDispatch();

  const theme = preferences?.theme;
  const language = preferences?.language;

  const isDark = theme === "dark";

  const [selectedTheme, setSelectedTheme] = useState(theme || "light");
  const [selectedLanguage, setSelectedLanguage] = useState(language || "en");

  useEffect(() => {
    setSelectedTheme(theme || "light");
    setSelectedLanguage(language || "en");
  }, [theme, language]);

  const uid = usersData?.uid;

  const handleSaveChanges = async () => {
    if (!isAuthenticated) {
      toast.error("Please Login");
      return;
    }

    const success = await dispatch(
      updatePreferences(uid, selectedTheme, selectedLanguage),
    );
    if (success) {
      localStorage.setItem("theme", selectedTheme);
      toast.success("Settings updated successfully!");
    } else {
      toast.error("Failed to update settings");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-4 sm:min-h-[calc(100vh-4rem)]">
      <div className="flex w-full max-w-4xl flex-col gap-4">
        {/* Theme */}
        <div
          className={`flex flex-col items-center gap-4 rounded-lg border p-3 shadow-sm sm:flex-row ${
            isDark
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-200 bg-white text-slate-900"
          }`}
        >
          <div
            className={`flex w-full flex-col items-center justify-center rounded-lg border p-3 sm:w-32 ${
              isDark
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <MdDarkMode className="text-3xl" />
            <p className="font-semibold">Theme</p>
          </div>

          <div
            className={`w-full flex-1 rounded-lg border p-5 ${
              isDark
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <div className="flex justify-center gap-4">
              <label
                htmlFor="Light"
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-6 py-3 ${
                  isDark
                    ? "border-slate-600 hover:bg-slate-800"
                    : "border-slate-300 hover:bg-slate-100"
                }`}
              >
                <input
                  id="Light"
                  name="theme"
                  type="radio"
                  value="light"
                  checked={selectedTheme === "light"}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                />
                <span className="font-semibold">Light</span>
              </label>

              <label
                htmlFor="Dark"
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-6 py-3 ${
                  isDark
                    ? "border-slate-600 hover:bg-slate-800"
                    : "border-slate-300 hover:bg-slate-100"
                }`}
              >
                <input
                  id="Dark"
                  name="theme"
                  type="radio"
                  value="dark"
                  checked={selectedTheme === "dark"}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                />
                <span className="font-semibold">Dark</span>
              </label>
            </div>
          </div>
        </div>

        {/* Language */}
        <div
          className={`flex flex-col items-center gap-4 rounded-lg border p-3 shadow-sm sm:flex-row ${
            isDark
              ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-200 bg-white text-slate-900"
          }`}
        >
          <div
            className={`flex w-full flex-col items-center justify-center rounded-lg border p-3 sm:w-32 ${
              isDark
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <MdLanguage className="text-3xl" />
            <p className="font-semibold">Language</p>
          </div>

          <div
            className={`w-full flex-1 rounded-lg border p-5 ${
              isDark
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "English", value: "en" },
                { label: "Hindi", value: "hi" },
                { label: "Marathi", value: "mr" },
              ].map((lang) => (
                <label
                  key={lang.value}
                  htmlFor={lang.label}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border px-6 py-3 ${
                    isDark
                      ? "border-slate-600 hover:bg-slate-800"
                      : "border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <input
                    id={lang.label}
                    name="language"
                    type="radio"
                    value={lang.value}
                    checked={selectedLanguage === lang.value}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                  />
                  <span className="font-semibold">{lang.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={handleSaveChanges}
            className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-600 active:scale-95"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
