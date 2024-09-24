import {articles} from "./articles.js";
const blogContainer = document.querySelector('section')

/**
 * Créé un Element HTML spécifié par le paramètre tagName auquel on ajoute
 * un contenu spécifié par content
 * @param {string}tagName
 * @param {string}content
 * @return {HTMLAnchorElement | HTMLElement | HTMLAreaElement | HTMLAudioElement | HTMLBaseElement | HTMLQuoteElement | HTMLBodyElement | HTMLBRElement | HTMLButtonElement | HTMLCanvasElement | HTMLTableCaptionElement | HTMLTableColElement | HTMLDataElement | HTMLDataListElement | HTMLModElement | HTMLDetailsElement | HTMLDialogElement | HTMLDivElement | HTMLDListElement | HTMLEmbedElement | HTMLFieldSetElement | HTMLFormElement | HTMLHeadingElement | HTMLHeadElement | HTMLHRElement | HTMLHtmlElement | HTMLIFrameElement | HTMLImageElement | HTMLInputElement | HTMLLabelElement | HTMLLegendElement | HTMLLIElement | HTMLLinkElement | HTMLMapElement | HTMLMenuElement | HTMLMetaElement | HTMLMeterElement | HTMLObjectElement | HTMLOListElement | HTMLOptGroupElement | HTMLOptionElement | HTMLOutputElement | HTMLParagraphElement | HTMLPictureElement | HTMLPreElement | HTMLProgressElement | HTMLScriptElement | HTMLSelectElement | HTMLSlotElement | HTMLSourceElement | HTMLSpanElement | HTMLStyleElement | HTMLTableElement | HTMLTableSectionElement | HTMLTableCellElement | HTMLTemplateElement | HTMLTextAreaElement | HTMLTimeElement | HTMLTitleElement | HTMLTableRowElement | HTMLTrackElement | HTMLUListElement | HTMLVideoElement}
 */
function ajoutElemAvecTexte(tagName, content) {
    // A compléter
}

/**
 * Créé un HTMLElement représentant un article avec son titre en h2
 * et son résumé dans un p
 * @param {{id: number, title: string, summary: string}}article
 * @return {HTMLElement}
 */
function ajoutArticle(article) {
    // A compléter
}


/**
 * Ajoute les articles créés dans le blogContainer de type section
 */
for (const article of articles) {
    blogContainer.append(ajoutArticle(article))
}