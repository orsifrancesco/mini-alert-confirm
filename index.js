import './index.css';

window.addEventListener('load', () => {

    var newEl = document.createElement('div');
    newEl.id = "mini-alert-confirm";
    newEl.innerHTML = (`
<div class="box">
    <div class="ico"></div>
    <div class="text"></div>
    <div class="buttons-container">
        <div class="button">Ok</div>
    </div>
    <div class="buttons-container buttons-container--confirm">
        <div class="button button--ok">Ok</div><!--
        --><div class="button button--v2">Cancel</div>
    </div>
</div>
`);
    document.querySelector("body").appendChild(newEl);

});

const close = function () {
    document.querySelector("html").classList.remove("show-mini-alert-confirm");
    setTimeout(function () {
        document.querySelector("html").classList.remove("show-mini-alert-confirm--confirm");
    }, 500);
}

const replaceEl = function (el) {

    const old_element = el;
    const new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

}

const miniAlertConfirm = function (text, callback) {

    document.querySelector("html").classList.add("show-mini-alert-confirm");
    document.querySelector("#mini-alert-confirm .text").innerHTML = text;

    replaceEl(document.querySelector("#mini-alert-confirm .button--ok"));
    replaceEl(document.querySelector("#mini-alert-confirm .button--v2"));

    if (callback) {

        const confirmBind = function () { callback(); close(); }
        document.querySelector("html").classList.add("show-mini-alert-confirm--confirm");
        document.querySelector("#mini-alert-confirm .button--ok").addEventListener("click", confirmBind);
        document.querySelector("#mini-alert-confirm .button--v2").addEventListener("click", close);

    } else {

        document.querySelector("#mini-alert-confirm .button").addEventListener("click", close);

    }

}

export default miniAlertConfirm;