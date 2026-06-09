import { motion } from 'motion/react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile';
}

function LanguageSwitcherComponent({ variant = 'desktop' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language === 'hi' ? 'hi' : 'en';

  const toggleLanguage = (lang: 'en' | 'hi') => {
    void i18n.changeLanguage(lang);
  };

  const btnClass = "relative h-full px-4 flex items-center justify-center rounded-full text-[10.5px] font-black uppercase tracking-wider transition-all duration-300 z-10";

  if (variant === 'mobile') {
    return (
      <div className="flex w-full items-center p-1 bg-slate-100 rounded-xl border border-slate-200 h-11">
        {(['en', 'hi'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => toggleLanguage(lang)}
            className={`relative flex-1 h-full flex items-center justify-center rounded-lg text-xs font-black uppercase transition-all duration-300 z-10 ${
              currentLanguage === lang ? 'text-slate-900' : 'text-slate-500'
            }`}
          >
            {currentLanguage === lang && (
              <motion.div
                layoutId={`activeLangMobile-${variant}`}
                className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm"
                transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
              />
            )}
            {lang === 'en' ? 'EN' : 'हिन्दी'}
          </button>
        ))}
      </div>
    );
  }

  // Desktop variant
  return (
    <div className="flex items-center h-10 bg-slate-100 rounded-full p-1 border border-slate-200 shadow-sm overflow-hidden">
      <button
        onClick={() => toggleLanguage('en')}
        className={`${btnClass} ${currentLanguage === 'en' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
      >
        {currentLanguage === 'en' && (
          <motion.div
            layoutId="activeLangEN"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
          />
        )}
        <span className="relative">EN</span>
      </button>
      
      <div className="w-[1px] h-3.5 bg-slate-300 mx-0.5 z-0" />

      <button
        onClick={() => toggleLanguage('hi')}
        className={`${btnClass} ${currentLanguage === 'hi' ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
      >
        {currentLanguage === 'hi' && (
          <motion.div
            layoutId="activeLangHI"
            className="absolute inset-0 bg-white rounded-full shadow-sm"
            transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
          />
        )}
        <span className="relative">हिन्दी</span>
      </button>
    </div>
  );
}

const LanguageSwitcher = memo(LanguageSwitcherComponent);

export default LanguageSwitcher;
