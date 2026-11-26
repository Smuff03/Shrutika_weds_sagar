import { useLang } from "./i18n";

export default function LanguageToggle() {
    const { lang, toggle } = useLang();
    return (
        <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            data-testid="language-toggle"
            aria-label="Switch language"
        >
            {lang === "en" ? "मराठी" : "English"}
        </button>
    );
}
