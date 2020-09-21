document.addEventListener("DOMContentLoaded", () => {
    const flavor = document.querySelector(".flavor");
    if (flavor != null) {

        flavor.innerHTML += `<li class="flavor-textarea-header">
            <select onchange="document.execCommand ('fontSize', false, this.value);">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3" selected>3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>

            <select onchange="document.execCommand ('fontName', false, this.value);">
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Sans serif">Sans serif</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Palatino">Palatino</option>
                <option value="Garamond">Garamond</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Arial Black">Arial Black</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
            </select>
            <button class="flavor-action-btn" onclick="document.execCommand('bold',false,null);">
                <img src="../flavor-assets/bold.svg" alt="bold text">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('italic',false,null);">
                <img src="../flavor-assets/italic.svg">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('underline',false,null);">
                <img src="../flavor-assets/underline.svg">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('strikethrough',false,null);">
                <img src="../flavor-assets/strikethrough.svg">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('insertOrderedList',false,null);">
                <img src="../flavor-assets/numbered-list.svg">
            </button>

            <button class="flavor-action-btn" onclick="document.execCommand('insertUnOrderedList',false,null);">
                <img src="../flavor-assets/bullet-list.svg">
            </button>

            <button class="flavor-action-btn" onclick="document.execCommand('justifyLeft',false,null);">
                <img src="../flavor-assets/justify-left.svg">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('justifyCenter',false,null);">
                <img src="../flavor-assets/justify-center.svg">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('justifyRight',false,null);">
                <img src="../flavor-assets/justify-right.svg">
            </button>

            <button class="flavor-action-btn" onclick="document.execCommand('undo', false, null);">
                <img src="../flavor-assets/undo.svg">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('undo', false, null);">
                <img src="../flavor-assets/redo.svg">
            </button>
            <button class="flavor-action-btn delete-flavor-btn">
                <img src="../flavor-assets/delete.svg">
            </button>

            <input type="color"
                onchange="document.execCommand('styleWithCSS', false, true); document.execCommand('foreColor', false, this.value);">

        </li>

        <li class="flavor-codearea-header">
            <select onchange="document.execCommand ('fontSize', false, this.value);">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3" selected>3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>

            <select class="flavor-code-selector">
                <option value="c++" selected>C++</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="html">HTML</option>
                <option value="c">C</option>
                <option value="ruby">Ruby</option>
                <option value="php">PHP</option>
            </select>
            <input type="color"
                onchange="document.execCommand('styleWithCSS', false, true); document.execCommand('foreColor', false, this.value);">
            <button class="flavor-action-btn" onclick="document.execCommand('undo', false, null);">
                <img src="../flavor-assets/undo.svg">
            </button>
            <button class="flavor-action-btn" onclick="document.execCommand('undo', false, null);">
                <img src="../flavor-assets/redo.svg">
            </button>
            <button class="flavor-action-btn delete-flavor-btn">
                <img src="../flavor-assets/delete.svg">
            </button>
        </li>


        <li class="flavor-actions-bar">
            <button class="flavor-primary-btn" data-model="code">
                <img src="../flavor-assets/code.svg">
            </button>
            <button class="flavor-primary-btn" data-model="textarea">
                <img src="../flavor-assets/paragraph.svg">
            </button>
            <button class="flavor-primary-btn" data-model="image">
                <img src="../flavor-assets/image.svg">
            </button>
        </li>`;
        const flavorActionsBar = document.querySelector(".flavor-actions-bar");
        const flavorPrimaryBtns = document.querySelectorAll(".flavor-primary-btn");
        const flavorTextAreaHeader = document.querySelector(".flavor-textarea-header");
        const flavorCodeAreaHeader = document.querySelector(".flavor-codearea-header");
        var activeElement;

        // adding the functionality
        flavorPrimaryBtns.forEach(btn => {
            btn.addEventListener("click", event => {
                var model = btn.dataset.model;
                switch (model) {
                    case "code":
                        var prearea = document.createElement("pre");
                        prearea.classList.add("flavor-codearea");
                        prearea.classList.add("flavor-content-area");
                        prearea.style.height = "200px";

                        var codearea = document.createElement("code");
                        codearea.setAttribute("contenteditable", "true");
                        codearea.classList.add("hljs");
                        codearea.innerHTML = "write your code here";
                        prearea.appendChild(codearea);

                        flavor.insertBefore(prearea, flavorActionsBar);

                        codearea.addEventListener("focusin", () => {
                            activeElement = prearea;
                            flavorCodeAreaHeader.style.display = "inline-flex";
                            flavorTextAreaHeader.style.display = "none";
                        })
                        // codearea.addEventListener('input', (e) => {
                        //     e.target.style.height = "auto";
                        //     e.target.style.height = this.scrollHeight + "px";
                        //     e.target.parentElement.style.height = "auto";
                        // });

                        codearea.focus();
                        break;

                    case "textarea":
                        var textarea = document.createElement("div");
                        textarea.classList.add("flavor-content-area");
                        textarea.classList.add("flavor-textarea");
                        textarea.setAttribute("contenteditable", "true");
                        textarea.style.height = "200px";
                        flavor.insertBefore(textarea, flavorActionsBar);

                        textarea.addEventListener("focusin", () => {
                            activeElement = textarea;
                            flavorTextAreaHeader.style.display = "inline-flex";
                            flavorCodeAreaHeader.style.display = "none";
                        })
                        // textarea.addEventListener('input', (e) => {
                        //     e.target.style.height = "auto";
                        //     e.target.style.height = this.scrollHeight + "px";
                        //     e.target.parentElement.style.height = "auto";
                        // });

                        textarea.focus();
                        break;

                    case "image":
                        var imageUrl = prompt("paste your image url here!");
                        if (imageUrl != null && imageUrl != "") {
                            var img = document.createElement("img");
                            img.classList.add("flavor-img");
                            img.setAttribute("src", imageUrl);
                            flavor.insertBefore(img, flavorActionsBar);
                        }
                        break;

                    case "save":
                        var children = flavor.childNodes;
                        var nodes = "";
                        children.forEach(child => {
                            if (child != flavorTextAreaHeader &&
                                child != flavorCodeAreaHeader &&
                                child != flavorActionsBar && child.classList &&
                                (child.classList.contains("flavor-content-area") || (child.classList.contains("flavor-img")))
                            ) {
                                child.setAttribute("contenteditable", "false");
                                nodes += (child.outerHTML);
                            }
                        })
                        downloadToFile(nodes, "testing.html");
                }
            })
        })
        document.addEventListener('click', (e) => {
            var element = e.target;
            console.log(hasSomeParentTheClass(element, "flavor-codearea"));

            if (
                hasSomeParentTheClass(element, "flavor-textarea-header") ||
                hasSomeParentTheClass(element, "flavor-codearea-header") ||
                hasSomeParentTheClass(element, "flavor-content-area") ||
                hasSomeParentTheClass(element, "flavor-actions-bar")) {

            } else {
                flavorTextAreaHeader.style.display = "none";
                flavorCodeAreaHeader.style.display = "none";
            }
        })

        document.querySelectorAll(".delete-flavor-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                flavorTextAreaHeader.style.display = "none";
                flavorCodeAreaHeader.style.display = "none";
                activeElement.remove();
            })
        })
    }
})

function hasSomeParentTheClass(element, classname) {
    if (element && element.classList.contains(classname)) return true;
    return element.parentElement && hasSomeParentTheClass(element.parentElement, classname);
}

const downloadToFile = (content, filename) => {
    const a = document.createElement('a');
    const file = new Blob([content]);

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
};