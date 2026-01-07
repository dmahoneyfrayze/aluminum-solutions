"use client";

export default function CookiePreferencesLink() {
    return (
        <button
            onClick={() => window.dispatchEvent(new Event("reset-cookie-consent"))}
            className="hover:text-white transition-colors text-slate-500 text-sm"
        >
            Cookie Preferences
        </button>
    );
}
