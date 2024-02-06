/**
 * @return {RecipeOutput}
 * */
const outputMapper = x => {
    /**
     * @type {Array<OutputItem>}
     * */
    const items = [];
    /**
     * @type {Number}
     * */
    let chance = 1;
    let action = null;
    if (typeof x === "string")
        items.push(new OutputItem(x, 1));
    else {
        if ("Output" in x) {
            const output = x.Output;
            if (typeof output === "string")
                items.push(new OutputItem(output, 1));
            else if ("Item" in output)
                items.push(new OutputItem(output.Item, output.Count ?? 1));
        } else if ("Outputs" in x) {
            for (const output of x.Outputs) {
                if (typeof output === "string")
                    items.push(new OutputItem(output, 1));
                else if ("Item" in output)
                    items.push(new OutputItem(output.Item, output.Count ?? 1));
            }
        } else if ("Item" in x) {
            const item = x.Item;
            if (typeof item === "string")
                items.push(new OutputItem(item, 1));
            else if ("Item" in item)
                items.push(new OutputItem(item.Item, item.Count ?? 1));
        }
        action = x.Action;
        chance = parseFloat(x.Chance ?? chance);
    }
    return items.length < 1 && action == null ? null : new RecipeOutput(items, chance, action);
};

/**
 * @type {Array<Scp914Recipe>}
 * */
let recipes = [];

let items = [];

let translations = {};

const access = [
    { id: "SCP1", img: "" },
    { id: "SCP2", img: "" },
    { id: "SCP3", img: "" },
    { id: "Gate", img: "" },
    { id: "Nuke", img: "" },
    { id: "Armory1", img: "" },
    { id: "Armory2", img: "" },
    { id: "Armory3", img: "" },
    { id: "Checkpoint", img: "" },
    { id: "Intercom", img: "" }
];

class OutputItem {
    /**
     * @type {String}
     * */
    #item;
    /**
     * @type {Number}
     * */
    #count;

    /**
     @param item {String}
     @param count {Number}
     */
    constructor(item, count = 1) {
        this.#item = item;
        this.#count = count;
    }

    get item() {
        return this.#item;
    }

    get count() {
        return this.#count;
    }
}

class RecipeOutput {
    /**
     * @type {Array<OutputItem>}
     * */
    #items = [];
    /**
     * @type {Number}
     * */
    #chance = 1;
    /**
     * @type {String}
     * */
    #action = null;

    /**
     * @param items {Array<OutputItem>}
     * @param chance {Number}
     * @param action {String}
     * */
    constructor(items, chance = 1, action = null) {
        this.#items = items;
        this.#chance = chance;
        this.#action = action;
    }

    /**
     * @return {Array<OutputItem>}
     * */
    get items() {
        return [ ...this.#items ];
    }

    /**
     * @return {Number}
     * */
    get chance() {
        return this.#chance;
    }

    get action() {
        return this.#action;
    }

    containsItem(item) {
        return this.#items.some(x => x.item === item);
    }

}

class Scp914Recipe {
    #item = "";
    /**
     * @type {Array<RecipeOutput>}
     * */
    #rough = [];
    /**
     * @type {Array<RecipeOutput>}
     * */
    #coarse = [];
    /**
     * @type {Array<RecipeOutput>}
     * */
    #oneToOne = [];
    /**
     * @type {Array<RecipeOutput>}
     * */
    #fine = [];
    /**
     * @type {Array<RecipeOutput>}
     * */
    #veryFine = [];

    constructor(item) {
        this.#item = item;
    }

    get name() {
        return this.#item;
    }

    /**
     * @return {Array<RecipeOutput>}
     * */
    get rough() {
        return [ ...this.#rough ];
    }

    /**
     * @return {Array<RecipeOutput>}
     * */
    get coarse() {
        return [ ...this.#coarse ];
    }

    /**
     * @return {Array<RecipeOutput>}
     * */
    get oneToOne() {
        return [ ...this.#oneToOne ];
    }

    /**
     * @return {Array<RecipeOutput>}
     * */
    get fine() {
        return [ ...this.#fine ];
    }

    /**
     * @return {Array<RecipeOutput>}
     * */
    get veryFine() {
        return [ ...this.#veryFine ];
    }

    /**
     * @return {Array<RecipeOutput>}
     * */
    get allRecipes() {
        return this.#rough.concat(this.#coarse).concat(this.#oneToOne).concat(this.#fine).concat(this.#veryFine);
    }

    /**
     * @param recipe {RecipeOutput}
     * */
    getRecipeMode(recipe) {
        if (recipe == null)
            return null;
        if (this.#rough.includes(recipe))
            return "Rough";
        if (this.#coarse.includes(recipe))
            return "Coarse";
        if (this.#oneToOne.includes(recipe))
            return "1:1";
        if (this.#fine.includes(recipe))
            return "Fine";
        if (this.#veryFine.includes(recipe))
            return "Very Fine";
        return null;
    }

    /**
     * @param mode {String}
     * @param recipe {RecipeOutput}
     * */
    addRecipe(mode = "", recipe) {
        this.addRecipes(mode, [ recipe ]);
    }

    /**
     * @param mode {String}
     * @param recipes {Array<RecipeOutput>}
     * */
    addRecipes(mode = "", recipes) {
        switch (mode) {
            case "Rough":
                this.#rough = this.#rough.concat(recipes);
                break;
            case "Coarse":
                this.#coarse = this.#coarse.concat(recipes);
                break;
            case "1:1":
                this.#oneToOne = this.#oneToOne.concat(recipes);
                break;
            case "Fine":
                this.#fine = this.#fine.concat(recipes);
                break;
            case "Very Fine":
                this.#veryFine = this.#veryFine.concat(recipes);
                break;
        }
    }

    /**
     * @param mode {String}
     * @return {Array<RecipeOutput>}
     * */
    getRecipes(mode = "") {
        switch (mode) {
            case "Rough":
                return this.#rough;
            case "Coarse":
                return this.#coarse;
            case "1:1":
                return this.#oneToOne;
            case "Fine":
                return this.#fine;
            case "Very Fine":
                return this.#veryFine;
            default:
                return [];
        }
    }

    /**
     * @return {RecipeOutput}
     * */
    findRecipeWithOutput(item, mode = null) {
        for (const recipe of mode != null ? this.getRecipes(mode) : this.allRecipes)
            if (recipe.containsItem(item))
                return recipe;
        return null;
    }
}

function parseRecipes(jsonText) {
    const json = JSON.parse(jsonText);
    const outObj = [];
    for (const itemName of Object.keys(json)) {
        const itemRecipes = json[itemName];
        const obj = new Scp914Recipe(itemName);
        for (const knobSetting of Object.keys(itemRecipes)) {
            if (knobSetting === "Info")
                continue;
            /**
             * @type {Array<RecipeOutput>}
             * */
            const o = [];
            const settingOutput = itemRecipes[knobSetting];
            if (settingOutput instanceof Array) {
                for (const output of settingOutput) {
                    const result = outputMapper(output);
                    if (result != null)
                        o.push(result);
                    // if (typeof output === "string")
                    //     o.push(new Scp914Recipe([output], 1, null));
                    // else if ("Item" in output)
                    //     o.push(new Scp914Recipe(output.Item, output.Chance ?? 1, output.Action ?? null));
                    // else if ("Items" in output)
                    //     o.push(new Scp914Recipe(output.Items, output.Chance ?? 1, output.Action ?? null));
                    // else if ("Action" in output)
                    //     o.push(new Scp914Recipe([], output.Chance ?? 1, output.Action));
                }
            } else {
                const result = outputMapper(settingOutput);
                if (result != null)
                    o.push(result);
                // if ("Output" in settingOutput)
                //     o.push(new Scp914Recipe(
                //         [settingOutput.Output],
                //         settingOutput.Chance ?? 1,
                //         settingOutput.Action ?? null
                //     ));
                // else if ("Outputs" in settingOutput)
                //     o.push(new Scp914Recipe(
                //         settingOutput.Outputs.map(outputMapper),
                //         settingOutput.Chance ?? 1,
                //         settingOutput.Action ?? null
                //     ));
                // else if ("Action" in settingOutput)
                //     o.push(new Scp914Recipe(
                //         [],
                //         settingOutput.Chance ?? 1,
                //         settingOutput.Action
                //     ));
                if (typeof settingOutput === "object" && "Action" in settingOutput)
                    for (const output of o)
                        output.Action = settingOutput.Action;
            }
            const matches = knobSetting.split("/");
            for (const setting of matches ?? [])
                obj.addRecipes(setting.trim(), o);
        }
        outObj.push(obj);
    }
    return outObj;
}

const atlasSize = 2048;
const imageSize = 256;

function loadAtlas(image) {
    const atlas = document.createElement("canvas");
    atlas.width = atlasSize;
    atlas.height = atlasSize;
    const ctx = atlas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    const img = document.createElement("canvas");
    const ict = img.getContext("2d");
    img.width = img.height = imageSize;
    const progressElement = $("#loadingProgress");
    for (let y = 0; y < atlasSize; y += imageSize)
        for (let x = 0; x < atlasSize; x += imageSize) {
            ict.putImageData(ctx.getImageData(x, y, imageSize, imageSize), 0, 0);
            const i = x / imageSize + (y / imageSize) * 8;
            const item = items[i];
            const acc = access[i - items.length];
            if (item != null)
                item.icon = img.toDataURL("png");
            else if (i >= items.length && acc?.img === "")
                acc.img = img.toDataURL("png");
            progressElement.text(`${Math.round(i / (items.length + access.length) * 100)}%`);
        }

    img.remove();
    atlas.remove();
}

let mx = 0;
let my = 0;

function createItemList() {
    const list = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const div = document.createElement("div"); // main container
        div.classList.add("iconCont");
        div.onclick = function() {
            selectItem(this);
        };
        div.oncontextmenu = function() {
            return showContextMenu(this, true); // prevent default context menu from showing
        };
        const img = document.createElement("img");
        img.src = item.icon;
        img.classList.add("basicIcon");
        img.draggable = false;
        div.append(img);
        const infoCont = document.createElement("div");
        infoCont.classList.add("infoCont");
        const info = document.createElement("div");
        info.innerText = translate(item.name);
        info.classList.add("itemInfo");
        infoCont.append(info);
        div.setAttribute("item-name", item.name);
        div.setAttribute("item-category", item.category ?? "zMisc");
        div.setAttribute("item-id", i.toString());
        div.append(infoCont);
        list.push(div);
    }

    return list;
}

function loadGraph() {
    // converts the ammo unit prices to a table
    $("#unitGraphTable").remove();
    const ammo = items.filter(e => e.category === "ammo");
    const table = document.createElement("table");
    table.id = "unitGraphTable";
    const header = document.createElement("tr");
    const input = document.createElement("td");
    input.innerHTML = translate("input");
    input.classList.add("graphHeader");
    header.append(input);
    table.append(header);
    for (const item of ammo) {
        const top = document.createElement("td");
        top.innerText = translate(item.name);
        top.classList.add("graphHeaderItem");
        header.append(top);
        const row = document.createElement("tr");
        row.classList.add("graphRow");
        row.setAttribute("ammo-type", item.name);
        const input = document.createElement("td");
        input.innerText = translate(item.name);
        input.classList.add("graphInput");
        row.append(input);
        for (const ammo2 of ammo) {
            const cell = document.createElement("td");
            const price1 = item.unitPrice;
            const price2 = ammo2.unitPrice;
            const divisor = greatestCommonDivisor(price1, price2);
            cell.innerText = item === ammo2 ? "-" : `${price2 / divisor}:${price1 / divisor}`;
            cell.classList.add("graphCell");
            row.append(cell);
        }
        table.append(row);
    }
    $("#unitGraphCont").append(table);
}

function loadApp() {
    $("#langToggle, #appInfoBtn").css("visibility", "visible");
    $("#outputCont").on("mousedown", () => outputMouseDownTime = Date.now());
    $("#unitGraphCont").on("mousedown", () => outputMouseDownTime = Date.now());
    $("#graphInfo").html(translate("ammoProcessing"));
    $("#appInfoCont").html(translate("appInfo"));
    const cont = $("#itemListContainer").get(0);
    const w = window.innerWidth;
    const h = window.innerHeight;
    const scale = 256 * (w > h ? h / 1080 : w / 1920);
    cont.style.padding = `${scale * 0.25}px`;
    $("#primaryItem, #secondaryItem").css("width", `${scale}px`).css("max-width", `${scale}px`)
    .css("height", `${scale}px`).css("max-height", `${scale}px`);
    for (const e of createItemList().sort(itemSorting.currentFunction))
        cont.appendChild(e);
    loadGraph();
    $("#secondaryItem").on("click", e => {
        if (e.target.id === "secondaryItem") {
            e.target.innerText = translate("clickItem");
            targetIsSecondary = true;
        }
    });
    window.addEventListener("click", e => {
        if (!e.composedPath().some(x => x.id === "contextMenuList" || x.id === "langToggle")) // if clicked outside the context menu
            closeContextMenu();
    });
    window.addEventListener("mousemove", e => {
        mx = e.pageX;
        my = e.pageY;
    });
    window.addEventListener("keyup", e => {
        if (e.key !== "Escape")
            return;
        if (document.activeElement != null && document.activeElement !== document.body) {
            document.activeElement.blur();
            return;
        }
        if (infoActive) {
            toggleInfo();
            return;
        }
        if (ctxActive) {
            closeContextMenu();
            return;
        }
        if (graphActive) {
            closeGraph(true);
            return;
        }
        closeOutput(true);
    });
}

function getScale() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    return 256 * (w > h ? h / 1080 : w / 1920); // use 1080p as reference, get the smaller value (width or height)
}

function onResize() {
    // scale and position objects depending on window size
    const cont = $("#itemListContainer").get(0);
    const scale = getScale();
    cont.style.padding = `${scale * 0.25}px`;
    const sp = resizeImages(scale);
    $("#primaryItem, #secondaryItem").css("width", sp).css("max-width", sp).css("height", sp).css("max-height", sp);
    $("#langToggle, #settingsBtn").css("font-size", `${scale * 0.15}px`).css("padding", `${scale * 0.03}px`);
    $("#appInfoBtn").css("font-size", `${scale * 0.15}px`).css("width", `${scale * 0.25}px`)
    .css("height", `${scale * 0.25}px`).css("border-width", `${scale * 0.02}px`);
    $("#settingsBtn svg").attr("width", scale * 0.25).attr("height", scale * 0.25);
}

function resizeImages(scale) {
    // resize images and tooltips
    for (const img of $(".basicIcon").get()) {
        const multiplier = parseFloat(img.getAttribute("icon-scale"));
        img.width = img.height = scale * (isNaN(multiplier) ? 1 : multiplier); // if multiplier is not set, default to 1
    }
    for (const img of $(".accessLevel").get())
        img.width = img.height = scale * 0.25;
    const sp = `${scale}px`;
    for (const info of $(".itemInfo").css("width", sp).css("max-width", sp).css("padding", `${scale / 50}px`).get()) {
        const multiplier = parseFloat(info.parentElement.parentElement.querySelector(".basicIcon")
        ?.getAttribute("icon-scale"));
        info.style.transform = `translateY(-${scale * (isNaN(multiplier) ? 0.5 : multiplier * 0.5)}px)`;
        info.style.padding = `translateY(-${scale * (isNaN(multiplier) ? 0.02 : multiplier * 0.02)}px)`;
        info.style.width = `${scale}px`;
    }
    return sp;
}

window.addEventListener("resize", onResize);

let primaryClicks = 0;
let primaryClickTimer = 0;

let secondaryClicks = 0;
let secondaryClickTimer = 0;

let targetIsSecondary = false;
let primary = null;
let secondary = null;

function selectItem(div) {
    const s = targetIsSecondary;
    const item = div.getAttribute("item-name");
    if (item == null)
        return;
    if (s)
        secondary = item;
    else
        primary = item;
    $("#secondaryItem").css("display", "flex");
    // find path and display it
    if (primary != null && secondary != null) {
        const unused = [];
        const score = [];
        const used = [];
        const paths = [];
        const path = findPath(primary, secondary, [], unused, score);
        // TODO: sort paths
        /*if (path != null)
            paths.push([path, score[0]]);
        let i = 0;
        while (path != null) {
            used = Array.from(allUpgradeCombinations).filter(e => !unused[0]?.has(e));
            if ((path = findPath(primary, secondary, used, unused, score)) != null)
                paths.push([path, score[0]]);
            if (++i > 20)
                break;
        }
        console.log(paths);
        sortMode.hasFlag(sortModes.first) ? paths[0]?.[0] : paths.sort((a, b) => a[1] - b[1])?.[0]?.[0];*/
        $("#pathCont").css("display", "flex")
        .html(canBeMade(secondary) ? pathToHTML(path) : translate("cannotBeMade", secondary));
    }
    targetIsSecondary = false;
    const clone = div.cloneNode(true);
    clone.setAttribute("item-name", item);
    const cont = $(s ? "#secondaryItem" : "#primaryItem").html("").append(clone);
    clone.addEventListener("click", () => {
        const t = new Date().getTime();
        // double click only with 500ms tolerance
        if ((s ? secondaryClickTimer : primaryClickTimer) + 500 > t) {
            if ((s ? ++secondaryClicks : ++primaryClicks) > 0) {
                if (s) {
                    if ($("#primaryItem").html() === translate("clickPrimary"))
                        cont.css("display", "none");
                    secondary = null;
                } else
                    primary = null;
                $("#pathCont").css("display", "none");
                cont.html(translate(s ? "clickSecondary" : "clickPrimary"));
            }
        } else {
            if (s)
                secondaryClicks = 0;
            else
                primaryClicks = 0;
        }
        if (s)
            secondaryClickTimer = t;
        else
            primaryClickTimer = t;
    });
    const info = clone.getElementsByClassName("itemInfo")[0];
    if (info != null) {
        info.appendChild(document.createElement("br"));
        info.append(translate("deselect"));
    }
}

const allUpgradeCombinations = new Set();
const allModes = Object.freeze([ "Rough", "Coarse", "1:1", "Fine", "Very Fine" ]);

window.addEventListener("load", onReady);

function onReady() {
    try {
        $("#siteDescription").remove();
        // load JSON objects from DOM
        const translate = document.getElementById("translationsObj");
        translations = JSON.parse(translate.contentDocument.body.innerText);
        translate.remove();
        const json = document.getElementById("jsonObj");
        recipes = parseRecipes(json.contentDocument.body.innerText);
        for (const recipe of recipes) {
            for (const r of recipe.allRecipes)
                allUpgradeCombinations.add(`${recipe.name}${recipe.getRecipeMode(r)}`);
        }
        json.remove();
        const item = document.getElementById("itemsObj");
        items = JSON.parse(item.contentDocument.body.innerText).map(e => {
            e.icon = null;
            return e;
        });
        item.remove();ä
        $("#loadingProgress").text("Loading image...");
        const img = new Image();
        img.onload = async () => {
            loadAtlas(img);
            $("#loadingData, #loadingProgress").remove();
            img.remove();
            $("#inputContainer").css("display", "flex");
            if (lang !== "en")
                reloadLanguage();
            loadApp();
            onResize();
        };
        img.src = "data/textureAtlas.png";

    } catch (e) {
        alert("Load failed!\nBetöltés sikertelen!");
        console.error(e);
    }
}

/**
 * @param name {String}
 * @return {Scp914Recipe}
 * */
function getRecipe(name) {
    return recipes.find(e => e.name === name);
}

/**
 * @param name {String}
 * */
function getItem(name) {
    return items.find(e => e.name === name);
}

function canBeMade(item) {
    return recipes.filter(i => i.allRecipes.some(r => r.items.some(e => e.item === item))).some(i => i.name !== item);
}

function getPath(tree, from) {
    clearEmpties(tree);
    removeBadPath(tree, from);
    removeBadPath(tree, from);
    const path = [];
    let cur = tree;
    outer: while (true) {
        const paths = cur[0] ?? cur;
        if (typeof paths !== "object")
            return null;
        for (const mode of allModes) {
            if (!(mode in paths))
                continue;
            cur = paths[mode];
            if (cur == null)
                return null;
            for (let i = 0; i < cur.length; i++) {
                const e = cur[i];
                console.log(e);
                if (e.Item === from) {
                    path.push(e);
                    break outer;
                }
                if (i === 0)
                    path.push(e);
            }
        }
    }
    // path.push({Item: from});
    return path;
    // for (let treeKey in tree) {
    //     let e = tree[treeKey];
    //     if (e == null)
    //         continue;
    //     if (e instanceof Object) {
    //         if (Object.keys(e).length < 1) {
    //             tree[treeKey] = undefined;
    //             continue;
    //         }
    //         array.push(treeKey);
    //         getPath(e, from, array, compareFn);
    //     } else if (compareFn && !compareFn(from, e) || e !== from)
    //         tree[treeKey] = undefined;
    //     else
    //         array.push(treeKey);
    // }
    // return array;
}

function swapItems() {
    const p = primary;
    const s = secondary;
    targetIsSecondary = false;
    selectItem(document.querySelector(`div[item-name="${s}"]`));
    targetIsSecondary = true;
    selectItem(document.querySelector(`div[item-name="${p}"]`));
}

// TODO: sort paths
const sortMode = 1;
const sortModes = {
    first: 1,
    shortest: 2,
    safest: 4
};

Number.prototype.hasFlag = function(flag) {
    return this & flag === flag;
};

Number.prototype.setFlag = function(flag, state) {
    return !state ? this & ~flag : this | flag;
};

Number.prototype.toPercent = function(precision) {
    const n = this * 100;
    return (precision > 0 && n % 1 > 0 ? n.toFixed(precision) : n.toString()) + "%";
};

/**
 * Converts the upgrade sequence to HTML
 * @see getPathInTree
 * */
function pathToHTML(path) {
    const s = [];
    if (path == null)
        return translate("noPath");
    if (path.length < 1)
        return translate("sameItem");
    const last = path[path.length - 1].split("*");
    for (let i = 0; i < path.length - 1; i += 2) {
        if (path[i] === last) {
            s.push(translate(last));
            break;
        }
        const item = path[i].split("*");
        const split = path[i + 1].split("/");
        const chance = parseFloat(split[1]);
        s.push(`<span class="pathItem">${translate(item[0])}${item[1] === "1" ? "" : ` x${item[1]}`}</span> →
        <span class="pathMode">${split[0]},</span> <span class="pathChance">${chance.toPercent(2)}</span>`);
    }
    s.push(`<span class="pathItem">${translate(last[0])}${last[1] === "1" ? "" : ` x${last[1]}`}</span>`);
    return s.join(" →<br> ");
}

function clearEmpties(array) {
    if (array == null)
        return null;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (typeof item !== "object")
            continue;
        // for (let mode of allModes)
        //     clearEmpties(item[mode]);
        for (const key in item) {
            //console.log(item[key])
            if (item[key] instanceof Array) {
                if (item[key].length < 1)
                    delete item[key];
                else
                    clearEmpties(item[key]);
            }
        }
    }
    // for (let item of array) {
    //     if (!(item instanceof Array))
    //         continue;
    //     for (let mode of allModes)
    //         clearEmpties(item[mode]);
    //     if (Object.keys(item).every(e => !(item[e] instanceof Array) || item[e].length < 1))
    //         delete array[item];
    // }
    return array;
}

function removeBadPath(tree, find) {
    if (tree == null)
        return false;
    let empty = 0;
    let i = 0;
    for (const item of tree) {
        let key;
        const prevEmpty = empty;
        const remove = [];
        for (let key in item) {
            if (item[key] instanceof Array) {
                i++;
                if (item[key].length < 1) {
                    empty++;
                    delete item[key];
                } else {
                    empty++;
                    remove.push(key);
                }
            }
        }
        if (prevEmpty !== empty && item.Item !== find)
            return true;
        for (key of remove) {
            delete item[key];
        }
    }
    // for (let key of Object.keys(tree)) {
    //     i++;
    //     let e = tree[key];
    //     if (e == null)
    //         continue;
    //     if (e instanceof Object) {
    //         if (Object.keys(e).length < 1) {
    //             delete tree[key];
    //             empty++;
    //             continue;
    //         }
    //         if (removeBadPath(e, find))
    //             delete tree[key];
    //     } else if (e !== find) {
    //         delete tree[key];
    //         empty++;
    //     }
    // }
    return i === empty;
}


function findParent(obj, find) {
    for (const key in obj) {
        if (obj[key] === find)
            return obj;
        if (obj[key] instanceof Object)
            return findParent(obj[key], find);
    }
    return null;
}

function getKey(obj, find) {
    for (const key in obj)
        if (obj[key] === find)
            return key;
    return null;
}

let x;

/**
 * Expands all the branches of the tree
 * @return {Boolean} True if the target item was found
 * */
function doExpand(array, unused, to, outScore) {
    let found = false;
    for (const obj of array) {
        let mode;
        if (obj.Outputs.length > 0) {
            if (doExpand(obj.Outputs, unused, to, outScore))
                found = true;
            continue;
        }
        const recipe914 = getRecipe(obj.Item);
        /**
         * @type {Array<RecipeOutput>}
         * */
        const recipeList = recipe914?.allRecipes ?? [];
        for (const recipe of recipeList) {
            const mode = recipe914.getRecipeMode(recipe);
            if (!unused.has(`${obj.Item}${mode}`))
                continue;
            for (const item of recipe.items) {
                obj.Outputs.push({
                    Item: item.item,
                    Outputs: [],
                    Mode: mode,
                    Chance: recipe.chance
                });
                outScore[0]++;
                if (item.item === to)
                    found = true;
            }
        }
        for (mode of allModes) {
            unused.delete(`${obj.Item}${mode}`);
        }
        // doExpand(obj.Outputs, unused, to, outScore);
    }
    return found;
}

/**
 * Removes the wrong branches from the tree
 * @return {Boolean} if the current branch is empty and should be deleted
 * */
function removeWrongPath(tree, to) {
    if (tree.length < 1)
        return true;
    let empty = 0;
    const count = tree.length;
    for (let i = 0; i < tree.length; i++) {
        const output = tree[i];
        if (output == null) {
            empty++;
            continue;
        }
        if (output.Item === to)
            continue;
        if (output.Outputs.length > 0) {
            if (removeWrongPath(output.Outputs, to)) {
                tree.splice(i, 1);
                i--;
                empty++;
            }
        } else {
            tree.splice(i, 1);
            i--;
            empty++;
        }
    }
    return empty === count;
}

/**
 * Converts the tree to a flat array: [item, mode/chance, item] etc.
 * @return {Array<String>}
 * */
function getPathInTree(tree, to) {
    removeWrongPath(tree, to);
    const firstItem = getItem(tree[0].Item);
    let carryAmmo = firstItem.category === "ammo" ? firstItem.defaultAmount : 1;
    const path = [ `${firstItem.name}*${carryAmmo}` ];
    let cur = [ ...tree[0].Outputs ];
    let i = 0;
    let prevItem = firstItem;
    let lastMode = "1:1";
    while (true) {
        path.push(`${cur[0]?.Mode}/${cur[0]?.Chance}`);
        const curItem = getItem(cur[0]?.Item);
        if (curItem == null || curItem.name === to) {
            if (cur[0] != null)
                lastMode = cur[0].Mode;
            break;
        }
        carryAmmo = calculateExchangedAmmo(carryAmmo, prevItem.unitPrice, curItem.unitPrice);
        path.push(`${curItem.name}*${curItem.category === "ammo" ? prevItem.category === "ammo" ? carryAmmo : curItem.defaultAmount : getRecipe(prevItem.name)
        .findRecipeWithOutput(curItem.name, cur[0].Mode).items.find(x => x.item === to)?.count ?? 1}`);
        cur = [ ...(cur[0]?.Outputs ?? []) ];
        if (++i > 1000)
            break;
        prevItem = curItem;
    }
    const lastItem = getItem(to);
    path.push(`${lastItem.name}*${lastItem.category === "ammo" ? prevItem.category === "ammo" ? calculateExchangedAmmo(carryAmmo, prevItem.unitPrice, lastItem.unitPrice) : lastItem.defaultAmount : getRecipe(prevItem.name)
    .findRecipeWithOutput(lastItem.name, lastMode).items.find(x => x.item === to)?.count ?? 1}`);
    // while (!cur.some(e => e.Outputs.some(x => x.Item === to)));
    // cur = [...(cur?.[0]?.Outputs ?? [])];
    // path.push(`${cur[0]?.Mode}/${cur[0]?.Chance}`);
    return path;
}

function findDirectUpgradeMode(from, to) {
    const f = getRecipe(from);
    if (f == null)
        return null;
    return from.getRecipeMode(from.allRecipes.find(e => e.items.some(x => x.item === to)));
}

/**
 * Finds the first upgrade path from the given item to the target item
 * @return {Array<String>} Result of {@link getPathInTree} or null if no path was found
 * */
function findPath(from, to, used = [], outUnused = [], outScore = [ 0 ]) {
    if (from === to)
        return [];
    const recipe = getRecipe(from);
    if (recipe == null)
        return null;
    const o = { Item: recipe.name, Outputs: [], Chance: 1, Destroy: 0 };
    const tree = [ o ];
    // tree[recipe.name] = {};
    if (outScore[0] == null)
        outScore[0] = 0;
    // for (let r of recipe.allRecipes) {
    //     const mode = `${recipe.getRecipeMode(r)}/${r.chance}`;
    //     for (let item of r.items) {
    //         tree[recipe.name][mode] ??= {};
    //         tree[recipe.name][mode][item.item] = {};
    //     }
    // }
    const unused = new Set(Array.from(allUpgradeCombinations).filter(e => !used.includes(e)));
    // console.log(Array.from(unused).join(", "))
    // for (let recipe of recipes) {
    //     for (let r of recipe.allRecipes) {
    //         const mode = recipe.getRecipeMode(r);
    //         const v = `${recipe.name}${mode}`;
    //         if (!used.includes(v))
    //             unused.add(v);
    //     }
    // }
    console.log(tree);
    let i = 0;
    x = tree;
    while (unused.size > 0) {
        if (doExpand(tree, unused, to, outScore)) {
            outUnused[0] = unused;
            // return null;
            return getPathInTree(tree, to);
        }
        if (++i > recipes.length)
            break;
    }
    outScore[0] = 0;
    outUnused[0] = unused;
    return null;
}

function expandList(tree, unused, find) {
    let found = false;
    for (const item of tree) {
        if (!("Item" in item))
            continue;
        let destroy = 0;
        let count = 0;
        const recipe = getRecipe(item.Item);
        for (const mode of allModes) {
            const st = `${item.Item}${mode}`;
            if (!unused.has(st))
                continue;
            unused.delete(st);
            // if (!(mode in item)) {
            //     item[mode] = [];
            //     for (let r of recipe.getRecipes(mode)) {
            //         for (let i of r.items) {
            //             let o = {Item: i.item};
            //             for (let m of allModes) {
            //                 o[m] = [];
            //             }
            //             item[mode].push(o);
            //             if (i.item === find)
            //                 found = true;
            //         }
            //     }
            //     if (expandList(item[mode], unused, find, outScore))
            //         found = true;
            //     continue;
            // }
            // if (!((arr = item[mode]) instanceof Array))
            //     continue;
            if ((item[mode] ?? []).length < 1) {
                item[mode] = [];
                for (const r of recipe.getRecipes(mode)) {
                    count++;
                    if (r.action === "Destroys the Item")
                        destroy++;
                    for (const i of r.items) {
                        const o = { Item: i.item, Chance: r.chance, Destroy: 0, Mode: mode };
                        for (const m of allModes) {
                            o[m] = [];
                        }
                        item[mode].push(o);
                        if (i.item === find)
                            found = true;
                    }
                }
            } else {
                expandList(item[mode], unused, find);
                // found = true;
            }
        }
        if (count > 0)
            item.Destroy = destroy / count;
        for (mode of allModes) {
            expandList(item[mode], unused, find);
        }
        // if (found)
        //     return true;
    }
    return found;
}

function expandTree(tree, unused, find, outScore) {
    for (const treeKey in tree) {
        const e = tree[treeKey];
        const keys = Object.keys(e);
        if (keys.length > 0) {
            for (const x in e) {
                if (expandTree(e[x], unused, find, outScore))
                    return true;
            }
        } else {
            const recipe = getRecipe(treeKey);
            if (recipe == null)
                continue;
            if (outScore[0] == null)
                outScore[0] = 0;
            outScore[0]--;
            for (const r of recipe.allRecipes) {
                const mode = recipe.getRecipeMode(r);
                const string = `${recipe.name}${mode}`;
                // console.log(string, Array.from(unused))
                if (!unused.has(string))
                    continue;
                unused.delete(string);
                for (const i of r.items) {
                    // e[recipe.name] ??= {};
                    const modeChance = `${mode}/${r.chance}`;
                    e[modeChance] ??= {};
                    e[modeChance][i.item] ??= {};
                    if (i.item === find) {
                        if (sortMode.hasFlag(sortModes.safest))
                            outScore[0] += r.chance;
                        e[modeChance][i.item] = find;
                        return true;
                    }
                }
            }
            tree[treeKey] = e;
        }
    }
    return false;
}

function pathExists(from, to) {
    return findPath(from, to) != null;
}

function addAllItems(obj, recipe) {
    for (const r of recipe.allRecipes)
        for (const item of r.items)
            obj[item.item] = {};
}

function loopThroughTree(tree, unused, find) {
    for (const key of Object.keys(tree)) {
        // console.log(key)
        if (key === find) {
            tree[key] = find;
            return true;
        }
        const element = tree[key];
        const keys = element == null ? null : Object.keys(element);
        if (keys?.length ?? 0 > 0) {
            // console.log("looping through " + key)
            if (loopThroughTree(element, unused, find))
                return true;
        } else {
            // console.log(unused)
            const recipes = unused.get(key);
            if (recipes == null)
                return false;
            for (const recipe of recipes) {
                // console.log(key,"checking recipe " + recipe.name)
                if (recipe.allRecipes.some(e => e.items.some(i => i.item === find))) {
                    // console.log(tree, key)
                    tree[key][recipe.name] = find;
                    return true;
                }
                addAllItems(element, recipe);
            }
            tree[key] = element;
            unused.delete(key);
        }
    }
    return false;
}

let ctxItemName = null;
let ctxActive = null;

function resizeCtxButtons(buttons) {
    document.documentElement.style.setProperty("--ctx-btn-width", "auto");
    document.documentElement.style.setProperty("--ctx-btn-width",
        `${Math.max(...buttons.map(e => e.scrollWidth))}px`);
}

const itemSorting = {
    index: 0,
    get currentFunction() {
        return this.all[this.index];
    },
    get nextFunction() {
        return this.all[increaseIndexAndWrap(this.index, this.all)];
    },
    getData(element, data) {
        return element.getAttribute(`item-${data}`);
    },
    byId(a, b) {
        const id1 = parseInt(itemSorting.getData(a, "id"));
        const id2 = parseInt(itemSorting.getData(b, "id"));
        return id1 - id2;
    },
    byName(a, b) {
        const name1 = itemSorting.getData(a, "name");
        const name2 = itemSorting.getData(b, "name");
        return name1.localeCompare(name2);
    },
    byCategory(a, b) {
        const cat1 = itemSorting.getData(a, "category");
        const cat2 = itemSorting.getData(b, "category");
        return cat1.localeCompare(cat2);
    },
    all: []
};

itemSorting.all = [
    itemSorting.byId,
    itemSorting.byName,
    itemSorting.byCategory
];

function increaseIndexAndWrap(index, array) {
    return (index + 1) % array.length;
}

function changeSortMode() {
    itemSorting.index = increaseIndexAndWrap(itemSorting.index, itemSorting.all);
    $("#ctxSortByButton").text(translate(`sort-${itemSorting.nextFunction.name}`));
    reorderItems();
}

function reorderItems() {
    const cont = $("#itemListContainer").get(0);
    const children = Array.from(cont.querySelectorAll(".iconCont"));
    cont.innerHTML = "";
    for (const e of children.sort(itemSorting.currentFunction))
        cont.appendChild(e);
}

/**
 * @param {HTMLElement} element
 * @param {boolean} showListOptions If the "set as secondary item" option should be visible
 * @return If the default context menu should show
 * */
function showContextMenu(element, showListOptions = false) {
    if (element.innerHTML === element.innerText)
        return true;
    $("#ctxSortByButton, #ctxSetAsSecondary").css("display", showListOptions ? "block" : "none");
    const buttons = $(".ctxButton");
    buttons.get(2).style.borderTopStyle = showListOptions ? "solid" : "none";
    resizeCtxButtons(buttons.get());
    const query = $("#contextMenuList");
    const list = query.get(0);
    const verticalOverflow = my + list.scrollHeight > window.innerHeight;
    query.css("visibility", "visible")
    .css("top", my - (verticalOverflow ? list.scrollHeight : 0))
    .css("left", mx - (mx + list.scrollWidth > window.innerWidth ? list.scrollWidth : 0));
    // epic fade in animation
    list.animate([ {
        height: "0",
        opacity: "0",
        transform: verticalOverflow ? `translateY(${(list.scrollHeight - window.innerHeight * 0.01)}px)` : `translateY(0)`
    }, {
        height: `${list.scrollHeight - window.innerHeight * 0.01}px`,
        opacity: "1",
        transform: "translateY(0)"
    } ], {
        duration: 200,
        easing: "cubic-bezier(0.215, 0.61, 0.355, 1)"
    });
    ctxItemName = (element.hasAttribute("item-name") ? element : element.getElementsByClassName("iconCont")?.[0])?.getAttribute("item-name");
    ctxActive = true;
    return false;
}

function closeContextMenu() {
    ctxActive = false;
    const list = $("#contextMenuList").get(0);
    const h = list.scrollHeight - window.innerHeight * 0.01;
    const overflow = my + list.scrollHeight > window.innerHeight;
    list.animate([ {
        height: `${h}px`,
        opacity: "1",
        transform: "translateY(0)"
    }, {
        height: "0",
        opacity: "0",
        transform: overflow ? `translateY(0)` : `translateY(${h}px)`
    } ], {
        duration: 200,
        easing: "ease-out"
    }).onfinish = () => list.style.visibility = "hidden";
    const active = document.activeElement;
    if (active?.classList.contains("ctxButton"))
        active.blur();
}

let preventGuiFromClosing = false;
let outputMouseDownTime = 0;
let outputActive = false;
let graphActive = false;
let infoActive = false;

// closes the output container after a double click (400ms tolerance) or if forced
function closeOutput(override = false) {
    if (ctxActive && !override)
        return;
    const now = Date.now();
    if (outputMouseDownTime < now - 400 && !override) {
        outputMouseDownTime = now;
        return;
    }
    outputMouseDownTime = now;
    outputActive = false;
    if (!preventGuiFromClosing || override)
        $("#outputCont").css("visibility", "hidden");
    preventGuiFromClosing = false;
}

// closes the price graph container after a double click (400ms tolerance) or if forced
function unitPriceGraph() {
    preventGuiFromClosing = true;
    closeContextMenu();
    $("#unitGraphCont").css("visibility", "visible");
    graphActive = true;
}

function closeGraph(overrideClicks = false) {
    if (ctxActive && !overrideClicks)
        return;
    const now = Date.now();
    if (outputMouseDownTime < now - 400 && !overrideClicks) {
        outputMouseDownTime = now;
        return;
    }
    outputMouseDownTime = now;
    graphActive = false;
    if (!preventGuiFromClosing || overrideClicks)
        $("#unitGraphCont").css("visibility", "hidden");
    preventGuiFromClosing = false;
}

function createInfo(i) {
    const clone = interactableItemClone(i.ammo, null, "info");
    let infoSet = false;
    const infoCont = document.createElement("div");
    if (i == null)
        return { infoCont, infoSet };
    switch (i.category) {
        case "keycard": {
            infoSet = true;
            infoCont.append(translate("typeKeycard"));
            infoCont.append(document.createElement("br"));
            infoCont.append(translate("accessLevels"));
            const accessCont = document.createElement("div");
            accessCont.classList.add("accessCont");
            // access levels
            for (const level of i.access) {
                const acc = access.find(e => e.id === level);
                if (acc == null || (acc.img?.length ?? 0) < 1) {
                    accessCont.append(level); // fallback to raw value if the image is not loaded
                    continue;
                }
                const img = document.createElement("img");
                img.src = acc.img;
                img.draggable = false;
                img.classList.add("basicIcon");
                img.setAttribute("icon-scale", "0.35");
                img.alt = level;
                accessCont.append(img);
            }
            infoCont.append(accessCont);
            break;
        }
        case "firearm": {
            infoSet = true;
            infoCont.append(translate("typeFirearm"));
            infoCont.append(document.createElement("br"));
            infoCont.append(translate("magSize", i.magazineSize));
            if ("ammo" in i) {
                infoCont.append(document.createElement("br"));
                infoCont.append(translate("ammo"));
                clone.querySelector(".basicIcon").setAttribute("icon-scale", "0.5");
                infoCont.append(clone);
            }
            break;
        }
        case "ammo":
            infoSet = true;
            infoCont.append(translate("typeAmmo"));
            infoCont.append(document.createElement("br"));
            infoCont.append(`${translate("ammoPerClip")} ${i.defaultAmount}`);
            infoCont.append(document.createElement("br"));
            const unit = document.createElement("span");
            unit.classList.add("ammoUnit");
            unit.innerText = `${translate("unitPrice")} ${i.unitPrice}`;
            unit.addEventListener("click", () => {
                unitPriceGraph();
                highlight(document.querySelector(`.graphRow[ammo-type="${i.name}"]`));
            });
            infoCont.append(unit);
            infoCont.append(document.createElement("br"));
            infoCont.append(translate("usingAmmo"));
            const firearmsCont = document.createElement("div");
            firearmsCont.classList.add("outputRow");
            for (const item of items) {
                if (item.category !== "firearm" || item.ammo !== i.name)
                    continue;
                const clone = interactableItemClone(item.name, null, "info");
                firearmsCont.append(clone);
            }
            infoCont.append(firearmsCont);
            break;
        default:
            if (i.name !== "SCP-2536-2")
                break;
            infoCont.append(translate("funnyCoal"));
            infoSet = true;
            break;
    }
    return { infoCont, infoSet };
}

function itemInfo() {
    if (ctxItemName == null)
        return;
    outputActive = true;
    closeContextMenu();
    const descKey = `desc-${ctxItemName}`;
    const cont = $("#outputCont").css("visibility", "visible").css("align-content", "center")
    .attr("shown-data", "itemInfo")
    .attr("shown-item", ctxItemName).html(`<span class="pathItem">${translate(ctxItemName)}</span>`).get(0);
    const icon = document.createElement("img");
    icon.classList.add("basicIcon");
    icon.src = getItem(ctxItemName).icon;
    cont.append(icon);
    cont.append(document.createElement("br"));
    const i = getItem(ctxItemName);
    // append description, if exists
    if (descKey in translations) {
        const desc = document.createElement("div");
        desc.innerText = translate("inGameDesc", translate(descKey));
        cont.append(desc);
    }
    const { infoCont, infoSet } = createInfo(i);
    cont.append(document.createElement("br"));
    cont.append(infoCont);
    if (!infoSet)
        infoCont.innerText = translate("noInfo");
    resizeImages(getScale()); // fix size of images
}

function obtaining() {
    if (ctxItemName == null)
        return;
    outputActive = true;
    closeContextMenu();
    const cont = $("#outputCont").css("visibility", "visible").css("align-content", "unset")
    .attr("shown-data", "obtaining")
    .attr("shown-item", ctxItemName).html(`<span class="pathItem">${translate(ctxItemName)}</span><br><br>`).get(0);
    if (!canBeMade(ctxItemName)) {
        cont.innerHTML = translate("cannotBeMade", translate(ctxItemName));
        return;
    }
    let success = false;
    for (const recipe of recipes) {
        if (recipe.name === ctxItemName)
            continue;
        for (const result of recipe.allRecipes) {
            if (!result.items.some(item => item.item === ctxItemName))
                continue;
            success = true;
            const recipeMode = recipe.getRecipeMode(result);
            const div = document.createElement("div");
            div.classList.add("outputRow");
            div.setAttribute("upgrade-mode", recipeMode);
            div.append(translate("obtaining-from"));
            const clone = interactableItemClone(recipe.name, recipeMode, "obtain");
            clone.querySelector(".basicIcon").setAttribute("icon-scale", "0.5");
            div.append(clone);
            div.append(translate("obtaining-on"));
            const mode = document.createElement("span");
            mode.classList.add("pathMode");
            mode.innerText = `${recipeMode}${translate("obtaining-comma")}`;
            div.append(mode);
            const chance = document.createElement("span");
            chance.classList.add("pathChance");
            chance.innerText = result.chance.toPercent();
            div.append(chance);
            cont.append(div);
        }
    }
    if (success)
        resizeImages(getScale()); // fix size of small images
    else
        cont.innerHTML = translate("cannotBeMade", translate(ctxItemName));
}

function outputs() {
    const i = getItem(ctxItemName);
    if (i == null)
        return;
    outputActive = true;
    closeContextMenu();
    const cont = $("#outputCont").css("visibility", "visible").css("align-content", "unset").attr("shown-data", "outputs")
    .attr("shown-item", ctxItemName).html(`<span class="pathItem">${translate(ctxItemName)}</span>`).get(0);
    if (i.category === "ammo") {
        const span = document.createElement("span");
        span.classList.add("pathAction");
        span.style.fontWeight = "bold";
        span.innerText = translate("clipOf", i.defaultAmount ?? 1);
        cont.append(span);
    }
    const recipe = getRecipe(ctxItemName);
    if (outputAppendModeArray(cont, recipe.name, recipe.rough, "Rough")
        | outputAppendModeArray(cont, recipe.name, recipe.coarse, "Coarse")
        | outputAppendModeArray(cont, recipe.name, recipe.oneToOne, "1:1")
        | outputAppendModeArray(cont, recipe.name, recipe.fine, "Fine")
        | outputAppendModeArray(cont, recipe.name, recipe.veryFine, "Very Fine")
    )
        resizeImages(getScale()); // fix size of small images
    else
        cont.innerHTML = translate("noOutputs", translate(ctxItemName));
    cont.scrollTo(0, 0);
}

function outputAppendModeArray(cont, fromItem, recipes = [], mode) {
    if (recipes.length < 1)
        return false;
    const from = getItem(fromItem);
    const fromAmmo = from?.category === "ammo";
    cont.append(document.createElement("br"));
    const span = document.createElement("span");
    span.classList.add("pathMode");
    span.innerText = `${mode}${mode === "1:1" ? "" : ":"}`;
    cont.append(span);
    for (const result of recipes) {
        const div = document.createElement("div");
        div.innerHTML = "";
        const chance = document.createElement("div");
        chance.classList.add("chanceCont");
        chance.innerHTML = `${translate("probability")}: <span class="pathChance">${result.chance.toPercent()}</span>`;
        div.append(chance);
        div.classList.add("outputContainer");
        div.setAttribute("upgrade-mode", mode);
        cont.append(div);
        if (result.action != null) {
            chance.style.flexDirection = "column";
            const span = document.createElement("span");
            span.classList.add("pathAction");
            span.innerText = translate(result.action);
            div.append(span);
            continue;
        }
        const outputs = document.createElement("div");
        outputs.classList.add("outputRow");
        const items = result.items;
        const len = items.length;
        for (let i = 0; i < len; i++) {
            const output = items[i];
            const item = getItem(output?.item);
            const clone = interactableItemClone(output?.item, mode, "output");
            clone?.querySelector(".basicIcon")?.setAttribute("icon-scale", "0.5");
            (len < 2 ? div : outputs).append(clone);
            let count = output.count ?? 1;
            if (item?.category === "ammo")
                count = fromAmmo ? exchangeAmmo(from.name, item.name, from.defaultAmount)[0] : item.defaultAmount * output.count;
            if (count > 1)
                (len < 2 ? div : outputs).append(` x${count}`);
            if (i < len - 1)
                (len < 2 ? div : outputs).append(" + ");
        }
        if (len > 1) {
            div.style.flexDirection = "column";
            div.append(outputs);
        } else
            chance.style.flexDirection = "column";
        // s += translate("outputRow", result.chance * 100, result.action != null
        //     ? translate(result.action)
        //     : result.items.map(e => `${translate(e.item)} x${e.count}`).join(" + "));
    }
    return true;
}

function toggleLanguage() {
    preventGuiFromClosing = true;
    lang = lang === "en" ? "hu" : "en";
    $("#langToggle").text(lang.toUpperCase());
    localStorage.setItem("914lang", lang);
    reloadLanguage();
}

function reloadLanguage() {
    $("#loadingData").text(lang === "hu" ? "Adatok betöltése, kérlek várj" : "Loading data, please wait");
    $("#primaryItem").text(translate("clickPrimary"));
    $("#secondaryItem").text(translate("clickSecondary"));
    $("#ctxSetAsSecondary").text(translate("setAsSecondary"));
    $("#ctxSortByButton").text(translate(`sort-${itemSorting.nextFunction.name}`));
    $("#ctxInfo").text(translate("showInfo"));
    $("#ctxObtaining").text(translate("obtaining"));
    $("#ctxOutputs").text(translate("outputs"));
    $("#graphTitle").text(translate("convertAmmo"));
    $("#notice").text(translate("notAffiliated"));
    $("#graphInfo").html(translate("ammoProcessing"));
    $("#appInfoCont").html(translate("appInfo"));
    for (const cont of $(".iconCont").get())
        cont.getElementsByClassName("itemInfo")[0].innerText = translate(cont.getAttribute("item-name"));
    const out = $("#outputCont");
    const scroll = out.scrollTop();
    if (ctxItemName != null && out.css("visibility") === "visible")
        switch (out.attr("shown-data")) {
            case "itemInfo":
                itemInfo();
                break;
            case "obtaining":
                obtaining();
                break;
            case "outputs":
                outputs();
                break;
        }
    const s = targetIsSecondary;
    targetIsSecondary = false;
    if (primary != null)
        selectItem(document.querySelector(`.iconCont[item-name='${primary}']`));
    targetIsSecondary = true;
    if (secondary != null)
        selectItem(document.querySelector(`.iconCont[item-name='${secondary}']`));
    targetIsSecondary = s;
    out.scroll(0, scroll);
    loadGraph();
    resizeCtxButtons($(".ctxButton").get());
}

function translate(key, ...args) {
    const o = translations[key];
    let s = o?.[lang] ?? o?.["en"] ?? key;
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        s = s.replace(`{${i}}`, arg);
    }
    return s;
}

function createItemClone(item) {
    const div = document.querySelector(`.iconCont[item-name='${item}']`);
    if (div == null)
        return null;
    return div.cloneNode(true);
}

function interactableItemClone(item, mode, doubleClickAction) {
    const clone = createItemClone(item);
    if (clone == null)
        return null;
    clone.setAttribute("last-click", "0");
    if (doubleClickAction != null)
        clone.addEventListener("click", () => {
            const now = Date.now();
            let clicked = parseInt(clone.getAttribute("last-click"));
            if (isNaN(clicked))
                clicked = now;
            clone.setAttribute("last-click", now);
            preventGuiFromClosing = true;
            if (now - clicked > 500)
                return;
            executeDoubleClick(clone, item, mode, doubleClickAction);
        });
    clone.oncontextmenu = function() {
        return showContextMenu(this);
    };
    return clone;
}

function executeDoubleClick(element, item, mode, action) {
    const cur = $("#outputCont").attr("shown-item");
    switch (action) {
        case "info":
            ctxItemName = item;
            itemInfo();
            break;
        case "obtain": {
            ctxItemName = item;
            outputs();
            const recipe = getRecipe(item)?.findRecipeWithOutput(cur, mode);
            for (const e of $(`#outputCont [upgrade-mode='${mode}']`).get())
                for (const i of e.querySelectorAll(".iconCont")) {
                    if (!recipe.containsItem(i.getAttribute("item-name")))
                        continue;
                    highlight(e);
                    return;
                }
            break;
        }
        case "output": {
            ctxItemName = item;
            obtaining();
            highlight($(`#outputCont [upgrade-mode="${mode}"] .iconCont[item-name="${cur}"]`).get(0)?.parentElement);
            break;
        }
    }
}

function highlight(container) {
    if (container == null)
        return;
    container.scrollIntoView();
    container.animate([
        { backgroundColor: "transparent" }, {
            backgroundColor: "rgba(255, 255, 0, 0.4)",
            offset: 0.05
        }, {
            backgroundColor: "rgba(255, 255, 0, 0.4)",
            offset: 0.9
        }, { backgroundColor: "transparent", offset: 1 } ], {
        duration: 3000,
        easing: "linear"
    });
}

function exchangeAmmo(ammoTypeToExchange, targetAmmoType, amount) {
    const ammoItem1 = getItem(ammoTypeToExchange);
    const ammoItem2 = getItem(targetAmmoType);
    if (ammoItem1?.category !== "ammo" || ammoItem2?.category !== "ammo")
        return [ 0, 0 ];
    if (amount == null)
        amount = ammoItem1.defaultAmount;
    const unitPrice1 = ammoItem1.unitPrice;
    const unitPrice2 = ammoItem2.unitPrice;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    for (let index = 0; index < amount; ++index) {
        num3 += unitPrice1;
        ++num1;
        if (num3 % unitPrice2 === 0) {
            num2 += num3 / unitPrice2;
            num1 = 0;
            num3 = 0;
        }
    }
    return [ num2, num1 ];
}

function leastCommonMultiple(x, y) {
    if (typeof x !== "number" || typeof y !== "number")
        return false;
    return !x || !y ? 0 : Math.abs((x * y) / greatestCommonDivisor(x, y));
}

function greatestCommonDivisor(x, y) {
    if (isNaN(x) || isNaN(y))
        return NaN;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        const t = y;
        y = x % y;
        x = t;
    }
    return x;
}

function calculateRemainingAmmo(amount, fromPrice, toPrice) {
    return amount - calculateExchangedAmmo(amount, fromPrice, toPrice) * (toPrice / fromPrice);
}

function calculateExchangedAmmo(amount, fromPrice, toPrice) {
    return Math.floor(amount * (fromPrice / toPrice));
}

function toggleInfo() {
    infoActive = !infoActive;
    preventGuiFromClosing = false;
    $("#appInfoCont").css("visibility", infoActive ? "visible" : "hidden");
    $("#appInfoBtn").css("background-color", infoActive ? "rgba(50, 50, 200, 0.4)" : "transparent")
    .css("color", infoActive ? "rgb(200, 50, 100)" : "rgb(200, 200, 200)");
}