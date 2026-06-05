import { useSelector } from "react-redux";
import { MdDarkMode, MdLanguage } from "react-icons/md";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { updatePreferences } from "../redux/actions/authenticationAction";

const Setting = () => {
  const { preferences, usersData } = useSelector(
    (state) => state.authenticationReducer,
  );

  const authData = useSelector((state) => state.authenticationReducer);

  const { isAuthenticated} = authData;

  const dispatch = useDispatch();
  const theme = preferences?.theme;
  const language = preferences?.language;

  const [selectedTheme, setSelectedTheme] = useState(theme || "light");
  const [selectedLanguage, setSelectedLanguage] = useState(language || "en");

  useEffect(() => {
    setSelectedTheme(theme || "light");
    setSelectedLanguage(language || "en");
  }, [theme, language]);

  const uid = usersData?.uid;
  const handleSaveChanges = async () => {
    if(!isAuthenticated) {
      toast.error("Please Login first");
      return;
    }
    const success = await dispatch(
      updatePreferences(uid, selectedTheme, selectedLanguage),
    );

    if (success) {
      toast.success("Settings updated successfully!");
    } else {
      toast.error("Failed to update settings");
    }
  };
  return (
    <div className="min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-4rem)] flex justify-center items-center p-4">
      <div className="w-full max-w-4xl flex flex-col gap-4">
        {/* Theme */}
        <div className="flex flex-col sm:flex-row items-center gap-4 rounded-lg bg-white/20 p-3">
          <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white/30 p-3 sm:w-32">
            <MdDarkMode className="text-3xl" />
            <p className="font-semibold">Theme</p>
          </div>

          <div className="flex-1 w-full rounded-lg bg-white/30 p-5">
            <div className="flex justify-center gap-4">
              <label
                htmlFor="Light"
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-6 py-3 transition-all duration-200 hover:bg-white/20"
              >
                <input
                  id="Light"
                  name="theme"
                  type="radio"
                  value="light"
                  checked={selectedTheme === "light"}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="h-4 w-4"
                />
                <span className="font-semibold">Light</span>
              </label>

              <label
                htmlFor="Dark"
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-6 py-3 transition-all duration-200 hover:bg-white/20"
              >
                <input
                  id="Dark"
                  name="theme"
                  type="radio"
                  value="dark"
                  checked={selectedTheme === "dark"}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="h-4 w-4"
                />
                <span className="font-semibold">Dark</span>
              </label>
            </div>
          </div>
        </div>

        {/* Language */}
        <div className="flex flex-col sm:flex-row items-center gap-4 rounded-lg bg-white/20 p-3">
          <div className="flex w-full flex-col items-center justify-center rounded-lg bg-white/30 p-3 sm:w-32">
            <MdLanguage className="text-3xl" />
            <p className="font-semibold">Language</p>
          </div>

          <div className="flex-1 w-full rounded-lg bg-white/30 p-5">
            <div className="flex flex-wrap justify-center gap-4">
              <label
                htmlFor="English"
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-6 py-3 transition-all duration-200 hover:bg-white/20"
              >
                <input
                  id="English"
                  name="language"
                  type="radio"
                  value="en"
                  checked={selectedLanguage === "en"}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="h-4 w-4"
                />
                <span className="font-semibold">English</span>
              </label>

              <label
                htmlFor="Hindi"
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-6 py-3 transition-all duration-200 hover:bg-white/20"
              >
                <input
                  id="Hindi"
                  name="language"
                  type="radio"
                  value="hi"
                  checked={selectedLanguage === "hi"}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="h-4 w-4"
                />
                <span className="font-semibold">Hindi</span>
              </label>

              <label
                htmlFor="Marathi"
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-6 py-3 transition-all duration-200 hover:bg-white/20"
              >
                <input
                  id="Marathi"
                  name="language"
                  type="radio"
                  value="mr"
                  checked={selectedLanguage === "mr"}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="h-4 w-4"
                />
                <span className="font-semibold">Marathi</span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={handleSaveChanges}
            className="rounded-lg bg-green-500 px-8 py-3 font-semibold transition-all duration-200 hover:bg-green-600 active:scale-95"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
