declare class Sidebar extends mxEventSource {
    constructor(editorUi, container);;
    init();;
    collapsedImage: string;
    expandedImage: string;
    tooltipImage: string;
    searchImage: string;
    dragPreviewBorder: string;
    enableTooltips: boolean;
    tooltipBorder: number;
    tooltipDelay: number;
    dropTargetDelay: number;
    gearImage: string;
    thumbWidth: number;
    thumbHeight: number;
    thumbPadding: number;
    thumbBorder: number;
    sidebarTitleSize: number;
    sidebarTitles: boolean;
    tooltipTitles: boolean;
    maxTooltipWidth: number;
    maxTooltipHeight: number;
    addStencilsToIndex: boolean;
    defaultImageWidth: number;
    defaultImageHeight: number;
    getTooltipOffset();
    showTooltip(elt, cells, w, h, title, showLabel);
    hideTooltip();
    addDataEntry(tags, width, height, title, data);
    addEntry(tags, fn);
    searchEntries(searchTerms, count, page, success, error);
    filterTags(tags);
    cloneCell(cell, value);
    addSearchPalette(expand);
    insertSearchHint(div, searchTerm, count, page, results, len, more, terms);
    addBeerPalette(expand);
    addGeneralPalette(expand);
    addBasicPalette(dir);
    addMiscPalette(expand);
    addAdvancedPalette(expand);
    createAdvancedShapes();
    addUmlPalette(expand);
    addBpmnPalette(dir, expand);
    createTitle(label);
    createThumb(cells, width, height, parent, title, showLabel, showTitle, realWidth, realHeight);
    createItem(cells, title, showLabel, showTitle, width, height, allowCellsInserted);
    updateShapes(source, targets);
    createDropHandler(cells, allowSplit, allowCellsInserted, bounds);
    createDragPreview(width, height);
    dropAndConnect(source, targets, direction, dropCellIndex, evt);
    getDropAndConnectGeometry(source, target, direction, targets);
    createDragSource(elt, dropHandler, preview, cells, bounds);
    itemClicked(cells, ds, evt, elt);
    addClickHandler(elt, ds, cells);
    createVertexTemplateEntry(style, width, height, value, title, showLabel, showTitle, tags);
    createVertexTemplate(style, width, height, value, title, showLabel, showTitle, allowCellsInserted);
    createVertexTemplateFromData(data, width, height, title, showLabel, showTitle, allowCellsInserted);
    createVertexTemplateFromCells(cells, width, height, title, showLabel, showTitle, allowCellsInserted);
    createEdgeTemplateEntry(style, width, height, value, title, showLabel, tags, allowCellsInserted);
    createEdgeTemplate(style, width, height, value, title, showLabel, allowCellsInserted);
    createEdgeTemplateFromCells(cells, width, height, title, showLabel, allowCellsInserted);
    addPaletteFunctions(id, title, expanded, fns);
    addPalette(id, title, expanded, onInit);
    addFoldingHandler(title, content, funct);
    removePalette(id);
    addImagePalette(id, title, prefix, postfix, items, titles, tags);
    getTagsForStencil(packageName, stencilName, moreTags);
    addStencilPalette(id, title, stencilFile, style, ignore, onInit, scale, tags, customFns);
    destroy();
}

