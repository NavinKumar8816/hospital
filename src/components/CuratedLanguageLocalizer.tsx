import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { curatedHindiPhrases } from '../localization/curatedHindiPhrases';

const textOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Record<string, string>>();
const translatedAttributes = ['placeholder', 'title', 'aria-label'];

const translateText = (value: string, language: string) => {
  if (language !== 'hi') return value;
  const trimmed = value.trim();
  const translated = curatedHindiPhrases[trimmed];
  if (!translated) return value;
  return value.replace(trimmed, translated);
};

const shouldSkipNode = (node: Node) => {
  const parent = node.parentElement;
  if (!parent) return true;
  return ['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION'].includes(parent.tagName);
};

function CuratedLanguageLocalizerComponent() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const applyLanguage = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const textNodes: Text[] = [];

      while (walker.nextNode()) {
        const node = walker.currentNode as Text;
        if (!shouldSkipNode(node) && node.nodeValue?.trim()) {
          textNodes.push(node);
        }
      }

      textNodes.forEach((node) => {
        if (!textOriginals.has(node)) {
          textOriginals.set(node, node.nodeValue || '');
        }
        const original = textOriginals.get(node) || '';
        node.nodeValue = translateText(original, i18n.language);
      });

      document.querySelectorAll<HTMLElement>('[placeholder], [title], [aria-label]').forEach((element) => {
        if (!attributeOriginals.has(element)) {
          const originals: Record<string, string> = {};
          translatedAttributes.forEach((attribute) => {
            const value = element.getAttribute(attribute);
            if (value) originals[attribute] = value;
          });
          attributeOriginals.set(element, originals);
        }

        const originals = attributeOriginals.get(element) || {};
        Object.entries(originals).forEach(([attribute, value]) => {
          element.setAttribute(attribute, translateText(value, i18n.language));
        });
      });
    };

    applyLanguage();
    const observer = new MutationObserver(applyLanguage);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [i18n.language]);

  return null;
}

const CuratedLanguageLocalizer = memo(CuratedLanguageLocalizerComponent);
export { CuratedLanguageLocalizer as default };
