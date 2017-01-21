// getMetaValue function: get a meta tag's content attr by its tag name
function getMetaValue(metaElementName) {
    var metaElements = w.document.getElementsByTagName('meta');
    var metaElement;

    for (var i = 0; i < metaElements.length; i++) {
        if (metaElements[i].name && metaElements[i].name === metaElementName) {
            metaElement = metaElements[i];
            break;
        }
    }

    return metaElement && metaElement.content;
}
